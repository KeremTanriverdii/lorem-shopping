import { createRoot } from 'react-dom/client'
import React, { StrictMode, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage.jsx'))
const CategoryPage = React.lazy(() => import('./pages/CategoryPage.jsx'))
const SubCategoryPage = React.lazy(() => import('./pages/SubCategoryPage.jsx'))
const ProductPage = React.lazy(() => import('./pages/ProductPage.jsx'))
const Login = React.lazy(() => import('./components/Login.jsx'))
const Register = React.lazy(() => import('./components/Register.jsx'))
const Basket = React.lazy(() => import('./pages/Basket.jsx'))
const OrderHistory = React.lazy(() => import('./pages/OrderHistory.jsx'))
const Payment = React.lazy(() => import('./pages/Payment.jsx'))
const OrderSuccessfull = React.lazy(() => import('./pages/OrderSuccessfull.jsx'))

import { Provider } from 'react-redux'
import store from './store/store.js'

// Dynamic Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/basket',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Basket />
          </Suspense>
        )
      },
      {
        path: '/order-history',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <OrderHistory />
          </Suspense>
        )
      },
      {
        path: '/order-successful',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <OrderSuccessfull />
          </Suspense>
        )
      },
      {
        path: '/basket/payment',
        element:
          <Payment />
      },
      {
        path: '/category/:categoryId/all',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CategoryPage />
          </Suspense>
        )
      },
      {
        path: '/product/:productSlug',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductPage />
          </Suspense>
        )
      },
      {
        path: '/category/:categoryId/:subCategory',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SubCategoryPage />
          </Suspense>
        )
      },
      {
        path: '/login',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        )
      },
      {
        path: '/register',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Register />
          </Suspense>
        )
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFoundPage />
          </Suspense>
        )
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
