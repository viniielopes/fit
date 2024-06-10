import BookDetails from 'pages/BookDetails'
import Home from 'pages/Home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/book/:id',
    element: <BookDetails></BookDetails>,
  },
])
