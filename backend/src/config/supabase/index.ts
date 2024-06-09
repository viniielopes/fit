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
    // here you can start to work with your database
    console.log('CONECTOU NO BANCO');
  })
  .catch((error) => console.log(error));

export { AppDataSource };
