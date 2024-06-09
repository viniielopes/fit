import { validateRequest } from '@middlewares/validation';
import express from 'express';
import multer from 'multer';
import { deleteBook } from './delete';
import { deleteBookSchema } from './delete/schema';
import { putBookSchema } from './put/schema';
import { getBookByIdSchema, getBooksSchema } from './get/schema';
import { putBook } from './put';
import { postBook } from './post';
import { getBook, getBookById } from './get';
import { postBookSchema } from './post/schema';

const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

const route = express.Router();

route.get('/', validateRequest(getBooksSchema), getBook);
route.get('/:id', validateRequest(getBookByIdSchema), getBookById);

route.post('/create', upload.single('file'), validateRequest(postBookSchema), postBook);

route.put('/update/:id', upload.single('file'), validateRequest(putBookSchema), putBook);

route.delete('/delete/:id', validateRequest(deleteBookSchema), deleteBook);

export default route;
