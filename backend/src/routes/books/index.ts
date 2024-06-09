import { validateRequest } from '@middlewares/validation';
import express from 'express';
import {
  deleteBookSchema,
  getBookByIdSchema,
  getBooksSchema,
  postBookSchema,
  putBookSchema,
} from './schemas';
import multer from 'multer';
import { uploadImage } from '@utils/upload-image';
import { deleteBook, getBookById, getBooks, saveBook, updateBook } from '@models/Book';
import {
  DeleteBookSchema,
  GetBookById,
  GetBooksParams,
  PostBookSchema,
  PutBookSchema,
} from './types';

const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

const route = express.Router();

route.post(
  '/create',
  upload.single('imagemCapa'),
  validateRequest(postBookSchema),
  async (req, res) => {
    const values = req.body as PostBookSchema;

    const uniqueImageName = Date.now() + '-' + Math.round(Math.random() * 1e9);

    await uploadImage({
      imageTitle: uniqueImageName,
      imageBuffer: req.file?.buffer,
      contentType: req.file?.mimetype,
    });

    const response = await saveBook({
      ...values,
      imagemCapa: uniqueImageName,
    });

    return res.json(response);
  },
);

route.put(
  '/update/:id',
  upload.single('newImage'),
  validateRequest(putBookSchema),
  async (req, res) => {
    const values = req.body as PutBookSchema;

    await uploadImage({
      imageTitle: values.imagemCapa,
      imageBuffer: req.file?.buffer,
      contentType: req.file?.mimetype,
    });

    const response = await updateBook({
      ...values,
    });

    return res.json(response);
  },
);

route.delete('/delete/:id', validateRequest(deleteBookSchema), async (req, res) => {
  const values = req.params as unknown as DeleteBookSchema;

  const response = await deleteBook(values.id);

  return res.json(response);
});

route.get('/', validateRequest(getBooksSchema), async (req, res) => {
  const { size, page } = req.query as unknown as GetBooksParams;

  const response = await getBooks({
    page,
    size,
  });

  return res.json(response);
});

route.get('/:id', validateRequest(getBookByIdSchema), async (req, res) => {
  const { id } = req.params as unknown as GetBookById;

  const response = await getBookById(id);

  return res.json(response);
});

export default route;
