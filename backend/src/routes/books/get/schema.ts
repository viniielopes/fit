import { z } from "zod";

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
