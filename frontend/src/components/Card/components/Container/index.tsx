import { ContainerProps } from './types'

export const Container = ({ children }: ContainerProps) => {
  return (
    <section className="flex flex-col cursor-pointer overflow-auto rounded-md">
      {children}
    </section>
  )
}
