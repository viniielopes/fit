import { z } from 'zod';
import { deleteBookSchema } from './schema';

export type DeleteBookSchema = z.infer<typeof deleteBookSchema>;
