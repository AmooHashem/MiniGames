import { IntlReducer as Intl } from 'react-redux-multilingual';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  Intl,
});
export default allReducers;
