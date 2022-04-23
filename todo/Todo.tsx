import React, { useCallback, useEffect, useState } from 'react';
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
  const todos = useSelector(
    useCallback(
      ({ todo }) => todoSelector(todo, showCompleted),
      [showCompleted]
    )
  );

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
    <div className="w-1/2 mx-auto mt-10 border p-4 shadow-md bg-white rounded">
      <h3 className="text-lg text-center">My Todos</h3>
      <AddTodo onAdd={_addTodo} />

      <div>
        <label className="text-sm flex justify-end items-center">
          <span className="mr-1">Show Completed</span>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
          />
        </label>
      </div>

      {todos.map((todo) => {
        return (
          <div className="flex items-start text-sm py-1 space-x-1" key={todo.id}>
            <Checkbox
              checked={todo.completed}
              onChange={(checked) => onCheckboxValueChanges(todo.id, checked)}
            />
            <div className={todo.completed ? 'line-through text-gray-500' : ''}>{todo.summary}</div>
          </div>
        );
      })}
    </div>
  );
}
