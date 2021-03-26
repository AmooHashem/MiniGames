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

import MyGraph from '../../Components/Graph';
import { toPersianNumber } from '../../utils/translateNumber'
import { myGraph } from './script';

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

  const doTakeTest = () => {
    setMode(1);
  }

  const roadToHospital = () => {
    setMode(2);
  }

  const doSendToHospital = () => {

  }

  const getReadyForAnotherTest = () => {
    setMode(0);
  }

  const resetGame = () => {
    setMode(0);
  }


  return (
    <Container className={classes.container}>
      <MyGraph myGraph={myGraph} />

      <div className={classes.budget}>
        <Paper className={classes.paper}>
          <Typography variant='h4'>
            {`بودجه‌ی باقی‌مانده: ${toPersianNumber(34)}`}
          </Typography>
        </Paper>
      </div>
      <div className={classes.resetGame}>
        <Grid container direction='column' spacing={1}>
          <Grid item>
            <ButtonGroup
              orientation="vertical"
              color="secondary"
              variant='contained'
              size='small'
              fullWidth
            >
              <Button onClick={resetGame}>شروع دوباره‌ی بازی</Button>
              <Button onClick={roadToHospital}>به سوی بیمارستان...</Button>
              <Button >انتخاب همه</Button>
              <Button >حذف انتخاب همه</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </div>

      <div className={classes.bottomButtons}>
        <Grid container direction='column' spacing={1}>
          <Grid item>
            <ButtonGroup
              color="secondary"
              variant='contained'
              size='small'
            >
              <Button onClick={() => { myGraph.getNode(1).setColor('red') }}>افزودن راس</Button>
              <Button onClick={roadToHospital}></Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </div>
      <Grid container justify='center' spacing={2}>
        <Grid item>
        </Grid>
        {mode === 0 &&
          <Grid container item spacing={2} justify='center' alignItems='center'>

          </Grid>
        }
        {mode === 1 &&
          <Grid container item spacing={2} justify='center' alignItems='center'>
            <Grid item xs={12} sm={6} container justify='center' alignItems='center'>
              <Button variant='contained' color='secondary' fullWidth onClick={getReadyForAnotherTest}>
                انجام تست مجدد
							</Button>
            </Grid>
          </Grid>
        }
        {mode === 2 &&
          <Grid container item spacing={2} justify='center' alignItems='center'>
            <Grid item xs={12} container justify='center' alignItems='center'>
              <Button variant='contained' color='secondary' fullWidth onClick={doSendToHospital}>
                افرادی رو که فکر می‌کنی بیمار هستند، انتخاب کن و به بیمارستان معرفیشون کن!
							</Button>
            </Grid>
          </Grid>
        }
        {mode === 3 &&
          <Grid container item spacing={2} justify='center' alignItems='center'>
            <Grid item xs={12} container justify='center' alignItems='center'>
              <Paper className={classes.paper}>
                <Typography variant='h4'>
                  {`امتیاز شما: ${toPersianNumber(score)}`}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        }
      </Grid>
    </Container>
  );
}


export default CoronaTest;