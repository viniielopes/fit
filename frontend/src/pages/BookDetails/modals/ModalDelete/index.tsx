import { Button } from 'components/Button'
import { Modal } from 'components/Modal'
import { useModalDelete } from './hook'

export const ModalDelete = () => {
  const { open, title, isLoadingSubmit, onClose, onClickDelete } =
    useModalDelete()

  return (
    <Modal open={open} title={title} onClose={onClose}>
      <div className="flex w-[36.5rem] flex-col gap-3">
        <p className="text-sm font-normal">
          Ao excluir este livro não será possível recuperá-lo. Realmente deseja
          excluí-lo?
        </p>

        <div className="flex justify-center gap-5">
          <Button size="small" shape="rounded" color="gray" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            size="small"
            shape="rounded"
            color="red200"
            isLoading={isLoadingSubmit}
            onClick={onClickDelete}
          >
            Excluir
          </Button>
        </div>
      </div>
    </Modal>
  )
}
