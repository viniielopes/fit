import { ComponentProps, forwardRef } from 'react'
import { MdSearch } from 'react-icons/md'
import { TextFieldProps } from './types'

const TextField = forwardRef<
  HTMLInputElement,
  ComponentProps<'input'> & TextFieldProps
>(({ value, isSearchField = false, ...rest }, ref) => {
  return (
    <div className="relative flex flex-1 border-none focus-visible:border-0">
      <input
        {...rest}
        className={`w-full rounded-sm p-1 placeholder:text-sm placeholder:text-input-placeholder ${isSearchField && 'pr-6'} text-sm font-normal outline-0 active:border-none`}
        value={value}
        ref={ref}
        type="text"
      />

      {isSearchField && (
        <MdSearch
          size={32}
          className="absolute right-[15px] top-[10px]"
        ></MdSearch>
      )}
    </div>
  )
})

TextField.displayName = 'TextField'

export { TextField }
