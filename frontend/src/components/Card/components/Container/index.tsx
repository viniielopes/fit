import { ContainerProps } from './types'

export const Container = ({ children, onClick }: ContainerProps) => {
  return (
    <section
      role="button"
      data-testid="clickable-container"
      className="flex cursor-pointer flex-col overflow-auto rounded-md"
      onClick={onClick}
    >
      {children}
    </section>
  )
}
