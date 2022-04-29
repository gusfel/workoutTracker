import React, { useState } from "react";
import Set from './Set';
import axios from 'axios';

const Exercise = props => {
  const [sets, setSets] = useState([])
  const newSet = {
    exerciseId: null,
    weight: 0,
    repsAttempt: 0,
    repsCompleted: 0,
  }
  const addSet = () => {
    axios.post('http://localhost:3010/set')
      .then(res => {
        setSets([...sets, {exerciseId: res.data, ...newSet}])
      })
  }
  return (
    <div>
      <h2>{props.exerciseName}</h2>
      <button onClick={() => addSet()}>Add Set</button>
      {sets.length ? sets.map(set => {
        return (
          <Set key={set.exerciseId} set={set}/>
        )
      }) : null}
    </div>
  )
}

export default Exercise