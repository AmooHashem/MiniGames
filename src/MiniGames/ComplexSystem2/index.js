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


const useStyles = makeStyles((theme) => ({
  body: {
    height: '100vh !important',
    width: '100vw',
  },
  iframe: {
    width: '700px !important',
    height: '100vh',
  }
}));

function index() {
  const classes = useState();
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <iframe style={{ height: '100%', width: '100%' }} title='Complexity Explorables _ Thrilling Milling Schelling Herings' src={`${process.env.PUBLIC_URL}/MiniGames/ComplexSystem2/Complexity Explorables _ Thrilling Milling Schelling Herings.html`} />
    </div>
  );
}

export default index;


