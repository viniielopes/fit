import { ContainerProps } from './types'

export const Container = ({ children, onClick }: ContainerProps) => {
  return (
    <section
      className="flex cursor-pointer flex-col overflow-auto rounded-md"
      onClick={onClick}
    >
      {children}
    </section>
  )
}
