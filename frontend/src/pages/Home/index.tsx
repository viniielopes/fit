import { useGetBooks } from 'services/books/queries/useGetBooks'
import { BookList } from './components/BookList'
import { Header } from './components/Header'
import styles from './styles.module.css'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [searchParams] = useSearchParams()

  const search = searchParams.get('search')

  const { data: dataBooks, isFetching: isFetchingBooks } = useGetBooks({
    page: 1,
    size: 25,
    query: search
  })

  return (
    <main className={styles.container}>
      <Header />
      <BookList data={dataBooks || []} isLoading={isFetchingBooks} />
    </main>
  )
}
export default Home
