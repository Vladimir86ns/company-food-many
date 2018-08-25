import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import itemsReducer from './store/items/reducer';
import categoriesReducer from './store/categories/reducer';
import userReducer from './store/user/reducer';
import orderReducer from './store/order/reducer';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const logger = store => {
  return next => {
    return action => {
      const result = next(action);
      return result;

    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  itemsReducer,
  categoriesReducer,
  userReducer,
  orderReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
