import { render, screen } from '@testing-library/react'

import { BookList } from '..'
import { BrowserRouter } from 'react-router-dom'
import { BooksItems } from 'services/books/queries/useGetBooks/types'

describe('BookList component', () => {
  it('should render loading skeletons when isLoading is true', () => {
    render(
      <BrowserRouter>
        <BookList isLoading={true} data={[]} />
      </BrowserRouter>
    )

    const skeletons = screen.getByTestId('loading')
    expect(skeletons).toBeInTheDocument()
  })

  it('should render empty message when data is empty', () => {
    render(
      <BrowserRouter>
        <BookList isLoading={false} data={[]} />
      </BrowserRouter>
    )

    const message = screen.getByText(/Sem livros cadastrados/i)
    expect(message).toBeInTheDocument()
  })

  it('should render book cards for each item in data', () => {
    const mockData: BooksItems[] = [
      {
        id: 1,
        titulo: 'Book Title 1',
        descricao: 'Book description 1',
        imageURL: 'image.jpg',
        autor: 'Teste 1',
        deletedAt: null,
        imagemCapa: 'teste',
        dataPublicacao: '2012-08-13',
      },
      {
        id: 2,
        titulo: 'Book Title 2',
        descricao: 'Book description 2',
        imageURL: 'image2.jpg',
        autor: 'Teste 2',
        deletedAt: null,
        imagemCapa: 'teste',
        dataPublicacao: '2012-08-13',
      },
    ]

    render(
      <BrowserRouter>
        <BookList isLoading={false} data={mockData} />
      </BrowserRouter>
    )

    const bookCards = screen.getAllByRole('button') // Assuming Card.Container is rendered as a button
    expect(bookCards).toHaveLength(mockData.length)

    const firstBookTitle = screen.getByText(/Book Title 1/i)
    expect(firstBookTitle).toBeInTheDocument()
  })
})
