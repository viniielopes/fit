import { ModalRegister } from 'pages/Home/modals/ModalRegister'
import styles from './styles.module.css'
import { Header } from './components/Header'
import { Details } from './components/Details'
import { useGetBookById } from 'services/books/queries/useGetBookById'
import { useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

const BookDetails = () => {
  const { id } = useParams()

  const { data: dataBook, isFetching: isFetchingBook } = useGetBookById({
    id: Number(id) || 0,
  })

  if (isFetchingBook) {
    return (
      <div className="flex flex-col gap-3 p-5">
        <Skeleton width="100%" height="5rem" baseColor="white"></Skeleton>
        <Skeleton width="100%" height="30rem" baseColor="white"></Skeleton>
      </div>
    )
  }

  return (
    <main className={styles.container}>
      <Header dataBook={dataBook}/>
      <Details dataBook={dataBook}/>
      <ModalRegister />
    </main>
  )
}

export default BookDetails
