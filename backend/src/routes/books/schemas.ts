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
