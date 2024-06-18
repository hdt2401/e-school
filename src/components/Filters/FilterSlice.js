// const initState = {
//   search: '',
//   completed: 'All',
//   priority: [],
// };

// const filterReducer = (state=initState, action) => {
//   switch (action.type) {
//     case 'filter/searchText':
//       return {
//         ...state,
//         search: action.payload,
//       }
//     case 'filter/completed':
//       return {
//         ...state,
//         completed: action.payload,
//       }
//     case 'filter/priority':
//       return {
//         ...state,
//         priority: action.payload,
//       }
//     default: return state;
//   }
// };

// export default filterReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: 'filters',
  initialState: {
    search: '',
    completed: 'All',
    priority: [],
  },
  reducers: {
    searchTextFilter: (state, action) => {
      // mutation || IMMER
      state.search = action.payload;
    }, // action creator => { type: 'filter/searchText', }
    completedFilter: (state, action) => {
      state.completed = action.payload;
    },
    priorityFilter: (state, action) => {
      state.priority = action.payload;
    },
  }
});
