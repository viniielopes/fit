import { AppDataSource } from '@config/supabase';
import { Book } from '@entities/Book';
import { GetBookParams, SaveBookParams } from './types';
import { PutBookSchema } from '@routes/books/types';

export const saveBook = async (book: SaveBookParams) => {
  const bookRepository = AppDataSource.getRepository(Book);

  try {
    const res = await bookRepository.save(book);

    return res;
  } catch (error) {
    throw new Error(`Erro ao salvar`);
  }
};

export const updateBook = async (book: PutBookSchema) => {
  const bookRepository = AppDataSource.getRepository(Book);

  try {
    const res = await bookRepository.update(
      {
        id: book.id,
      },
      {
        ...book,
      },
    );

    return res;
  } catch (error) {
    throw new Error(`Erro ao editar`);
  }
};

export const deleteBook = async (id: number) => {
  const bookRepository = AppDataSource.getRepository(Book);

  try {
    const res = await bookRepository.softDelete({ id: id });

    return res;
  } catch (error) {
    throw new Error(`Erro ao deletar`);
  }
};

export const getBooks = async ({ page, size }: GetBookParams) => {
  const bookRepository = AppDataSource.getRepository(Book);

  const skip = page !== 1 ? page - 1 * 10 : undefined;

  try {
    const res = await bookRepository.find({
      skip,
      take: size,
    });

    return res;
  } catch (error) {
    throw new Error(`Erro ao buscar`);
  }
};

export const getBookById = async (id: number) => {
  const bookRepository = AppDataSource.getRepository(Book);

  try {
    const res = await bookRepository.findOneBy({
      id,
    });

    return res;
  } catch (error) {
    throw new Error(`Erro ao buscar livro especifico`);
  }
};
