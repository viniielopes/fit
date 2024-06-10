import { TextProps } from './types'

export const Text = ({ children }: TextProps) => {
  return <p className="line-clamp-[9] text-sm">{children}</p>
}
