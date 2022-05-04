DROP DATABASE IF EXISTS workout_tracker ;

CREATE DATABASE workout_tracker;

\c workout_tracker;

CREATE TABLE exercise (
 id BIGSERIAL,
 name VARCHAR,
 date timestamp,
 deleted BOOLEAN
);


ALTER TABLE exercise ADD CONSTRAINT exercise_pkey PRIMARY KEY (id);

CREATE TABLE set (
 id BIGSERIAL,
 exercise_id INTEGER,
 weight INTEGER,
 reps_attempted INTEGER,
 reps_completed INTEGER,
 deleted BOOLEAN
);


ALTER TABLE set ADD CONSTRAINT set_pkey PRIMARY KEY (id);

CREATE TABLE distance (
 id BIGSERIAL,
 exercise_id INTEGER,
 distance INTEGER,
 time INTEGER,
 elevation INTEGER,
 deleted BOOLEAN
);


ALTER TABLE distance ADD CONSTRAINT distance_pkey PRIMARY KEY (id);

ALTER TABLE set ADD CONSTRAINT set_exercise_id_fkey FOREIGN KEY (exercise_id) REFERENCES exercise(id);
ALTER TABLE distance ADD CONSTRAINT distance_exercise_id_fkey FOREIGN KEY (exercise_id) REFERENCES exercise(id);