const initState = {
  search: '',
  completed: 'All',
  priority: [],
};

const filterReducer = (state=initState, action) => {
  switch (action.type) {
    case 'filter/searchText':
      return {
        ...state,
        search: action.payload,
      }
    case 'filter/completed':
      return {
        ...state,
        completed: action.payload,
      }
    case 'filter/priority':
      return {
        ...state,
        priority: action.payload,
      }
    default: return state;
  }
};

export default filterReducer;