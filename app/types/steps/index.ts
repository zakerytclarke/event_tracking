import { z } from 'zod';

export const CreateStepObject = z.object({
  name: z.string(),
  description: z.string().min(1).optional(),
});

export type CreateStepObjectType = z.infer<typeof CreateStepObject>;
