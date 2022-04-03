import { Prisma } from '@prisma/client';
import { ActionFunction, json } from 'remix';
import { db } from '~/db.server';

export const action: ActionFunction = async ({ request }) => {
  switch (request.method) {
    case 'POST': {
      const testUser = await request.json();

      try {
        await db.$connect();
        const value = await db.testUser.create({ data: testUser });
        db.$disconnect();
        return json({ success: true, id: value.id }, 201);
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === 'P2003') {
            // Foreign key error
          }

          console.log(e.meta);
          return json({ success: false, error: e.message }, 422);
        }

        throw e;
      }
    }
  }
};
