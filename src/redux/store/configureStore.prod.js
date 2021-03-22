import reduxWebsocket from '@giantmachines/redux-websocket';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import api from '../middleware/api/api';
import rootReducer from '../reducers';

const configureStore = (preloadedState) =>
  createStore(
    rootReducer,
    { Intl: { locale: 'fa' }, ...preloadedState },
    applyMiddleware(
      thunk,
      api,
      reduxWebsocket({ reconnectOnClose: true })
    )
  );
export default configureStore;
