import React from 'react';

const Input = ({
  className,
  placeholder = 'Input...',
  type = 'text',
  ...props
}) => {
  return (
    <>
      <div>
        <input
          type={type}
          className={`rounded py-2 px-4 my-2 drop-shadow-md w-[300px] ${className}`}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </>
  )
}

export default Input;