import { createSelector } from "reselect";
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.completed;
export const prioritySelector = (state) => state.filters.priority;

export const todoListByFilter = createSelector(
  todoListSelector,
  searchTextSelector,
  statusSelector,
  prioritySelector,
  (todoList, searchText, completed, priority) => {
    if (completed === "All") {
      return todoList
        .filter((todo) => todo.name.includes(searchText))
        .filter((todo) =>
          priority.length > 0 ? priority.includes(todo.priority) : todo
        );
    } else {
      return todoList
        .filter((todo) =>
          todo.name.includes(searchText) && completed === "Completed"
            ? todo.completed
            : !todo.completed
        )
        .filter((todo) =>
          priority.length > 0 ? priority.includes(todo.priority) : todo
        );
    }
  }
);
