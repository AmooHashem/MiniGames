import { makeStyles } from '@material-ui/core';
import React from 'react';

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
      <iframe className={classes.iframe}
        title='Complexity Explorables _ Thrilling Milling Schelling Herings'
        src='http://www.netlogoweb.org/web?http://www.netlogoweb.org/assets/modelslib/Sample%20Models/Biology/Ants.nlogo' />
    </div>
  );
}

export default index;


