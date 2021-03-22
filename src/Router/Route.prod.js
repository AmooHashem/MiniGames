import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import WorkshopLanding from '../Landing';

const MyRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={WorkshopLanding} />
      <Route
        path="*"
        render={() => <Redirect to={{ pathname: '/' }} />}
      />
    </Switch>
  );
};
export default MyRoute;
