import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../redux/slices/productSlice';
import { useSelector, useDispatch } from 'react-redux';

const SingleProduct = () => {

  const { prodID } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(prodID));
  }, [dispatch]);

  const { products, loading, error } = useSelector(state => state.product);
  console.log(products);

  return (
    <>
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md flex">
        <div className="w-1/2">
          <img
            src={products[0]?.image}
            alt={products[0]?.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-1/2 pl-6">
          <h1 className="text-3xl font-bold mb-4">{products[0]?.title}</h1>
          <p className="text-2xl text-red-600 mb-4 font-medium">${products[0]?.price}</p>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <p className="text-gray-700 my-4">{products[0]?.description}</p>
        </div>
      </div>
    </>
  )
}

export default SingleProduct;