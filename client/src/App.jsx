import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import NavBar from './layouts/NavBar'
import Home from './pages/Home'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
      </Route>
    )
  )

  return (

    <RouterProvider router={router} />
  )
}

export default App