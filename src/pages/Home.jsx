import React, { useEffect } from 'react';
import { GridLayout, Card } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../components';
import { getAllProducts } from '../redux/slices/productSlice';

const Home = () => {

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <div className='w-full max-w-[1200px]'>
          <GridLayout>
            {(!loading && products.length !== 0) && products.map(prod => (
              <Card key={prod.id} id={prod.id} title={prod.title} price={prod.price} />
            ))}
          </GridLayout>
          {loading && <Loading />}
        </div>
      </div>
    </>
  )
}

export default Home;