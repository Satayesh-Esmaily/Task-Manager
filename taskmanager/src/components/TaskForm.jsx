import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

export default function TaskForm({ onAdd }) {
  const [value, setValue] = useState("");

  const submitHandler = () => {
    onAdd(value);
    setValue("");
  };

  return (
    <Stack direction="row" spacing={2} mb={3}>
    <TextField id="standard-basic" label="new" variant="standard"
        fullWidth
        size="small"
        color="warning"
        value={value}
        onChange={(e) => setValue(e.target.value)} />
      <Button variant="contained" onClick={submitHandler}>
        Add
      </Button>
    </Stack>
  );
}
