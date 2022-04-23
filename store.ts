import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { toDoReducer } from './todo/todoReducer';

const middleware = applyMiddleware(thunk);

export const store = createStore(
  combineReducers({
    todo: toDoReducer,
  }),
  middleware
);
