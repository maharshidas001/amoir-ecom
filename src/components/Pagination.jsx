import React from 'react';
import { setPage } from '../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = () => {

  const dispatch = useDispatch();
  let { productPage } = useSelector(state => state.product);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <>
      <div className='flex items-center gap-2 my-2'>
        <button
          className='px-5 py-2 rounded bg-black text-white text-[0.9rem]'
          onClick={() => handlePageChange(productPage += 1)} disabled={productPage === 1}>Prev</button>
        <p className='text-[0.9rem] text-[grey]'>1 of 8</p>
        <button
          className='px-5 py-2 rounded bg-black text-white text-[0.9rem]'
          onClick={() => handlePageChange(productPage -= 1)}>Next</button>
      </div>
    </>
  )
}

export default Pagination;