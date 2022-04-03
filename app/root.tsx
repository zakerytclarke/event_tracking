import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import Grid from '@mui/material/Grid';
import { Button, Stack } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' };
};

export default function App() {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ height: '100%' }}>
        <DndProvider backend={HTML5Backend}>
          <Grid container spacing={2} style={{ height: '100%' }}>
            <Grid item xs={3}>
              <Stack
                justifyContent="flex-start"
                alignItems="center"
                spacing={4}
              >
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button>Dashboard</Button>
                </Link>
                <Link to="/tasks" style={{ textDecoration: 'none' }}>
                  <Button>Tasks</Button>
                </Link>
                <Link to="/feedback">Feedback</Link>
                <Link to="/testUsers">Test Users</Link>
              </Stack>
            </Grid>
            <Grid item xs={9}>
              <Outlet />
            </Grid>
          </Grid>
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </DndProvider>
      </body>
    </html>
  );
}
