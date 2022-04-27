import React, { useState } from "react";
import Exercise from './Exercise'
import './App.css';

function App() {
  const [exercises, setExercises] = useState([])
  const [newExercise, setNewExercise] = useState('')
  const addExercise = name => {
    setExercises([...exercises, <Exercise key={`${name}-${new Date()}`} exerciseName={name}/>])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addExercise(newExercise)
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
