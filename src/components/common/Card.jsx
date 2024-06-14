import React from 'react';

const Card = ({
  title = '',
  price = 0,
  img
}) => {
  return (
    <>
      <div className='min-w-[230px] p-3 rounded-md shadow hover:shadow-2xl transition'>
        <div className='rounded bg-green-400 w-full h-[140px]'></div>
        <h3 className='mt-2'>{!title ? 'Title' : title}</h3>
        <div className='flex items-center justify-between'>
          <p className='text-lg font-medium'>{price}</p>
          <button className='px-2 py-1 rounded bg-black text-white'>Cart</button>
        </div>
      </div>
    </>
  )
}

export default Card;