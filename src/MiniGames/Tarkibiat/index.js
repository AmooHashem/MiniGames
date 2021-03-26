import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import MyGraph from '../../Components/Graph';
import { toPersianNumber } from '../../utils/translateNumber'
import { myGraph1 } from './script';

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: 'hidden',
    minHeight: '100vh',
    paddingBottom: theme.spacing(2),
  },
  budget: {
    position: 'fixed',
    top: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 10,
  },
  resetGame: {
    position: 'fixed',
    top: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 10,
  },
  bottomButtons: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 10,
  },
  paper: {
    padding: theme.spacing(2),
  }
}))

function CoronaTest() {
  const classes = useStyles();
  const [_, rerender] = useState();
  const [mode, setMode] = useState(0);
  const [score, setScore] = useState(0);

  const validateMatching = () => {
    if (myGraph1.getSelectedLinks().length == 0) {
      toast.info('حداقل یه یال انتخاب کن!');
    } else {
      if (myGraph1.isMatchingValid()) {
        if (myGraph1.findAugmentingPath().length > 0) {
          toast.error('مسیر افزایشی پیدا کردیم!');
          myGraph1.colorAugmentingPath();
        } else {
          toast.success('ایول! تطابقت بزرگ‌ترین بود!');
        }
      } else {
        toast.error('این یال‌هایی که انتخاب کردی، تشکیل تطابق نمیدن!');
      }
    }
  }

  return (
    <Grid className={classes.container}>
      <MyGraph myGraph={myGraph1} />

      <div className={classes.bottomButtons}>
        <Grid container direction='column' spacing={1}>
          <Grid item>
            <ButtonGroup
              color="secondary"
              variant='contained'
              size='small'
            >
              <Button onClick={validateMatching}>{'بررسی تطابق'}</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}


export default CoronaTest;