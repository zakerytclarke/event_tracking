import { Outlet } from "remix";

export default () => {
  return (
    <div>
      <h1>Users go here</h1>
      <Outlet />
    </div>
  );
};
