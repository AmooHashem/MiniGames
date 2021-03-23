import {
  Button,
  Container,
  Fab,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

import Frame from '../../Components/Frame';

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
    <div className={classes.div}>
      <iframe className={classes.iframe} title='Complexity Explorables _ Thrilling Milling Schelling Herings' src={`${process.env.PUBLIC_URL}/MiniGames/ComplexSystem2/Complexity Explorables _ Thrilling Milling Schelling Herings.html`} />
    </div>
  );
}

export default index;


