import { z } from 'zod';
import { postBookSchema } from './schema';

export type PostBookSchema = z.infer<typeof postBookSchema>;
