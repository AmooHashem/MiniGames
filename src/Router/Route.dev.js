import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import DevTools from './DevTools';
import WorkshopLanding from '../Landing';
import ComplexSystem2 from '../MiniGames/ComplexSystem2';

const MyRoute = () => {
  return (
    <>
      <Switch>
        <Route exact path="/complex-system-2" component={ComplexSystem2} />
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
