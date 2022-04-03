import {
  FormControl,
  IconButton,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Grid,
  Box,
  Modal,
  Typography,
  Toolbar,
  Paper,
} from '@mui/material';
import { Step } from '@prisma/client';
import { useEffect, useState } from 'react';
import { ActionFunction, Form, redirect, useActionData } from 'remix';
import ReordableList from '~/components/ReordableList';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import { db } from '~/db.server';
import { CreateStepObject } from '~/types/steps';
import { CreateTaskObject } from '~/types/tasks';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const { _action, ...values } = Object.fromEntries(formData);

  if (_action === 'createTask') {
    console.log('Create task');
    const parsedValues = {
      ...values,
      steps: values.steps
        .toString()
        .split(',')
        .map((v) => parseInt(v)),
    };
    const data = CreateTaskObject.parse(parsedValues);

    await db.$connect();
    const task = await db.task.create({
      data: {
        ...data,
        steps: {
          createMany: {
            data: data.steps.map((s, i) => ({
              stepId: s,
              order: i,
            })),
          },
        },
      },
    });

    db.$disconnect();

    return redirect(`/tasks/${task.id}`);
  }

  if (_action === 'createStep') {
    console.log('Create Step');
    const data = CreateStepObject.parse(values);
    await db.$connect();
    const step = await db.step.create({ data });

    db.$disconnect();
    return { step };
  }

  return null;
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default () => {
  const actionData = useActionData();
  const [steps, setSteps] = useState<Array<Step>>([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const step = actionData?.step;

  useEffect(() => {
    if (step) {
      handleClose();
      setSteps((prevSteps) => [...prevSteps, step]);
    }
  }, [step]);

  return (
    <>
      <Form method="post" style={{ height: '100%' }}>
        <input
          type="hidden"
          name="steps"
          value={steps.map((value) => `${value.id}`)}
        />
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField required variant="outlined" label="Name" name="name" />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Description"
                multiline
                rows={4}
                name="description"
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => handleOpen()}
            >
              Add Step
            </Button>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => handleOpen()}
            >
              Create Step
            </Button>
          </Grid>
          {steps.length > 0 && (
            <Grid item xs={12}>
              <Paper>
                <Toolbar
                  sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                  }}
                >
                  <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                  >
                    Steps
                  </Typography>
                </Toolbar>
                <ReordableList<Step>
                  getId={(item) => item.id}
                  renderItem={(item, drag) => (
                    <ListItem
                      secondaryAction={
                        <div ref={drag}>
                          <IconButton edge="end">
                            <ViewListIcon />
                          </IconButton>
                        </div>
                      }
                      disablePadding
                    >
                      <ListItemText id={`${item.id}`} primary={item.name} />
                    </ListItem>
                  )}
                  items={steps}
                  setItems={setSteps}
                />
              </Paper>
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Button
              variant="contained"
              type="submit"
              name="_action"
              value="createTask"
            >
              Create Task
            </Button>
          </Grid>
        </Grid>
      </Form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form method="post">
            <FormControl fullWidth>
              <TextField required variant="outlined" label="Name" name="name" />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Description"
                multiline
                rows={4}
                name="description"
                inputProps={{ minLength: 3 }}
              />
            </FormControl>

            <FormControl
              fullWidth
              sx={{
                justifyContent: 'flex-end',
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                type="submit"
                name="_action"
                value="createStep"
              >
                Create Step
              </Button>
            </FormControl>
          </Form>
        </Box>
      </Modal>
    </>
  );
};
