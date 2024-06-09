import { z } from 'zod';

export const postBookSchema = z
  .object({
    autor: z.string({
      required_error: 'autor is required',
    }),
    titulo: z.string({
      required_error: 'titulo is required',
    }),
    descricao: z.string({
      required_error: 'descricao is required',
    }),
    dataPublicacao: z.string({ required_error: 'dataPublicacao is required' }).date(),
  })
  .required({
    dataPublicacao: true,
    descricao: true,
    titulo: true,
    autor: true,
  });

export const putBookSchema = z
  .object({
    id: z.number({
      required_error: 'id is required',
      coerce: true,
    }),
    autor: z.string({
      required_error: 'autor is required',
    }),
    titulo: z.string({
      required_error: 'titulo is required',
    }),
    descricao: z.string({
      required_error: 'descricao is required',
    }),
    dataPublicacao: z.string({ required_error: 'dataPublicacao is required' }).date(),
    imagemCapa: z.string({ required_error: 'imagemCapa is required' }),
  })
  .required({
    id: true,
    dataPublicacao: true,
    descricao: true,
    titulo: true,
    autor: true,
  });

export const deleteBookSchema = z
  .object({
    id: z.number({
      required_error: 'id is required',
      coerce: true,
    }),
  })
  .required({
    id: true,
  });

export const getBooksSchema = z
  .object({
    size: z.number({
      required_error: 'size is required',
      coerce: true,
    }),
    page: z.number({
      required_error: 'page is required',
      coerce: true,
    }),
  })
  .required({
    page: true,
    size: true,
  });

export const getBookByIdSchema = z
  .object({
    id: z.number({
      required_error: 'id is required',
      coerce: true,
    }),
  })
  .required({
    id: true,
  });
