export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  }
}
export const searchTextFilter = (data) => {
  return {
    type: 'filter/searchText',
    payload: data,
  }
}