import { z } from 'zod';
import { putBookSchema } from './schema';

export type PutBookSchema = z.infer<typeof putBookSchema>;
