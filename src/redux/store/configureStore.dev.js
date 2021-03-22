import reduxWebsocket from '@giantmachines/redux-websocket';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import DevTools from '../../Router/DevTools';
import api from '../middleware/api/api';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    { Intl: { locale: 'fa' }, ...preloadedState },
    compose(
      applyMiddleware(
        thunk,
        api,
        reduxWebsocket({ reconnectOnClose: true }),
        createLogger()
      ),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
