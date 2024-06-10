import { yupResolver } from '@hookform/resolvers/yup'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { UseModalFields } from 'stores/useModal'
import { useModal } from 'stores/useModal'
import { BooksSchema, booksRegisterSchema } from './form'
import { usePostBooks } from 'services/books/mutations/usePostBooks'
import { formatDate } from 'utils/date'
import { usePutBooks } from 'services/books/mutations/usePutBooks'

export const useModalRegister = () => {
  const inputFileRef = useRef<HTMLInputElement>(null)

  const { name, data, closeModal } = useModal((state) => ({
    name: state.name,
    data: state.data,
    closeModal: state.closeModal,
  })) as UseModalFields<BooksSchema>

  const { control, register, watch, setValue, handleSubmit } = useForm({
    resolver: yupResolver(booksRegisterSchema),
    values: {
      id: data?.id,
      filePreview: data?.filePreview || '',
      autor: data?.autor || '',
      dataPublicacao: data?.dataPublicacao || new Date(),
      titulo: data?.titulo || '',
      descricao: data?.descricao || '',
      imagemCapa: data?.imagemCapa,
      file: undefined,
    },
  })

  const { mutateAsync: mutatePostBooks, isPending: isLoadingPostBooks } =
    usePostBooks()

  const { mutateAsync: mutatePutBooks, isPending: isLoadingPutBooks } =
    usePutBooks()

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

  const onSubmitSave = (values: BooksSchema) => {
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

  const onSubmitEdit = (values: BooksSchema) => {
    toast.promise(
      mutatePutBooks(
        {
          ...values,
          id: values.id || 0,
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
        pending: 'Editando livro...',
        error: 'Não foi possivel salvar',
        success: 'Salvo com sucesso!',
      }
    )
  }

  const onError = () => {
    toast.error('Todos os campos devem ser preenchidos!')
  }

  const open = name === 'ModalRegister' || name === 'ModalEdit'

  const title = name === 'ModalRegister' ? 'Novo livro' : 'Editar livro'

  const handleSubmitValues =
    name === 'ModalRegister'
      ? handleSubmit(onSubmitSave, onError)
      : handleSubmit(onSubmitEdit, onError)

  const isLoadingSubmit = isLoadingPostBooks || isLoadingPutBooks

  return {
    open,
    title,
    isLoadingSubmit,
    filePreview,
    inputFileRef,
    control,
    register,
    onClose,
    onChangeFileSelect,
    onClickUploadButton,
    handleSubmit: handleSubmitValues,
  }
}
