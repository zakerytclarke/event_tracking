import { Box } from '@mui/material';
import { Outlet } from 'remix';

export default () => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h1>Tasks go here</h1>
      <Outlet />
    </Box>
  );
};
