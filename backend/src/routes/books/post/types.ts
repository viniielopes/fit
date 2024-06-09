import { z } from 'zod';
import { postBookSchema } from '../schemas';

export type PostBookSchema = z.infer<typeof postBookSchema>;
