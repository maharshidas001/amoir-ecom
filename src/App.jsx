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
      <div
        style={{
          minHeight: 'calc(100vh - 96px)'
        }}
      >
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;