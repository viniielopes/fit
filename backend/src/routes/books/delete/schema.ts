import { z } from 'zod';

export const deleteBookSchema = z
  .object({
    id: z.number({
      required_error: 'id is required',
      coerce: true,
    }),
  })
  .required({
    id: true,
  });
