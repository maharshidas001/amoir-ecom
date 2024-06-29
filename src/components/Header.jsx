import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import authSerivce from '../utils/appwrite/appwriteAuth';
import { login, logout } from '../redux/slices/authSlice';
import toast from 'react-hot-toast';
import Logo from '../assets/Amoir Logo.svg';

const Header = () => {

  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);
  const { user, status } = useSelector(state => state.auth);

  const handleLogout = () => {
    authSerivce.logout()
      .catch(err => toast.error(err.message))
      .finally(() => {
        toast.success('Logged out succesfuly');
        dispatch(logout());
      });
  };

  return (
    <>
      <header className='w-full flex items-center justify-center px-3'>
        <nav className='w-full max-w-[1200px] flex items-center justify-between py-3'>
          <Link to='/'>
            <img
              src={Logo} alt="Amoir Logo"
              className='h-5'
            />
          </Link>

          <div className='flex items-center gap-2'>
            {/* Checking if the user is loggedin or not */}
            {user && status == true ? (
              <button className='hover:underline' onClick={handleLogout}>Logout</button>
            ) : (
              <Link to='/auth/login'>
                <button className='hover:underline'>Login</button>
              </Link>
            )}

            <Link to='/cart'>
              <button className='w-20 bg-black text-white py-1 rounded text-[0.9rem]'>Cart ({cartItems.length})</button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;