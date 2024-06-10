import { TanStackQueryProvider } from 'providers/react-query'
import {  RouterProvider } from 'react-router-dom'
import { router } from 'routes'


function App() {
  return (
    <TanStackQueryProvider>
      <RouterProvider router={router} />
    </TanStackQueryProvider>
  )
}

export default App
