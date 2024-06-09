import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import { Home } from './pages';

// Components
import { Header, Footer } from './components';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;