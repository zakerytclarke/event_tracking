import { LoaderFunction, useLoaderData } from 'remix';
import { z } from 'zod';
import { db } from '~/db.server';

export const loader: LoaderFunction = async ({ params }) => {
  const id = z.string().parse(params.id);

  await db.$connect();
  const step = await db.step.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      tasks: true,
    },
  });

  db.$disconnect();

  return step;
};

export default () => {
  const step = useLoaderData();
  return <div>{JSON.stringify(step)}</div>;
};
