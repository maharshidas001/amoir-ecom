import React from 'react';
import { GridLayout, Card } from '../components';

const Home = () => {
  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <div className='w-full max-w-[1200px]'>
          <GridLayout>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </GridLayout>
        </div>
      </div>
    </>
  )
}

export default Home;