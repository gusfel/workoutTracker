import React, { useState } from 'react';
import axios from 'axios';

function Distance({ setId, exerciseName }) {
  const [values, setValues] = useState({
    setId,
    distance: null,
    time: null,
    elevation: null,
  });

  const handleChange = (event) => {
    const column = event.target.name;
    const value = Number(event.target.value);
    axios.patch('http://localhost:3010/distance', {
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
      <h2>{exerciseName}</h2>
      <input
        className="entryData"
        type="number"
        placeholder="Distance"
        name="distance"
        value={values.distance || ''}
        onChange={handleChange}
      />
      <input
        className="entryData"
        type="number"
        placeholder="Time in Minutes"
        name="time"
        value={values.time || ''}
        onChange={handleChange}
      />
      <input
        className="entryData"
        type="number"
        placeholder="Elevation in Feet"
        name="elevation"
        value={values.elevation || ''}
        onChange={handleChange}
      />
    </div>
  );
}

export default Distance;
