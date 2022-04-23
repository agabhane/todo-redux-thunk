import React from 'react';

export default function Checkbox({ checked, onChange }) {
  const onChangeCheckbox = (e) => {
    onChange(e.target.checked);
  };
  return (
    <input type="checkbox" checked={checked} onChange={onChangeCheckbox} />
  );
}
