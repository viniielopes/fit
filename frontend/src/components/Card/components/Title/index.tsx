import { TitleProps } from './types'

export const Title = ({ children }: TitleProps) => {
  return <h2 className="text-base font-semibold">{children}</h2>
}
