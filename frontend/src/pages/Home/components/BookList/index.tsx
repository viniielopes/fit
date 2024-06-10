import { Card } from 'components/Card'
import styles from './styles.module.css'
import { BookListProps } from './types'
import Skeleton from 'react-loading-skeleton'

export const BookList = ({ data, isLoading }: BookListProps) => {
  if (isLoading) {
    return (
      <section className={styles.container}>
        <Skeleton width="100%" height="15rem" baseColor="white"></Skeleton>
        <Skeleton width="100%" height="15rem" baseColor="white"></Skeleton>
        <Skeleton width="100%" height="15rem" baseColor="white"></Skeleton>
        <Skeleton width="100%" height="15rem" baseColor="white"></Skeleton>
        <Skeleton width="100%" height="15rem" baseColor="white"></Skeleton>
        <Skeleton width="100%" height="15rem" baseColor="white"></Skeleton>
      </section>
    )
  }

  return (
    <section className={styles.container}>
      {data.map((item) => (
        <Card.Container key={item.id}>
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
