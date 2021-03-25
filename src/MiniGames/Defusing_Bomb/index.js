import { makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Graph from 'react-graph-network';

import Link from './Link';
import Node from './Node';

const useStyles = makeStyles((theme) => ({
  div: {
    height: '100vh',
    width: '100vw',
  },
  iframe: {
    height: '100%',
    width: '100%',
    border: '0px',
  },
}));

const initialData = {
  nodes: [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
  ],
  links: [
    { "source": '1', "target": '2', color: 'blue' },
    { "source": '1', "target": '2', color: 'red' },

    { "source": '3', "target": '4', color: 'orange' },
    { "source": '5', "target": '4', color: 'orange' },
    { "source": '6', "target": '4', color: 'orange' },
    { "source": '7', "target": '4', color: 'orange' },
    { "source": '8', "target": '4', color: 'orange' },
  ]
};


function index() {
  const classes = useStyles();
  const [data, setData] = useState(initialData);


  useEffect(() => {
    setTimeout(
      () => {
        setData({
          ...data,
          nodes: [
            ...data.nodes,
            { id: '9' }
          ]
        })
        console.log(data)
      }
      , 2000)
  }, [])


  return (
    <div style={{ height: '100vh' }}>
      <Graph
        data={data}
        NodeComponent={Node}
        LineComponent={Link}
        nodeDistance={1000}
        enableDrag={true}
      />
    </div>
  );
}

export default index;


