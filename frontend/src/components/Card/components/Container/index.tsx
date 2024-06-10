import { ContainerProps } from './types'

export const Container = ({ children }: ContainerProps) => {
  return (
    <section className="cursor-pointer overflow-auto rounded-md">
      {children}
    </section>
  )
}
