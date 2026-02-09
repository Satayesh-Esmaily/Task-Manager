import {
  Card,
  Stack,
  Checkbox,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <Card sx={{ p: 1.5 }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Checkbox
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />

        <Typography
          sx={{
            flexGrow: 1,
            textDecoration: task.done ? "line-through" : "none",
            color: task.done ? "text.secondary" : "text.primary",
          }}
        >
          {task.title}
        </Typography>

        <IconButton onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Card>
  );
}
