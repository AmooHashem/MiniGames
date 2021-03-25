import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Landing from '../Landing';
import Ant_Colony_Optimization from '../MiniGames/Ant_Colony_Optimization';
import Collective_Behavior_Of_Fish from '../MiniGames/Collective_Behavior_Of_Fish';
import Conways_Game_Of_Life from '../MiniGames/Conways_Game_Of_Life';
import Tarkibiat from '../MiniGames/Tarkibiat';
import DevTools from './DevTools';

const MyRoute = () => {
  return (
    <>
      <Switch>
        <Route exact path="/Conways_Game_Of_Life" component={Conways_Game_Of_Life} />
        <Route exact path="/Collective_Behavior_Of_Fish" component={Collective_Behavior_Of_Fish} />
        <Route exact path="/Ant_Colony_Optimization" component={Ant_Colony_Optimization} />
        <Route exact path="/Tarkibiat" component={Tarkibiat} />
        <Route exact path="/Defusing_Bomb" component={Tarkibiat} />
        <Route exact path="/" component={Landing} />
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
