/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3010;

const db = require('../DB/db');
// app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/exercise', (req, res) => {
  const { exerciseName } = req.body;
  const query = `INSERT INTO exercise (name) VALUES ('${exerciseName}') RETURNING id;`;
  db.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    return client.query(query, (err2, result) => {
      release();
      if (err2) {
        return console.error('Error executing query', err.stack);
      }
      return res.send(result.rows[0].id);
    });
  });
});

app.post('/set', (req, res) => {
  const { exerciseId } = req.body;
  const query = `INSERT INTO set (exercise_id, weight, reps_attempted, reps_completed) VALUES(${exerciseId}, null, null, null) RETURNING id;`;
  db.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    return client.query(query, (err2, result) => {
      release();
      if (err2) {
        return console.error('Error executing query', err.stack);
      }
      return res.send(result.rows[0].id);
    });
  });
});

app.patch('/set', (req, res) => {
  const { setId, column, value } = req.body;
  const query = `UPDATE SET set ${column} = ${Number(value)} where id = ${Number(setId)}`;
  db.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    return client.query(query, (err2, result) => {
      release();
      if (err2) {
        return console.error('Error executing query', err.stack);
      }
      return res.send('success');
    });
  });
});

app.post('/distance', (req, res) => {
  const { exerciseId } = req.body;
  const query = `INSERT INTO distance (exercise_id, distance, time, elevation) VALUES(${exerciseId}, null, null, null) RETURNING id;`;
  db.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    return client.query(query, (err2, result) => {
      release();
      if (err2) {
        return console.error('Error executing query', err.stack);
      }
      return res.send(result.rows[0].id);
    });
  });
});

app.patch('/distance', (req, res) => {
  const { setId, column, value } = req.body;
  console.log(req.body);
  const query = `UPDATE distance SET ${column} = ${Number(value)} where id = ${Number(setId)}`;
  db.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    return client.query(query, (err2, result) => {
      release();
      if (err2) {
        return console.error('Error executing query', err.stack);
      }
      return res.send('success');
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
