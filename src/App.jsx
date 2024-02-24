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
import AppLayout from './ui/AppLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'
import Booking from './pages/Booking'
import Checkin from './pages/Checkin'
import ProtectedRoute from './ui/ProtectedRoute'



const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0
    }
  }
})

const router = createBrowserRouter([
    {element:
    <ProtectedRoute>
      <AppLayout />
    </ProtectedRoute>
    ,children:[
      {path:'/',element:<Navigate to='/dashboard' replace/>},
      {path:'/dashboard',element:<Dashboard/>},
      {path:'/bookings',element:<Bookings/>},
      {path:'/bookings/:bookingId',element:<Booking/>},
      {path:'/checkin/:bookingId',element:<Checkin/>},
      {path:'/cabins',element:<Cabins/>},
      {path:'/users',element:<Users/>},
      {path:'/settings',element:<Settings/>},
      {path:'/account',element:<Account/>},
    ]},
  {path:'/login',element:<Login/>},
  {path:'/*',element:<PageNotFound/>},
])

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
          <RouterProvider router={router} />
        <Toaster
          position='top-center'
          gutter={12}
          containerStyle={{margin:12}}
          toastOptions={{
            success:{
              duration:3000
            },
            error:{
              duration:5000
            },
            style:{
              fontSize:'16px',
              maxWidth:'500px',
              padding:'16px 24px',
              backgroundColor:'var(--color-grey-0)',
              color:'var(--color-grey-700)'
            }
          }}
        />
      </QueryClientProvider>
    </>
  )
}

