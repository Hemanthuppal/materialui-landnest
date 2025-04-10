import { Button, Stack } from '@mui/material';
import { Delete } from '@mui/icons-material';  // Fixed import

export default function ButtonExample() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="text">Text Button</Button>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined Button
      </Button>
      <Button 
        variant="contained" 
        color="error"
        startIcon={<Delete />}  // Fixed icon usage
      >
        Delete
      </Button>
    </Stack>
  );
}