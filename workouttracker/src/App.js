import React, { useState } from 'react';
import axios from 'axios';
import Exercise from './Exercise';
import Distance from './Distance';
import './App.css';

function App() {
  const [exercises, setExercises] = useState([]);
  const [type, setType] = useState(undefined);
  const [newExercise, setNewExercise] = useState('');
  const addExercise = (name, id) => {
    const exerciseToAdd = type === 'sets' ? <Exercise key={id} exerciseName={name} id={id} /> : <Distance key={id} exerciseName={name} setId={id} />;
    setExercises([...exercises, exerciseToAdd]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3010/exercise', { exerciseName: newExercise })
      .then((res) => {
        if (type === 'distance') {
          axios.post('http://localhost:3010/distance', { exerciseId: res.data })
            .then((res2) => {
              addExercise(newExercise, res2.data);
            });
        } else {
          addExercise(newExercise, res.data);
        }
      });
    setType('none');
    setNewExercise('');
  };
  const handleDropdownChange = (event) => {
    event.persist();
    setType(event.target.value);
  };
  const handleChange = (event) => {
    event.persist();
    setNewExercise(event.target.value);
  };
  const form = (
    <form onSubmit={handleSubmit}>
      <label>
        What type of workout
        <select value={type} onChange={handleDropdownChange}>
          <option value="none" />
          <option value="distance">Distance</option>
          <option value="sets">Sets</option>
        </select>
      </label>
      <label>
        Name
        <input type="text" value={newExercise} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
  return (
    <div className="App">
      <h2>Add Exercise</h2>
      {form}
      {exercises}
    </div>
  );
}

export default App;
