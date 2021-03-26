import React, { useEffect, useState } from 'react';

const Node = ({ node }) => {
  const [_, rerender] = useState();

  useEffect(() => {
    node.setRerender(() => rerender(Math.random()));
  }, [])

  let size = 20;
  if (node.getIsSelected()) {
    size = 25;
  }

  return (
    <>
      <circle
        onClick={node.changeSelection}
        fill={node.color ? node.color : 'white'}
        strokeWidth={node.getIsSelected() ? size / 10 + 2 : size / 10}
        stroke={'black'}
        r={size}
      />
      <g>
        <text
          onClick={node.changeSelection}
          fontSize={size}
          fontWeight={node.getIsSelected() ? 'bold' : ''}
          x={size / 4}
          y={size / 3}
        >
          {node.id}
        </text>
      </g>
    </>
  );
};

export default Node;