import { queryClient } from 'providers/react-query'
import { OptimisticUpdateProps } from './types'

export const optimisticPostUpdate = <T extends { id: number }>({
  key,
  data,
}: OptimisticUpdateProps<T>) => {
  const queryCache = queryClient.getQueryCache()

  const activeQuery = queryCache.find({
    queryKey: [key],
    exact: false,
    type: 'active',
  })

  if (!activeQuery?.queryKey) return

  const previousData = queryClient.getQueryData<T[]>(activeQuery.queryKey)

  if (!previousData) return

  const newData = [data, ...previousData]

  queryClient.setQueryData<T[]>(activeQuery.queryKey, newData)
}

export const optimisticPutUpate = <T extends { id: number }>({
  key,
  data,
}: OptimisticUpdateProps<T>) => {
  const queryCache = queryClient.getQueryCache()

  const activeQuery = queryCache.find({
    queryKey: [key],
    exact: false,
    type: 'active',
  })

  if (!activeQuery?.queryKey) return

  queryClient.setQueryData<T>(activeQuery.queryKey, data)
}
