import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import itemsReducer from './store/items/reducer';
import categoriesReducer from './store/categories/reducer';
import userReducer from './store/user/reducer';
import orderReducer from './store/order/reducer';
import checkingOrders from './containers/CheckingOrder/reducer';
import closingOrders from './containers/ClosingOrder/reducer';
import thunk from 'redux-thunk'

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  itemsReducer,
  categoriesReducer,
  userReducer,
  orderReducer,
  checkingOrders,
  closingOrders
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();