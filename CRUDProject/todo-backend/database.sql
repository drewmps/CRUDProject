CREATE DATABASE todo;

CREATE TABLE todo_table (
  todo_id SERIAL PRIMARY KEY,
  task VARCHAR(255)
)