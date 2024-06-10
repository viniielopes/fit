import { ReactNode } from 'react'

type WidthType = 'normal' | 'full'
export type ColorProp = 'ghost' | 'red100' | 'primary' | 'red200' | 'gray'
export type ShapeProp = 'square' | 'rounded'
export type SizeProp = 'small' | 'medium'

export type ButtonWidthSize = {
  [key in WidthType]: string
}

export type ButtonProps = {
  children: ReactNode
  color?: ColorProp
  shape?: ShapeProp
  size?: SizeProp
  onClick(): void
  width?: WidthType
}
