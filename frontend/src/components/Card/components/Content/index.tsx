import { ContentProps } from './types'

export const Content = ({ children }: ContentProps) => {
  return (
    <article className="flex  flex-col gap-1 bg-white p-1">
      {children}
    </article>
  )
}
