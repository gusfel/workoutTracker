import React, { useState } from "react";
import Exercise from './Exercise'
import axios from 'axios';
import './App.css';

function App() {
  const [exercises, setExercises] = useState([])
  const [newExercise, setNewExercise] = useState('')
  const addExercise = ( name, id) => {
    setExercises([...exercises, <Exercise key={`${name}-${new Date()}`} exerciseName={name} id={id}/>])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3010/exercise', {exerciseName: newExercise})
    .then(res => {
      addExercise(newExercise, res.data)
    })
    setNewExercise('')
  }
  const handleChange = (event) => {
    event.persist();
    setNewExercise(event.target.value);
  };
  const form = (
    <form onSubmit={handleSubmit}>
        <label>
          Add Exercise
          <input type="text" value={newExercise} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  )
  return (
    <div className="App">
      {form}
      {exercises}
    </div>
  );
}

export default App;
