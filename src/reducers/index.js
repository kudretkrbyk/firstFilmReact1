// src/reducers/index.js
import { combineReducers } from 'redux';
import moviesReducer from './MovieReducer';
import seriesReducer from './SeriesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  series: seriesReducer,
});

export default rootReducer;
