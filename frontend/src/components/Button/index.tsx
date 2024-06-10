import { classNames } from 'utils'
import { ButtonProps } from './types'
import {
  colorClasses,
  shapeClasses,
  sizeClasses,
  baseClasses,
} from './variants'

export const Button = ({
  active = true,
  children,
  color = 'ghost',
  shape = 'square',
  size = 'medium',
  onClick,
  ...props
}: ButtonProps & React.ComponentProps<'button'>) => {

  return (
    <button
      className={classNames(
        baseClasses,
        colorClasses[color],
        shapeClasses[shape],
        sizeClasses[size]
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
