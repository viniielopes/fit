import { z } from 'zod';
import { deleteBookSchema, postBookSchema, putBookSchema } from './schemas';

export type PostBookSchema = z.infer<typeof postBookSchema>;

export type PutBookSchema = z.infer<typeof putBookSchema>;

export type DeleteBookSchema = z.infer<typeof deleteBookSchema>;

export type GetBooksParams = {
  size: number;
  page: number;
};

export type GetBookById = { id: number };
