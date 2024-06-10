import { ColorProp, ShapeProp, SizeProp } from './types'

export const baseClasses =
  'flex items-center justify-center font-semibold leading-7 '

export const colorClasses: Record<ColorProp, string> = {
  red100: 'bg-red-100 text-white',
  red200: 'bg-red-200 text-white',
  gray: 'bg-gray-100',
  primary: 'bg-primary text-white',
  ghost: 'bg-transparent',
}

export const shapeClasses: Record<ShapeProp, string> = {
  rounded: 'py-[1.25rem] px-[5.5rem] rounded-lg',
  square: '',
}

export const sizeClasses: Record<SizeProp, string> = {
  small: 'text-sm font-medium leading-[1.25rem]',
  medium: 'text-md font-semibold leading-[1.8rem]',
}
