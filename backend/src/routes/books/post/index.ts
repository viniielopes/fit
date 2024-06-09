import { uploadImage } from '@utils/upload-image';
import { Request, Response } from 'express';
import { PostBookSchema } from './types';
import { saveBookModel } from '@models/Book';

export const postBook = async (req: Request, res: Response) => {
  const values = req.body as PostBookSchema;

  const uniqueImageName = Date.now() + '-' + Math.round(Math.random() * 1e9);

  await uploadImage({
    imageTitle: uniqueImageName,
    imageBuffer: req.file?.buffer,
    contentType: req.file?.mimetype,
  });

  const response = await saveBookModel({
    ...values,
    imagemCapa: uniqueImageName,
  });

  return res.json(response);
};
