import { classNames } from 'utils'
import { ButtonProps } from './types'
import {
  colorClasses,
  shapeClasses,
  sizeClasses,
  baseClasses,
} from './variants'
import { Spinner } from 'components/Spinner'

export const Button = ({
  children,
  color = 'ghost',
  shape = 'square',
  size = 'medium',
  isLoading = false,
  disabled,
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
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}
