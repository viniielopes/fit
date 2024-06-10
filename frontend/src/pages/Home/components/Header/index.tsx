import { Button } from 'components/Button'
import styles from './styles.module.css'
import { TextField } from 'components/TextField'
import { useSearchParams } from 'react-router-dom'
import { useDebounceValue } from 'usehooks-ts'
import { ChangeEventHandler, useEffect } from 'react'
import { UseModalFields } from 'stores/useModal'
import { useModal } from 'stores/useModal'

export const Header = () => {
  const { setModal } = useModal((state) => ({
    setModal: state.setModal,
  })) as UseModalFields<null>

  const [debouncedValue, setValue] = useDebounceValue('', 500)

  const [, setSearchParams] = useSearchParams()

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const onClickOpenModalRegister = () => {
    setModal({
      name: 'ModalRegister',
      data: null,
    })
  }

  useEffect(() => {
    setSearchParams((state) => {
      if (debouncedValue) {
        state.set('search', debouncedValue)
        return state
      }

      state.delete('search')

      return state
    })
  }, [debouncedValue, setSearchParams])

  return (
    <section className={styles.container}>
      <div className="flex justify-between gap-1">
        <h1 className="text-xl font-bold text-black">Livros</h1>
        <Button onClick={onClickOpenModalRegister}>Novo</Button>
      </div>

      <div className="flex">
        <TextField
          placeholder="Buscar"
          onChange={onChange}
          isSearchField
        ></TextField>
      </div>
    </section>
  )
}
