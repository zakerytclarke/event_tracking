import { Outlet } from 'remix';

export default () => {
  return (
    <div>
      <h1>Feedback goes here</h1>
      <Outlet />
    </div>
  );
};
