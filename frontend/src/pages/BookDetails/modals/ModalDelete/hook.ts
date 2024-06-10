import { UseModalFields } from 'stores/useModal'
import { useModal } from 'stores/useModal'
import { useDeleteBook } from 'services/books/mutations/useDeleteBook'
import { BooksSchema } from 'pages/Home/modals/ModalRegister/form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const useModalDelete = () => {
  const navigate = useNavigate()

  const { name, data, closeModal } = useModal((state) => ({
    name: state.name,
    data: state.data,
    closeModal: state.closeModal,
  })) as UseModalFields<BooksSchema>

  const { mutateAsync: mutateDeleteBook, isPending: isLoadingDeleteBook } =
    useDeleteBook()

  const open = name === 'ModalDelete'

  const title = 'Tem certeza?'

  const isLoadingSubmit = isLoadingDeleteBook


  const onClose = () => {
    closeModal()
  }

  const onClickDelete = () => {
    toast.promise(
      mutateDeleteBook(
        {
          id: data?.id || 0,
        },
        {
          onSuccess: () => {
            navigate('/')
            onClose()
          },
        }
      ),
      {
        error: 'Erro ao excluir',
        pending: 'Excluindo...',
        success: 'Excluido com sucesso!',
      }
    )
  }

  return {
    open,
    title,
    isLoadingSubmit,
    onClose,
    mutateDeleteBook,
    onClickDelete
  }
}
