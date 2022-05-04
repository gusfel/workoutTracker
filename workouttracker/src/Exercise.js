import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

Exercise.propTypes = {
  id: PropTypes.number.isRequired,
  exerciseName: PropTypes.string.isRequired,
};

export default Exercise;
