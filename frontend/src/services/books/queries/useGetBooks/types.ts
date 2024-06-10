export type GetBooksParams = {
  page: number
  size: number
  query?: string | null
}

export type BooksItems = {
  id: number
  titulo: string
  autor: string
  descricao: string
  dataPublicacao: string
  imagemCapa: string
  imageURL: string
  deletedAt: string | null
}
