import { z } from 'zod';

const constraints = {
  maxSize: 1024 * 1024 * 2, // 1MB
  type: ['image/png', 'image/jpg', 'image/jpeg'],
};

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

    file: z
      .custom<Express.Multer.File>()
      .refine((val: Express.Multer.File) => val?.size > 0, 'file is required')
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
    dataPublicacao: true,
    descricao: true,
    titulo: true,
    autor: true,
    file: true,
  });
