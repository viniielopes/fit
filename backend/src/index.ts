import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import books from './routes/books';
import cors from 'cors';
import * as middlewares from '@middlewares/error';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/books', books);


app.listen(process.env.PORT, () => {
  console.log(`iniciou na ${process.env.PORT}`);
});

app.use(middlewares.errorHandler);
