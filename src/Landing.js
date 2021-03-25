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

import ComplexSystem2 from './MiniGames/Collective_Behavior_Of_Fish';

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
          <a href='/Conways_Game_Of_Life'>
            {'بازی زندگی کانوی'}
          </a>
        </li>
        <li>
          <a href='/Collective_Behavior_Of_Fish'>
            {'رفتار جمعی ماهی‌ها'}
          </a>
        </li>
        <li>
          <a href='/Ant_Colony_Optimization'>
            {'بهینه‌سازی مورچه‌ها'}
          </a>
        </li>
        <li>
          <a href='/Tarkibiat'>
            {'گراف ترکیبیات'}
          </a>
        </li>
      </ol>
    </>
  );
}

export default Homepage;
