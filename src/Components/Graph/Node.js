import React, { useEffect, useState } from 'react';


const Node = ({ node }) => {
  const [_, rerender] = useState();
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    node.setRerender(forceUpdate);
  }, [])

  let size = 12;
  if (node.getIsSelected()) {
    size = 15;
  }

  return (
    <>
      <circle
        onClick={() => { node.changeSelection(); rerender(Math.random()); }}
        fill={node.getColor() ? node.getColor() : 'white'}
        strokeWidth={2}
        stroke={'black'}
        r={size}
      />
      <g>
        <text
          onClick={() => { node.changeSelection; rerender(Math.random()); }}
          fontSize={size}
          fontWeight={node.getIsSelected() ? 'bold' : ''}
          x={size / 3}
          y={size / 3}
        >
          {node.id}
        </text>
      </g>
    </>
  );
};

export default Node;