import { Navigate } from 'react-router-dom'
import Home from '../views/Home'
import User from '../views/User'
import Order from '../views/Order'
import Cart from '../views/Cart'
import NotFound from '../views/NotFound'
import Test from '../views/Test'
import Address from '../views/Address'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/user',
    element: <User />,
    children: [
      {
        path: 'order',
        element: <Order />,
      },
      {
        path: 'address',
        element: <Address />,
      },
    ],
  },
  {
    path: '/a',
    element: <Navigate to="/" />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes