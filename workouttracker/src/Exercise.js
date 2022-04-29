import React, { useState } from "react";
import Set from './Set';
import axios from 'axios';

const Exercise = props => {
  const [sets, setSets] = useState([])
  
  const addSet = () => {
    axios.post('http://localhost:3010/set')
      .then(res => {
        setSets([...sets, <Set key={res.data} setId={res.data} />])
      })
  }
  return (
    <div>
      <h2>{props.exerciseName}</h2>
      <button onClick={() => addSet()}>Add Set</button>
      {sets.length ? sets : null}
    </div>
  )
}

export default Exercise