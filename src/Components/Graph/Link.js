import React, { useEffect, useState } from 'react';


const Line = ({ link, ...restProps }) => {
  const [_, rerender] = useState();

  useEffect(() => {
    link.setRerender(() => rerender(Math.random()));
  }, [])

  return (
    <>
      <line
        onClick={link.changeSelection}
        {...restProps}
        stroke={link.color ? link.color : 'black'}
        strokeWidth={link.getIsSelected() ? 10 : 4}
      />
    </>
  )
};

export default Line;