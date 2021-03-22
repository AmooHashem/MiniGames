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

import ComplexSystem2 from './MiniGames/ComplexSystem2';

const useStyles = makeStyles((theme) => ({
  body: {
    height: '100vh',
    width: '100vw',
  }
}));

function Homepage() {
  const classes = useStyles();
  return (
    <>
      <ol>
        <li>
          <a href='/complex-system-2'>
            {'بازی دوم سیستم‌های پیچیده'}
          </a>
        </li>
      </ol>
    </>
  );
}

export default Homepage;
