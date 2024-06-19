// const initState = [];

// const todoReducer = (state=initState, action) => {
//   switch (action.type) {
//     case 'todoList/addTodo': 
//       return [  
//         ...state,
//         action.payload
//       ]
//     case 'todoList/changeStatusTodo': 
//       return state.map(item => item.id === action.payload ? {...item, completed: !item.completed} : item)
//     default: return state;
//   }
// };
// export default todoReducer;
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    changeStatusTodo: (state, action) => {
      const item = state.find(item => item.id === action.payload)
      if (item) {
        item.completed = !item.completed;
      }
    },
  }
});