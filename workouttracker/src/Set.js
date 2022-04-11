import React, { useState } from "react";

const Set = ({ weight, repsAttempt, repsCompleted }) => {
  const [values, setValues] = useState({
    weight: null,
    repsAttempt: null,
    repsCompleted: null,
  });

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div>
      <input
        className="weight"
        type="number"
        placeholder="Weight"
        name="weight"
        value={values.weight}
        onChange={handleChange}
      />
      <input
        className="repsAttempt"
        type="number"
        placeholder="Reps Attempted"
        name="repsAttempt"
        value={values.repsAttempt}
        onChange={handleChange}
      />
      <input
        className="repsCompleted"
        type="repsCompleted"
        placeholder="Reps Completed"
        name="repsCompleted"
        value={values.weight}
        onChange={handleChange}
      />
    </div>
  );
};

export default Set;
