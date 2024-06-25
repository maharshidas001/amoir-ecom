import React from 'react';

const Button = ({
  className = '',
  children = 'Button',
  ...props
}) => {
  return (
    <>
      <button
        className={`rounded py-2 px-4 bg-black my-2 text-[whitesmoke] ${className}`}
        {...props}
      >{children}</button>
    </>
  )
}

export default Button;