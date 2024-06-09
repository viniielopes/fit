import { Request, Response } from 'express';
import { deleteBookModel } from '@models/Book';
import { DeleteBookSchema } from './types';

export const deleteBook = async (req: Request, res: Response) => {
  const values = req.params as unknown as DeleteBookSchema;

  const response = await deleteBookModel(values.id);

  return res.json(response);
};
