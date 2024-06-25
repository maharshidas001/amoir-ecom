import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Cart, SingleProduct, Login } from './pages';
import { Header, Footer } from './components';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Header />
      <div style={{
        minHeight: 'calc(100vh - 96px)'
      }}>
        <Toaster toastOptions={{ duration: 1500 }} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:prodID' element={<SingleProduct />} />
          <Route path='/auth/login' element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;