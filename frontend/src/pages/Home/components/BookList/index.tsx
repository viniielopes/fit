import { Card } from 'components/Card'
import styles from './styles.module.css'
import { BookListProps } from './types'
import Skeleton from 'react-loading-skeleton'
import { useNavigate } from 'react-router-dom'
import { BooksItems } from 'services/books/queries/useGetBooks/types'

export const BookList = ({ data, isLoading }: BookListProps) => {
  const navigate = useNavigate()

  if (isLoading) {
    return (
      <section data-testid='loading' className={styles.container}>
        <Skeleton width="100%" height="15rem" baseColor="white"></Skeleton>
        <Skeleton width="100%" height="15rem" baseColor="white"></Skeleton>
        <Skeleton width="100%" height="15rem" baseColor="white"></Skeleton>
        <Skeleton width="100%" height="15rem" baseColor="white"></Skeleton>
        <Skeleton width="100%" height="15rem" baseColor="white"></Skeleton>
        <Skeleton width="100%" height="15rem" baseColor="white"></Skeleton>
      </section>
    )
  }

  if (!data || data?.length === 0) {
    return (
      <h2 className="text-center text-base font-semibold">
        Sem livros cadastrados, clique no botão &quot;Novo&quot; no canto
        superior direito e cadastre o primeiro livro!
      </h2>
    )
  }

  const onClickBook = (data: BooksItems) => {
    navigate(`/book/${data.id}`)
  }

  return (
    <section className={styles.container}>
      {data.map((item) => (
        <Card.Container key={item.id} onClick={() => onClickBook(item)}>
          <Card.Header imgSrc={item.imageURL}></Card.Header>

          <Card.Content>
            <Card.Title>{item.titulo}</Card.Title>

            <Card.Text>{item.descricao}</Card.Text>
          </Card.Content>
        </Card.Container>
      ))}
    </section>
  )
}
