import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTodo from './AddTodo';
import Checkbox from './Checkbox';
import { addTodo, fetchTodos, markToDo } from './todoReducer';

function todoSelector(todos, showCompleted) {
  if (showCompleted) {
    return todos;
  } else {
    return todos.filter((todo) => !todo.completed);
  }
}

export default function Todo() {
  const dispatch = useDispatch();
  const [showCompleted, setShowCompleted] = useState(false);
  const todos = useSelector(({ todo }) => todoSelector(todo, showCompleted));

  console.log(todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const _addTodo = (summary) => {
    dispatch(addTodo(summary));
  };

  const onCheckboxValueChanges = (id, checked) => {
    dispatch(markToDo(id, checked));
  };

  return (
    <div>
      <h3>My Todos</h3>
      <AddTodo onAdd={_addTodo} />
      <hr />
      <div>
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
          />
          Show Completed
        </label>
      </div>
      <hr />
      {todos.map((todo) => {
        return (
          <div style={{ display: 'flex' }} key={todo.id}>
            <Checkbox
              checked={todo.completed}
              onChange={(checked) => onCheckboxValueChanges(todo.id, checked)}
            />
            <div>{todo.summary}</div>
          </div>
        );
      })}
    </div>
  );
}
