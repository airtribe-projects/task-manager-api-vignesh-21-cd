const express = require('express');
const app = express();
const data = require("./task.json");
let tasks = data.tasks;
app.use(express.json());
app.post("/tasks", (req, res) => {
  const { title, description, completed } = req.body;

  if (
    typeof title !== "string" ||
    typeof description !== "string" ||
    typeof completed !== "boolean"
  ) {
    return res.status(400).json({ error: "Invalid task data" });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    completed
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});


app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});


app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json(task);
});


app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { title, description, completed } = req.body;

  if (
    typeof title !== "string" ||
    typeof description !== "string" ||
    typeof completed !== "boolean"
  ) {
    return res.status(400).json({ error: "Invalid task data" });
  }

  task.title = title;
  task.description = description;
  task.completed = completed;

  res.status(200).json(task);
});


app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks.splice(index, 1);
  res.status(200).json({ message: "Task deleted" });
});




module.exports = app;