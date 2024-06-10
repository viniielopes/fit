import { useMutation } from '@tanstack/react-query'
import { api } from 'config/axios'
import { UsePostBooksPayload } from './types'
import { BooksItems } from 'services/books/queries/useGetBooks/types'
import { optimisticPostUpdate } from 'utils/optimistic-update'

export const usePostBooks = () => {
  return useMutation({
    mutationFn: async (payload: UsePostBooksPayload) => {
      const response = await api.postForm<BooksItems>('/books/create/', payload)

      return response.data
    },
    onSuccess: (data)=>{
      optimisticPostUpdate({
        data,
        key: 'books'
      })

    }
  })
}
