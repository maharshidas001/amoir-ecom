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
      <div>
        <button
          className='px-2 py-1 rounded bg-black text-white text-[0.9rem]'
          onClick={() => handlePageChange(productPage += 1)} disabled={productPage === 1}>Prev</button>
        <button
          className='px-2 py-1 rounded bg-black text-white text-[0.9rem]'
          onClick={() => handlePageChange(productPage -= 1)}>Next</button>
      </div>
    </>
  )
}

export default Pagination;