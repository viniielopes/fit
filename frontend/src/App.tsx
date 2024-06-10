import { TanStackQueryProvider } from 'providers/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from 'routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <TanStackQueryProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </TanStackQueryProvider>
  )
}

export default App
