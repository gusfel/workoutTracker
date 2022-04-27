DROP DATABASE IF EXISTS workout_tracker ;

CREATE DATABASE workout_tracker;

\c workout_tracker;

DROP TABLE IF EXISTS exercise;

CREATE TABLE exercise (
 id BIGSERIAL,
 name VARCHAR
);


ALTER TABLE exercise ADD CONSTRAINT exercise_pkey PRIMARY KEY (id);

CREATE TABLE set (
 id BIGSERIAL,
 exercise_id INTEGER,
 weight INTEGER,
 reps_attempted INTEGER,
 reps_completed INTEGER
);


ALTER TABLE set ADD CONSTRAINT set_pkey PRIMARY KEY (id);

ALTER TABLE set ADD CONSTRAINT set_exercise_id_fkey FOREIGN KEY (exercise_id) REFERENCES exercise(id);