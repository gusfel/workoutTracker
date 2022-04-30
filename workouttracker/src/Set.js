import React, { useState } from 'react';
import axios from 'axios';

function Set({ setId }) {
  const [values, setValues] = useState({
    setId,
    weight: null,
    reps_attempted: null,
    reps_completed: null,
  });

  const handleChange = (event) => {
    const column = event.target.name;
    const value = Number(event.target.value);
    axios.patch('http://localhost:3010/set', {
      setId,
      column,
      value,
    })
      .then((res) => {
        if (res.data === 'success') {
          setValues((oldValues) => ({
            ...oldValues,
            [column]: value,
          }));
        }
      });
  };
  return (
    <div>
      <input
        className="entryData"
        type="number"
        placeholder="Weight"
        name="weight"
        value={values.weight || ''}
        onChange={handleChange}
      />
      <input
        className="entryData"
        type="number"
        placeholder="Reps Attempted"
        name="reps_attempted"
        value={values.reps_attempted || ''}
        onChange={handleChange}
      />
      <input
        className="entryData"
        type="number"
        placeholder="Reps Completed"
        name="reps_completed"
        value={values.reps_completed || ''}
        onChange={handleChange}
      />
    </div>
  );
}

export default Set;
