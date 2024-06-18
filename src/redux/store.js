// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
// const composeEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhancers);

import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../components/TodoList/todoSlice';
import filterSlice from '../components/Filters/filterSlice';

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoSlice.reducer,
  }
});

export default store;