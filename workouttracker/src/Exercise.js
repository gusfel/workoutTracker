import React, { useState } from 'react';
import axios from 'axios';
import Set from './Set';

function Exercise({ exerciseName, id }) {
  const [sets, setSets] = useState([]);

  const addSet = () => {
    axios.post('http://localhost:3010/set', { exerciseId: id })
      .then((res) => {
        setSets([...sets, <Set key={res.data} setId={res.data} />]);
      });
  };
  return (
    <div>
      <h2>{exerciseName}</h2>
      <button type="submit" onClick={() => addSet()}>Add Set</button>
      {sets.length ? sets : null}
    </div>
  );
}

export default Exercise;
