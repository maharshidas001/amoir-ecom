import React, { useState } from 'react';
import { Input, Button } from '../components';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../utils/appwrite/appwriteAuth';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/slices/authSlice';

const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    authService.signUp({ email, password, name })
      .then(res => {
        if (res) {
          toast.success('Account created successfully!');
          navigate('/');
          dispatch(signUp(res));
        };
      })
      .catch(err => toast.error(err.message));
  }

  return (
    <>
      <div
        style={{ height: 'calc(100vh - 80px)' }}
        className='flex items-center justify-center'
      >
        <div className='p-4 rounded border-[1.5px]'>
          <h2 className='text-xl font-medium text-center'>Welcome to AMOIR</h2>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button className='w-full' type='submit'>Signup</Button>
          </form>

          <Link to='/auth/login'>
            <p className='text-center underline'>Already have an account?</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Signup;