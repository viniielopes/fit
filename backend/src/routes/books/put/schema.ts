import { z } from 'zod';

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
