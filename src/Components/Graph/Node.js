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
    size = 18;
  }

  return (
    <>
      <circle
        id={id}
        onClick={() => { node.changeSelection(); console.log("@@@@@@@@@@") }}
        fill={node.getColor() ? node.getColor() : 'white'}
        strokeWidth={node.getIsSelected() ? 4 : 2}
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