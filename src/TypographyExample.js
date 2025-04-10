import { Typography, Box } from '@mui/material';

export default function TypographyExample() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Regular paragraph text. Lorem ipsum dolor sit amet.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Smaller text for captions and secondary information.
      </Typography>
    </Box>
  );
}