// import { combineReducers } from "redux";
// import filterReducer from "../components/Filters/FilterSlice";
// import todoReducer from "../components/TodoList/TodoSlice";

// const rootReducer =combineReducers({
//   filters: filterReducer,
//   todoList: todoReducer,
// })

// export default rootReducer;
// const initState = {
//   filters: {
//     search: '',
//     status: 'All',
//     priority: [],
//   },
//   todoList: [],
// };

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoReducer(state.todoList, action),
//   }
//   // switch (action.type) {
//   //   case 'todoList/addTodo': 
//   //     return {
//   //       ...state,
//   //       todoList: [
//   //         ...state.todoList,
//   //         action.payload
//   //       ]
//   //     }
//   //   case 'filter/searchText':
//   //     return {
//   //       ...state,
//   //       filters: {
//   //         ...state.filters,
//   //         search: action.payload,
//   //       },
//   //     }
//   //   default: return state;
//   // }
// };
