import { yupResolver } from '@hookform/resolvers/yup'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { UseModalFields } from 'stores/useModal'
import { useModal } from 'stores/useModal'
import { BooksSchema, booksRegisterSchema } from './form'
import { usePostBooks } from 'services/books/mutations/usePostBooks'
import { formatDate } from 'utils/date'

export const useModalRegister = () => {
  const inputFileRef = useRef<HTMLInputElement>(null)

  const { name, data, closeModal } = useModal((state) => ({
    name: state.name,
    data: state.data,
    closeModal: state.closeModal,
  })) as UseModalFields<BooksSchema>

  const { control, register, watch, setValue, handleSubmit } = useForm({
    resolver: yupResolver(booksRegisterSchema),
    shouldUnregister: true,
  })

  const { mutateAsync: mutatePostBooks, isPending: isLoadingPostBooks } =
    usePostBooks()

  const filePreview = watch('filePreview')

  const onClose = () => {
    setValue('filePreview', '')

    closeModal()
  }
  const onClickUploadButton = () => {
    inputFileRef?.current?.click()
  }

  const onChangeFileSelect: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (!event.target.files?.[0]) {
      toast.error('Nenhum arquivo selecionado')

      return
    }

    const file = event.target.files[0]

    const localURL = URL.createObjectURL(file)

    const form = new FormData()
    form.append('file', file)

    setValue('filePreview', localURL)
    setValue('file', file)
    event.target.value = ''
  }

  const onSubmit = (values: BooksSchema) => {
    toast.promise(
      mutatePostBooks(
        {
          ...values,
          dataPublicacao: formatDate(values.dataPublicacao, 'yyyy-MM-dd'),
          file: values.file as FormData,
        },
        {
          onSuccess: () => {
            onClose()
          },
        }
      ),
      {
        pending: 'Salvando livro...',
        error: 'Não foi possivel salvar',
        success: 'Salvo com sucesso!',
      }
    )
  }

  const onError = () => {
    toast.error('Todos os campos devem ser preenchidos!')
  }

  const open = name === 'ModalRegister' || name === 'ModalEdit'

  return {
    open,
    handleSubmit: handleSubmit(onSubmit, onError),
    onClose,
    filePreview,
    control,
    register,
    isLoadingPostBooks,
    onChangeFileSelect,
    onClickUploadButton,
    inputFileRef,
  }
}
