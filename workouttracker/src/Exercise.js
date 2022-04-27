import React, { useState } from "react";
import Set from './Set';

const Exercise = props => {
  const [sets, setSets] = useState([])
  const newSet = {
    weight: null,
    repsAttempt: null,
    repsCompleted: null,
  }
  return (
    <div>
      <h2>{props.exerciseName}</h2>
      <button onClick={() => setSets([...sets, {...newSet}])}>Add Set</button>
      {sets.length ? sets.map(set => {
        return (
          <Set set={set}/>
        )
      }) : null}
    </div>
  )
}

export default Exercise