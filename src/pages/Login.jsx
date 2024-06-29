import React, { useState } from 'react';
import { Input, Button } from '../components';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { user, error } = await supabaseAuth.signIn(email, password);
    // if (!error) {
    //   // console.log(user);
    //   toast.success('Logged in successfully!');
    // }
    // if (error) {
    //   // console.log(error);
    //   toast.error(error.message);
    // }
  }

  return (
    <>
      <div
        style={{ height: 'calc(100vh - 80px)' }}
        className='flex items-center justify-center'
      >
        <div className='p-4 rounded border-[1.5px]'>
          <h2 className='text-xl font-medium text-center'>Login to your account</h2>
          <form onSubmit={handleSubmit}>
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
            <Button className='w-full' type='submit'>Login</Button>
          </form>

          <Link to='/auth/register'>
            <p className='text-center underline'>Don't have an account?</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login;