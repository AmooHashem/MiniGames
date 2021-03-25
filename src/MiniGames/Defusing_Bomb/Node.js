import React from 'react';

const Node = ({ node }) => {

  const size = 20;
  if (!node.isSelected) {
    node.size = 30;
  }

  return (
    <>
      <circle
        fill={node.color ? node.color : 'white'}
        strokeWidth={size / 10}
        stroke={node.color ? node.color : 'black'}
        r={size}
      />
      <g >
        <text
          fontSize={size}
          fontWeight='bold'
          x={size / 4}
          y={size / 3}
        >
          {node.id ? node.id : '۸'}
        </text>
      </g>
    </>
  );
};

export default Node;