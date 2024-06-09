import { Request, Response } from 'express';
import { uploadImage } from '@utils/upload-image';
import { PutBookSchema } from './types';
import { updateBookModel } from '@models/Book';

export const putBook = async (req: Request, res: Response) => {
  const { file, ...values } = req.body as PutBookSchema;

  await uploadImage({
    imageTitle: values.imagemCapa,
    imageBuffer: req.file?.buffer,
    contentType: req.file?.mimetype,
  });

  const response = await updateBookModel({
    ...values,
  });

  return res.json(response);
};
