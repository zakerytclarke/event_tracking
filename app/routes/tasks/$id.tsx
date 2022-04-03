import {
  Grid,
  IconButton,
  ListItem,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import { Step, StepsOnTasks, Task } from '@prisma/client';
import { ActionFunction, Form, LoaderFunction, useLoaderData } from 'remix';
import { z } from 'zod';
import ReordableList from '~/components/ReordableList';
import { db } from '~/db.server';
import { useState } from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';

type TaskWithSteps = Task & {
  steps: (StepsOnTasks & {
    step: Step;
  })[];
};

type StepsOnTasksWithStep = StepsOnTasks & {
  step: Step;
};

export const loader: LoaderFunction = async ({ params }) => {
  const id = z.string().parse(params.id);

  await db.$connect();

  const task = await db.task.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      steps: {
        include: {
          step: true,
        },
        orderBy: {
          order: 'asc',
        },
      },
    },
  });

  db.$disconnect();

  if (!task) {
    throw new Response('Not Found', {
      status: 404,
    });
  }

  return task;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const { _action, ...values } = Object.fromEntries(formData);

  if (_action === 'updateStepOrder') {
    console.log(values);
    const steps: Array<StepsOnTasks> = JSON.parse(
      '[' + values.steps.toString() + ']'
    );
    console.log(steps);

    await db.$connect();

    for (let i = 0; i < steps.length; i++) {
      const current = steps[i];
      await db.stepsOnTasks.update({
        where: {
          taskId_stepId: {
            stepId: current.stepId,
            taskId: current.taskId,
          },
        },
        data: {
          order: i,
        },
      });
    }
  }

  return null;
};

export default () => {
  const task = useLoaderData<TaskWithSteps>();
  const [steps, setSteps] = useState<Array<StepsOnTasksWithStep>>(task.steps);

  const [dragEnabled, setDragEnabled] = useState<boolean>(false);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {task.name}
      </Grid>
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
            {dragEnabled ? (
              <>
                <Form method="post">
                  <input
                    type="hidden"
                    name="steps"
                    value={steps.map(({ stepId, taskId, order }) =>
                      JSON.stringify({ stepId, taskId, order })
                    )}
                  />
                  <Button onClick={() => setDragEnabled(!dragEnabled)}>
                    Cancel
                  </Button>
                  <Button
                    value="updateStepOrder"
                    name="_action"
                    type="submit"
                    onClick={() => console.log('Save Step order')}
                  >
                    Save step order
                  </Button>
                </Form>
              </>
            ) : (
              <Button onClick={() => setDragEnabled(!dragEnabled)}>
                Edit Step Order
              </Button>
            )}
          </Toolbar>
          <ReordableList<StepsOnTasksWithStep>
            getId={(item) => item.stepId}
            renderItem={(item, drag) => (
              <ListItem
                secondaryAction={
                  <div ref={drag}>
                    <IconButton edge="end" disabled={!dragEnabled}>
                      <ViewListIcon />
                    </IconButton>
                  </div>
                }
                disablePadding
              >
                <ListItemText id={`${item.stepId}`} primary={item.step.name} />
              </ListItem>
            )}
            items={steps}
            setItems={setSteps}
            dragEnabled={dragEnabled}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export function CatchBoundary() {
  return (
    <div>
      <h2>We couldn&apos;t find that page!</h2>
    </div>
  );
}
