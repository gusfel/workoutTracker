const express = require("express");
const app = express();
const port = 3010;

const db = require("/Users/gusfeliciano345/Desktop/projects/workoutTracker/workoutTracker/workouttracker/DB/db");
// app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/exercise", (req, res) => {
  const { exerciseName } = req.body;
  const query = `INSERT INTO exercise (name) VALUES ('${exerciseName}') RETURNING id;`;
  db.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query(query, (err, result) => {
      release()
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      console.log(result.rows[0].id)
      res.send(result.rows[0].id)
    })
  })
});

app.post("/set", (req, res) => {
  const query = `INSERT INTO set (exercise_id, weight, reps_attempted, reps_completed) VALUES(null, null, null, null) RETURNING id;`
  db.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query(query, (err, result) => {
      release()
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      res.send(result.rows[0].id)
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
