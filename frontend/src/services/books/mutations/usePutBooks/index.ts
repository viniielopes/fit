import { useMutation } from '@tanstack/react-query'
import { api } from 'config/axios'
import { UsePutBooksPayload } from './types'
import { BooksItems } from 'services/books/queries/useGetBooks/types'
import { optimisticPutUpate } from 'utils/optimistic-update'

export const usePutBooks = () => {
  return useMutation({
    mutationFn: async ({ id, ...rest }: UsePutBooksPayload) => {
      const response = await api.putForm<BooksItems>(
        `/books/update/${id}`,
        rest
      )

      return response.data
    },
    onSuccess: (data) => {
      optimisticPutUpate({
        data,
        key: 'book-by-id',
      })
    },
  })
}
