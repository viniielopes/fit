import { ComponentProps, forwardRef } from 'react'
import { TextAreaProps } from './types'

const TextArea = forwardRef<
  HTMLTextAreaElement,
  ComponentProps<'textarea'> & TextAreaProps
>(({ value, ...rest }, ref) => {
  return (
    <div className="relative flex flex-1 border-none">
      <textarea
        {...rest}
        ref={ref}
        className={`w-full resize-none rounded-sm p-1 text-sm font-normal outline-0 placeholder:text-sm placeholder:text-input-placeholder active:border-none`}
        value={value}
      />
    </div>
  )
})

TextArea.displayName = 'TextArea'

export { TextArea }
