import { RouterProvider } from 'react-router-dom'
import {createBrowserRouter} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Account from './pages/Account'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import { Navigate } from 'react-router-dom'
import {GlobalStyles} from './styles/GlobalStyles'

const router = createBrowserRouter([
  {path:'/',element:<Navigate to='/dashboard' replace/>},
  {path:'/dashboard',element:<Dashboard/>},
  {path:'/bookings',element:<Bookings/>},
  {path:'/cabins',element:<Cabins/>},
  {path:'/users',element:<Users/>},
  {path:'/settings',element:<Settings/>},
  {path:'/account',element:<Account/>},
  {path:'/login',element:<Login/>},
  {path:'/*',element:<PageNotFound/>},
])

export default function App() {
  return (
    <>
      <GlobalStyles />
        <RouterProvider router={router} />
    </>
  )
}

