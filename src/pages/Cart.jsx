import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Cart = () => {

  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector(state => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.success('Removed from cart!');
  };

  return (
    <>
      <section className='w-full flex items-center justify-center'>
        <div className='w-full max-w-[1200px] p-3'>
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          <ul>
            {cartItems.length === 0 ? (
              <li className="text-gray-500">
                Your cart is empty. <br /><br />
                Return to <Link to='/'>
                  <button className='text-white bg-black rounded px-4 py-2'>Home</button>
                </Link>
              </li>
            ) : (
              cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center mb-2">
                  <div className='rounded h-[100px] flex justify-center'>
                    <img src={item.img} alt={item.title}
                      className='max-h-full'
                    />
                  </div>
                  <span className='w-[300px] text-ellipsis whitespace-nowrap overflow-hidden'>{item.title}</span>
                  <span className="text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
                  <span className="text-gray-700">Qty: {item.quantity}</span>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
          {cartItems.length > 0 && (
            <div className="mt-4 text-right">
              <span className="font-bold">
                Total: $
                {totalPrice.toFixed(2)}
              </span>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Cart;