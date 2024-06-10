import { useQuery } from '@tanstack/react-query'
import { api } from 'config/axios'
import { BooksItems, GetBooksParams } from './types'

const PREFIX = 'books'

export const useGetBooks = ({ page, size, query }: GetBooksParams) => {
  return useQuery({
    queryKey: [PREFIX, page, size, query],
    queryFn: async () => {
      const response = await api.get<BooksItems[]>('/books', {
        params: {
          page,
          size,
          query,
        },
      })

      return response.data
    },
  })
}
