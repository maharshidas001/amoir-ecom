import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {

  const cartItem = useSelector(state => state.cart);
  console.log(cartItem);

  return (
    <>
      <section className='w-full flex items-center justify-center'>
        <div className='w-full max-w-[1200px] p-3'>
          <h2 className='font-bold text-3xl'>Items</h2>
          <p></p>
        </div>
      </section>
    </>
  )
}

export default Cart;