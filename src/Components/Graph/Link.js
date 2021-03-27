import React, { useEffect, useState } from 'react';



const Line = ({ link, ...restProps }) => {
  const [_, rerender] = useState();
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);


  useEffect(() => {
    link.setRerender(forceUpdate);
  }, [])

  return (
    <>
      <line
        onClick={() => { link.changeSelection(); rerender(Math.random()); }}
        {...restProps}
        stroke={link.getColor() ? link.getColor() : 'black'}
        strokeWidth={link.getIsSelected() ? 8 : 3}
      />
    </>
  )
};

export default Line;