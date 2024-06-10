import { Button } from 'components/Button'
import { FaChevronLeft } from 'react-icons/fa6'

import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import { UseModalFields } from 'stores/useModal'
import { useModal } from 'stores/useModal'
import { BooksSchema } from 'pages/Home/modals/ModalRegister/form'
import { HeaderProps } from './types'

export const Header = ({ dataBook }: HeaderProps) => {
  const { setModal } = useModal((state) => ({
    setModal: state.setModal,
  })) as UseModalFields<Partial<BooksSchema> | undefined>

  const navigate = useNavigate()

  const onClickEdit = () => {
    setModal({
      name: 'ModalEdit',
      data: {
        id: dataBook?.id,
        autor: dataBook?.autor,
        filePreview: dataBook?.imageURL,
        titulo: dataBook?.titulo,
        descricao: dataBook?.descricao,
        imagemCapa: dataBook?.imagemCapa,
        dataPublicacao: dataBook?.dataPublicacao
          ? new Date(dataBook.dataPublicacao)
          : undefined,
        file: null,
      },
    })
  }

  const onClickDelete = () => {
    setModal({
      name: 'ModalDelete',
      data: {
        id: dataBook?.id,
      },
    })
  }

  const onClickBack = () => {
    navigate('/')
  }

  const disabledActions = !dataBook

  return (
    <section className={styles.container}>
      <div className="flex justify-between gap-1">
        <Button onClick={onClickBack}>
          <FaChevronLeft size={28}></FaChevronLeft> Voltar
        </Button>

        <div className="flex gap-3">
          <Button onClick={onClickEdit} disabled={disabledActions}>
            Editar
          </Button>
          <Button
            onClick={onClickDelete}
            color="red"
            disabled={disabledActions}
          >
            Excluir
          </Button>
        </div>
      </div>
    </section>
  )
}
