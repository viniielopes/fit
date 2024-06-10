import { useMutation } from '@tanstack/react-query'
import { api } from 'config/axios'
import { BooksItems } from 'services/books/queries/useGetBooks/types'
import { UseDeleteBookPayload } from './types'

export const useDeleteBook = () => {
  return useMutation({
    mutationFn: async ({ id }: UseDeleteBookPayload) => {
      const response = await api.delete<BooksItems>(`/books/delete/${id}`)

      return response.data
    },
  })
}
