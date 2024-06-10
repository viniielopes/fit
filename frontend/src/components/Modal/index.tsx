import * as Dialog from '@radix-ui/react-dialog'
import { ModalProps } from './types'

export const Modal = ({ open, children, title, onClose }: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-300 opacity-80" />
        <Dialog.Content className="fixed left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 outline-0">
          <article className="flex flex-col gap-3 rounded-md bg-gray-100 p-4">
            <h2 className="text-lg font-semibold text-center">{title}</h2>
            {children}
          </article>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
