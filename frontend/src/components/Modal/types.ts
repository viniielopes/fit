export type ModalProps = {
  children: React.ReactNode
  open: boolean
  title?: string
  onClose(): void
}
