import React, { useState } from 'react';

export default function AddTodo({ onAdd }) {
  const [summary, setSummary] = useState('');

  const onSummaryChange = (e) => {
    setSummary(e.target.value);
  };
  return (
    <div>
      <input type="text" value={summary} onChange={onSummaryChange} />
      <button
        disabled={!summary}
        onClick={() => {
          onAdd(summary);
          setSummary('');
        }}
      >Add</button>
    </div>
  );
}
