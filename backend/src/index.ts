import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { AppDataSource } from './config/mysql';
import LoginRoutes from './routes/login';
import UserRoutes from './routes/user';
import ClientRoutes from './routes/client';
import EntryRoutes from './routes/entry';
import PendencyRoutes from './routes/pendency';
import ParcelaRoutes from './routes/parcela';
import FechamentoRoutes from './routes/fechamento';
import RelatoriosRoutes from './routes/relatorios';
import NoteRoutes from './routes/notes'
import 'reflect-metadata';
import { passport } from './middlewares/Auth';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use('/api/login', LoginRoutes);
app.use('/api/user', UserRoutes);
app.use('/api/client', ClientRoutes);
app.use('/api/entry', EntryRoutes);
app.use('/api/pendency', PendencyRoutes);
app.use('/api/parcela', ParcelaRoutes);
app.use('/api/fechamento', FechamentoRoutes);
app.use('/api/relatorio', RelatoriosRoutes);
app.use('/api/notes', NoteRoutes);

app.get('/createdb', (req, res) => {
  AppDataSource.initialize()
    .then(() => {
      res.send('criou o banco');
    })
    .catch((error) => console.log(error));
});

app.get('/', (req, res) => {
  return res.send('deu bom');
});

app.listen(process.env.PORT, () => {
  console.log(`iniciou na ${process.env.PORT}`);
});
