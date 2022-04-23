import produce from 'immer';

const FETCH_TODOS = 'FETCH_TODOS';
const ADD_TODO = 'ADD_TODO';
const MARK_COMPLETE = 'MARK_COMPLETE';

export const fetchTodos = () => {
  return async (dispatch, getState) => {
    const todosStr = localStorage.getItem('todos') || '[]';
    dispatch({
      type: FETCH_TODOS,
      payload: JSON.parse(todosStr),
    });
  };
};

export const addTodo = (summary: string) => {
  return async (dispatch, getState) => {
    const todosStr = localStorage.getItem('todos') || '[]';
    let todos = JSON.parse(todosStr);
    const newTodo = {
      id: Date.now().valueOf().toString(),
      summary,
    };
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    dispatch({
      type: ADD_TODO,
      payload: newTodo,
    });
  };
};

export const markToDo = (id, completed) => {
  return {
    type: MARK_COMPLETE,
    payload: {
      id,
      completed,
    },
  };
};

export const toDoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_TODOS:
      return payload;
    case ADD_TODO:
      return [...state, payload];
    case MARK_COMPLETE:
      const todos = produce(state, (draft) => {
        const index = draft.findIndex((todo) => todo.id === payload.id);
        draft[index].completed = payload.completed;
      });
      return todos;
    default:
      return state;
  }
};
