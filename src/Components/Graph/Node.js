import React, { useEffect, useState } from 'react';

const Node = ({ node }) => {
  const [_, rerender] = useState();
  const [id, __] = useState(Math.random());

  useEffect(() => {
    node.setRerender(() => rerender(Math.random()));
    var elem = document.getElementById(id);
    elem.onclick();
    console.log(elem)
  }, [])

  let size = 12;
  if (node.getIsSelected()) {
    size = 15;
  }

  return (
    <g style={{ opacity: '1' }}>
      <circle
        id={id}
        onClick={node.changeSelection}
        fill={node.getColor() ? node.getColor() : 'white'}
        strokeWidth={2}
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
    </g>
  );
};

export default Node;