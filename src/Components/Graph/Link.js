import React from 'react';


const Line = ({ link, ...restProps }) => {

  return (
    <>
      <line
        {...restProps}
        stroke={link.color ? link.color : '#000000'}
        strokeWidth='3'
      />
    </>
  )
};

export default Line;