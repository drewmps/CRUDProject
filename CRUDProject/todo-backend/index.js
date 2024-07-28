const express = require("express");
const app = express();
const cors = require("cors");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "rootprk",
  host: "localhost",
  port: 5432,
  database: "todo",
});

app.use(cors());
app.use(express.json());

// create task
app.post("/task", async (req, res) => {
  try {
    // bentuk req.body:
    // {
    //   task: "Isi"
    // }
    const { task } = req.body;
    const newTask = await pool.query(
      "INSERT INTO todo_table (task) VALUES ($1)",
      [task]
    );
    res.json("Successfully added");
  } catch (err) {
    console.error(err.message);
  }
});

// get all task
app.get("/task", async (req, res) => {
  try {
    const allTasks = await pool.query(
      "SELECT * FROM todo_table ORDER BY todo_id ASC"
    );
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// update a task
app.put("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo_table SET task = $1 WHERE todo_id = $2",
      [task, id]
    );
    res.json("Task was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a task
app.delete("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM todo_table WHERE todo_id = $1", [id]);
    res.json("Task was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
