import { z } from 'zod';

const constraints = {
  maxSize: 1024 * 1024 * 1, // 1MB
  type: ['image/png', 'image/jpg', 'image/jpeg'],
};

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
    file: z
      .custom<Express.Multer.File>()
      .refine((file) => {
        return !file || file.size <= constraints.maxSize;
      }, 'Maximum file size is 1Mb')
      .refine(
        (file) => {
          return !file || constraints.type.includes(file.mimetype);
        },
        `Only following image types allowed: ${constraints.type.join(', ')}`,
      ),
  })
  .required({
    id: true,
    dataPublicacao: true,
    descricao: true,
    titulo: true,
    autor: true,
  });
