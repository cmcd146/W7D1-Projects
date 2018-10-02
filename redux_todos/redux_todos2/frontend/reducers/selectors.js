

export const allTodos = function({todos}) {
  return Object.keys(todos).map(id => todos[id]);
};

window.allTodos = allTodos;
