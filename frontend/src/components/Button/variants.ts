import { ColorProp, ShapeProp, SizeProp } from './types'

export const baseClasses =
  'flex items-center gap-[12px] justify-center leading-7 outline-0 disabled:opacity-40'

export const colorClasses: Record<ColorProp, string> = {
  red: 'text-red-100 ',
  red100: 'bg-red-100 text-white',
  red200: 'bg-red-200 text-white',
  gray: 'bg-gray-300',
  primary: 'bg-primary text-white',
  ghost: 'bg-transparent',
}

export const shapeClasses: Record<ShapeProp, string> = {
  rounded: 'py-[1.25rem] px-[5rem] rounded-lg',
  square: 'bg-transparent',
}

export const sizeClasses: Record<SizeProp, string> = {
  small: 'text-sm font-medium leading-[1.25rem]',
  medium: 'text-md font-semibold leading-[1.8rem]',
}
