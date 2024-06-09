import { Request, Response } from 'express';
import { GetBookById, GetBooksParams } from './types';
import { getBookByIdModel, getBooksModel } from '@models/Book';

export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params as unknown as GetBookById;

  const response = await getBookByIdModel(id);

  return res.json(response);
};

export const getBook = async (req: Request, res: Response) => {
  const { size, page } = req.query as unknown as GetBooksParams;

  const response = await getBooksModel({
    page,
    size,
  });

  return res.json(response);
};
