import { DataSource } from 'typeorm';
import { Book } from '../../entities/Book';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 6543,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: [Book],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log('CONECTOU NO BANCO');
  })
  .catch((error) => console.error(error));

export { AppDataSource };
