import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import CarsIndex from './containers/cars_index';
import CarsShow from './containers/cars_show';
import CarsNew from './containers/cars_new';
import GarageIndex from './containers/garage_index';
import GarageShow from './containers/garage_show';
import GarageNew from './containers/garage_new';
import '../assets/stylesheets/application.scss';

import carsReducer from './reducers/cars_reducer';
import garagesReducer from './reducers/garages_reducer';

const reducers = combineReducers({
  garages: garagesReducer,
  cars: carsReducer,
});


const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <div className="view-container">
        <Switch>
          <Route path="/" exact component={GarageIndex} />
          <Route path="/garage/new" exact component={GarageNew} />
          <Route path="/garage/:id" component={GarageShow} />
          <Route path="/garage/:garageId/cars" exact component={CarsIndex} />
          <Route path="/garage/:garageId/cars/new" exact component={CarsNew} />
          <Route path="/garage/:garageId/cars/:id" component={CarsShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
