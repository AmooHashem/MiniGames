import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import WorkshopLanding from '../Landing';
import ComplexSystem1 from '../MiniGames/ComplexSystem1';
import ComplexSystem2 from '../MiniGames/ComplexSystem2';
import ComplexSystem3 from '../MiniGames/ComplexSystem3';
import DevTools from './DevTools';

const MyRoute = () => {
  return (
    <>
      <Switch>
        <Route exact path="/complex-system-1" component={ComplexSystem1} />
        <Route exact path="/complex-system-2" component={ComplexSystem2} />
        <Route exact path="/complex-system-3" component={ComplexSystem3} />
        <Route exact path="/" component={WorkshopLanding} />
        <Route
          path="*"
          render={() => <Redirect to={{ pathname: '/' }} />}
        />
      </Switch>
      <DevTools />
    </>
  );
};
export default MyRoute;
