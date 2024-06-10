import { useQuery } from '@tanstack/react-query'
import { TIME } from 'constants/time'
import { api } from 'config/axios'
import { BooksItems, GetBookByIdParams } from './types'

const PREFIX = 'book-by-id'

export const useGetBookById = ({ id }: GetBookByIdParams) => {
  return useQuery({
    queryKey: [PREFIX, id],
    queryFn: async () => {
      const response = await api.get<BooksItems>(`/books/${id}`)

      return response.data
    },
    staleTime: TIME.FIVE_MINUTES,
  })
}
