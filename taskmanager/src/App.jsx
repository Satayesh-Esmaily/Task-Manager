import { useState } from "react";
import { Container } from "@mui/material";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Header from "./components/Header";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    if (!title.trim()) return;
    setTasks([...tasks, { id: Date.now(), title, done: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </Container>
    </>
  );
}
