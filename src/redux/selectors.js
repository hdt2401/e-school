import { createSelector } from "reselect";
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;

export const todoListByFilter = createSelector(todoListSelector, searchTextSelector, (todoList, searchText) => {
  return todoList.filter(todo => todo.name.includes(searchText));
})
