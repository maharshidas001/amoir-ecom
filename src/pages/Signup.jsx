import React from 'react';
import { Input, Button } from '../components';

const Signup = () => {
  return (
    <>
      <div
        style={{ height: 'calc(100vh - 80px)' }}
        className='flex items-center justify-center'
      >
        <div className='p-4 rounded border-[1.5px]'>
          <h2 className='text-xl font-medium text-center'>Signup</h2>
          <form>
            <Input placeholder='Email' required />
            <Input placeholder='Password' type='password' required />
            <Button className='w-full' type='submit'>Signup</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup;