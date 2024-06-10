import { Request, Response } from 'express';
import { uploadImage } from '@utils/upload-image';
import { PutBookSchema } from './types';
import { updateBookModel } from '@models/Book';
import { getImageURL } from '@utils/get-image-url';

export const putBook = async (req: Request, res: Response) => {
  const { file, ...values } = req.body as PutBookSchema;

  if (file) {
    await uploadImage({
      imageTitle: values.imagemCapa,
      imageBuffer: req.file?.buffer,
      contentType: req.file?.mimetype,
    });
  }

  await updateBookModel({
    ...values,
  });

  const url = await getImageURL({
    imageTitle: values.imagemCapa,
  });

  const imageURL = url + `?killcache=${Math.floor(Math.random() * 100)}`;

  return res.json({ ...values, imageURL });
};
