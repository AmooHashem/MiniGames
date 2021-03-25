import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import MyGraph from '../../Components/Graph';


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

function index() {
  const classes = useStyles();

  return (
    <MyGraph />
  );
}

export default index;


