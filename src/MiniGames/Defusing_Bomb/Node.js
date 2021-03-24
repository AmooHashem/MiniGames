import React from 'react';

const fontSize = 14;
const radius = 20;

const Node = ({ node }) => {
  // sizes
  const sizes = {
    radius: radius,
    textSize: fontSize,
    textX: radius * 1.5,
    textY: radius / 2,
  };
  const sizesImg = {
    radius: 30,
    textSize: fontSize,
    textX: 30 * 1.5,
    textY: 30 / 2,
  };

  return (
    <>
      {
        node.img
          ? (
            <image
              href={node.img}
              x="0"
              y="0"
              height={sizesImg.radius * 2}
              width={sizesImg.radius * 2}
              style={{
                transform: `translate(-${sizesImg.radius}px, -${sizesImg.radius}px)`,
              }}
            />
          )
          : (
            <circle
              r={sizes.radius}
            />
          )
      }
      <g style={{ fontSize: sizes.textSize + 'px' }}>
        <text
          x={node.img ? sizesImg.radius + 7 : sizes.radius + 7}
          y={node.img ? (sizesImg.radius / 2) - sizesImg.textSize : sizes.radius / 2}
        >
          {node.name}
        </text>
      </g>
    </>
  );
};

export default Node;