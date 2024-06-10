import { ChangeEventHandler, ComponentProps } from 'react'
import { MdSearch } from 'react-icons/md'
import { TextFieldProps } from './types'

export const TextField = ({
  onChange,
  value,
  ...rest
}: Omit<ComponentProps<'input'>, 'onChange'> & TextFieldProps) => {
  const onChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className="relative flex w-fit flex-1 border-none focus-visible:border-0">
      <input
        {...rest}
        className="w-full rounded-sm p-1 pr-6 text-sm font-normal outline-0 active:border-none"
        onChange={onChangeText}
        value={value}
        placeholder="Buscar"
        type="text"
      />
      <MdSearch size={24} className="absolute right-1 top-1"></MdSearch>
    </div>
  )
}
