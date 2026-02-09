import {
  Card,
  Stack,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <Card sx={{ p: 1.5 }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Checkbox
          checked={task.done}
          onChange={() => onToggle(task.id)}
          inputProps={{ 'aria-label': 'Task checkbox' }}
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
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

<Button variant="outlined" startIcon={<DeleteIcon />}
 onClick={() => onDelete(task.id)}>
  
  Delete
</Button>
      </Stack>
    </Card>
  );
}
