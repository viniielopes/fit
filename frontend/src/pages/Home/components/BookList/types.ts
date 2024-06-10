import { BooksItems } from 'services/books/queries/useGetBooks/types'

export type BookListProps = {
  data: BooksItems[]
  isLoading: boolean
}
