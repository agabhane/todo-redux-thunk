import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTodo from './AddTodo';
import { addTodo, fetchTodos, markToDo } from './todoReducer';

function todoSelector(state) {
  return state.todo;
}

export default function Todo() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();

  console.log(todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const _addTodo = (summary) => {
    dispatch(addTodo(summary));
  };

  const onCheckboxValueChanges = (id, e) => {
    dispatch(markToDo(id, e.target.checked));
  };

  return (
    <div>
      <h3>My Todos</h3>
      <AddTodo onAdd={_addTodo} />
      {todos.map((todo) => {
        return (
          <div style={{ display: 'flex' }} key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => onCheckboxValueChanges(todo.id, e)}
            />
            <div>{todo.summary}</div>
          </div>
        );
      })}
    </div>
  );
}
