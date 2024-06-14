import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import Logo from '../assets/Amoir Logo.svg';

const Header = () => {
  return (
    <>
      <header className='bg-[yellow] w-full flex items-center justify-center px-3'>
        <nav className='w-full max-w-[1200px] flex items-center justify-between py-3'>
          <Link to='/'>
            <img
              src={Logo} alt="Amoir Logo"
              className='h-5'
            />
          </Link>

          <div className='inline-flex'>
            <Link to='/cart'><p>Cart</p></Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;