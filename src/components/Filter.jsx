import React from 'react';

const Filter = ({ setToggleFilter }) => {
  return (
    <>
      <div
        className='absolute h-screen w-full top-0 left-0 flex items-center justify-center'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      >
        <div className='w-[90%] h-[500px] bg-white rounded'>
          <button
            className='px-5 py-2 rounded-md bg-black text-white'
            onClick={() => setToggleFilter(false)}
          >Cancel</button>
        </div>
      </div>
    </>
  )
}

export default Filter;