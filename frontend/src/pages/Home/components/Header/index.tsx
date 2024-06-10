import { Button } from 'components/Button'
import styles from './styles.module.css'
import { TextField } from 'components/TextField'
import { useSearchParams } from 'react-router-dom'
import { useDebounceValue } from 'usehooks-ts'
import { useEffect } from 'react'

export const Header = () => {
  const [debouncedValue, setValue] = useDebounceValue('', 500)

  const [, setSearchParams] = useSearchParams()

  const onChange = (value: string) => {
    setValue(value)
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
        <Button onClick={() => {}}>Novo</Button>
      </div>

      <div className="flex">
        <TextField onChange={onChange}></TextField>
      </div>
    </section>
  )
}
