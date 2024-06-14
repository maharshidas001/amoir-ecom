import React, { useEffect } from 'react';
import { GridLayout, Card, Pagination } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../components';
import { getAllProducts } from '../redux/slices/productSlice';
import toast from 'react-hot-toast';

const Home = () => {

  const dispatch = useDispatch();
  const { products, loading, error, productPage } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getAllProducts(productPage));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong...');
    }
  }, [error]);

  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <div className='w-full max-w-[1200px]'>
          <GridLayout>
            {(!loading && products.length !== 0) && products.map(prod => (
              <Card
                key={prod.id}
                id={prod.id}
                title={prod.title}
                price={prod.price}
                img={prod.image}
              />
            ))}
          </GridLayout>
          {loading && <Loading />}
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default Home;