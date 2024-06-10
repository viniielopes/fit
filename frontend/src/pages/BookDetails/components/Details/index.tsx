import { formatDate } from 'utils/date'
import styles from './styles.module.css'
import { DetailsProps } from './types'

export const Details = ({ dataBook }: DetailsProps) => {
  if (!dataBook) {
    return (
      <section className={styles.container}>
        <h2 className="text-center text-lg font-semibold">
          Não foi encontrado nenhum livro.
        </h2>
      </section>
    )
  }

  return (
    <section className={styles.container}>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">{dataBook.titulo}</h2>

        <div className="flex justify-between">
          <h3 className="text-base font-medium">{dataBook.autor}</h3>
          <h3 className="text-base font-medium">
            Publicado em {formatDate(dataBook.dataPublicacao)}
          </h3>
        </div>

        <p className="text-sm font-normal">{dataBook.descricao}</p>
      </div>

      <img
        key={dataBook.imageURL}
        src={
          dataBook.imageURL
        }
        className="h-[28rem] w-72 object-contain"
      />
    </section>
  )
}
