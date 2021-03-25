import React, { useState } from 'react';


const Line = ({ link, ...restProps }) => {
  const [_, rerender] = useState();
  console.log(link)

  return (
    <>
      <line
        onClick={() => { console.log("eweeeeeeeeeeeeeee"); link.changeSelection(); rerender(Math.random()) }}
        {...restProps}
        stroke={link.color ? link.color : 'black'}
        strokeWidth={link.isSelected ? 6 : 3}
      />
    </>
  )
};

export default Line;