import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  tableCellClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Feedback, Task, TestUser } from '@prisma/client';
import { LoaderFunction, useLoaderData, useNavigate } from 'remix';
import { db } from '~/db.server';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const loader: LoaderFunction = async () => {
  await db.$connect();
  const feedback = await db.feedback.findMany({
    take: 4,
    orderBy: {
      createdAt: 'asc',
    },
    include: {
      author: true,
      task: true,
    },
  });
  db.$disconnect();

  return feedback;
};

type FeedbackWithAuthorAndTask = Array<
  Feedback & {
    author: TestUser;
    task: Task | null;
  }
>;

// eslint-disable-next-line react/display-name
export default () => {
  const feedback = useLoaderData<FeedbackWithAuthorAndTask>();
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User Unique Id</StyledTableCell>
            <StyledTableCell align="center">Details</StyledTableCell>
            <StyledTableCell align="center">Task</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedback.map((f) => (
            <StyledTableRow
              hover
              key={f.authorId}
              onClick={() => navigate(`/feedback/${f.id}`)}
            >
              <StyledTableCell component="th" scope="row">
                {f.author.display}
              </StyledTableCell>
              <StyledTableCell align="center">{f.details}</StyledTableCell>
              <StyledTableCell align="center">{f.taskId}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
