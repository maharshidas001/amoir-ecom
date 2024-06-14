import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import toast from 'react-hot-toast';

const Card = ({
  title = '',
  price = 0,
  img,
  id
}) => {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, img, quantity: 1 }));
    toast.success('Added to cart!');
  }

  return (
    <>
      <div className='min-w-[230px] p-3 rounded-md shadow hover:shadow-xl transition'>
        <div className='rounded w-full h-[140px] flex justify-center'>
          <img src={img} alt={title}
            className='max-h-full'
          />
        </div>
        <h3 className='mt-2 text-[0.9rem] text-ellipsis whitespace-nowrap overflow-hidden'>{!title ? 'Title' : title}</h3>
        <div className='flex items-center justify-between'>
          <p className='text-lg font-medium'>${price}</p>
          <button
            className='px-2 py-1 rounded bg-black text-white text-[0.9rem]'
            onClick={handleAddToCart}
          >Cart</button>
        </div>
      </div>
    </>
  )
}

export default Card;