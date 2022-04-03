import { Prisma } from '@prisma/client';
import { LoaderFunction, json } from 'remix';
import { db } from '~/db.server';

export const loader: LoaderFunction = async ({ request }) => {
  const events = await db.event.findMany();
  return json({ success: true, events }, 200);
};
