import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { history } from '../store';
import Home  from '../pages/home';
import Background from '../components/common/container'
function Routes() {
  return (
    <ConnectedRouter history={history}>
      <Background>
      <Route
          path='/'
          exact
          component={Home}
        />
        <Route
          path='/:id'
          exact
          component={Home}
        />
      </Background>
    </ConnectedRouter>
  );
}

export default Routes;
