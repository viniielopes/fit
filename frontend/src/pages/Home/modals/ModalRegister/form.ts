import * as yup from 'yup'

export const booksRegisterSchema = yup.object({
  id: yup.number(),
  titulo: yup.string().required(),
  autor: yup.string().required(),
  descricao: yup.string().required(),
  dataPublicacao: yup.date().required(),
  file: yup.mixed(),
  filePreview: yup.string().required(),
  imagemCapa: yup.string(),
})

export type BooksSchema = yup.InferType<typeof booksRegisterSchema>
