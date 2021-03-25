import React from 'react';

const Node = ({ node }) => {

  let size = 20;
  if (node.isSelected) {
    size = 23;
  }

  return (
    <>
      <circle
        fill={node.color ? node.color : 'white'}
        strokeWidth={node.isSelected ? size / 10 + 2 : size / 10}
        stroke={'black'}
        r={size}
      />
      <g>
        <text
          fontSize={size}
          fontWeight={node.isSelected ? 'bold' : ''}
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