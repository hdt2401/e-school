import {createServer} from 'miragejs';

export const setupServer = () => {
  let server = createServer();
  server.get("/api/todos", {
    todos: []
  });
}