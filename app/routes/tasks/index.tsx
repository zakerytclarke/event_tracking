import { Button } from '@mui/material';
import { Link } from 'remix';

export default () => {
  return (
    <div>
      Tasks Index
      <Link to="/tasks/new" style={{ textDecoration: 'none' }}>
        <Button variant="contained">Create New Task</Button>
      </Link>
    </div>
  );
};
