import { z } from 'zod';

export const CreateTaskObject = z.object({
  name: z.string(),
  description: z.string().optional(),
  steps: z.number().array(),
});

export type CreateTaskObjectType = z.infer<typeof CreateTaskObject>;
