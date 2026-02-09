import TaskItem from "./TaskItem";
import { Stack, Typography } from "@mui/material";

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (!tasks.length)
    return <Typography color="text.secondary">No tasks yet</Typography>;

  return (
    <Stack spacing={1}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </Stack>
  );
}
