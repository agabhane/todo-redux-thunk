import React, { useState } from 'react';

export default function AddTodo({ onAdd }) {
  const [summary, setSummary] = useState('');

  const onSummaryChange = (e) => {
    setSummary(e.target.value);
  };
  return (
    <div className="flex py-2">
      <input
        type="text"
        value={summary}
        onChange={onSummaryChange}
        className="flex-1 border rounded mr-2 focus:ring"
      />
      <button
        className="bg-indigo-500 px-2 py-1 rounded hover:bg-indigo-600 cursor-pointer text-white"
        disabled={!summary}
        onClick={() => {
          onAdd(summary);
          setSummary('');
        }}
      >
        Add
      </button>
    </div>
  );
}
