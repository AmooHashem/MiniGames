import { makeStyles } from '@material-ui/core';
import React from 'react';
import Graph from 'react-graph-network';

import Node from './Node';
import Link from './Link';

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

const data = {
  nodes: [
    { id: "HkqEDLvxE" },
    { id: "011jVS4rb" },
    { id: "PXACjDxmR" },
    { id: "kuVISwh7w" },
    { id: "UIEjvLJMd" },
    { id: "ZVi8fWDBx" },
    { id: "H-06WvsfJ" },
    { id: "Fbc9iwnJl" },
  ],
  links: [
    { "source": "HkqEDLvxE", "target": "011jVS4rb" },
    { "source": "011jVS4rb", "target": "PXACjDxmR" },
    { "source": "PXACjDxmR", "target": "kuVISwh7w" },
    { "source": "PXACjDxmR", "target": "Fbc9iwnJl" },
    { "source": "PXACjDxmR", "target": "UIEjvLJMd" },
    { "source": "kuVISwh7w", "target": "UIEjvLJMd" },
    { "source": "UIEjvLJMd", "target": "ZVi8fWDBx" },
    { "source": "ZVi8fWDBx", "target": "H-06WvsfJ" },
    { "source": "H-06WvsfJ", "target": "Fbc9iwnJl" }
  ]
};


function index() {
  const classes = useStyles();
  return (
    <div style={{ height: '100vh' }}>
      <Graph
        draggable
        data={data}
        NodeComponent={Node}
        // LineComponent={Link}
        nodeDistance={1000}
        enableDrag={true}
      />
    </div>
  );
}

export default index;


