import ButtonExample from './ButtonExample';
import TypographyExample from './TypographyExample';
import FormExample from './FormExample';
import CardExample from './CardExample';
import AppBarExample from './AppBarExample';
import { Container, Box } from '@mui/material';

export default function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <AppBarExample />
      </Box>
      
      <Box sx={{ my: 4 }}>
        <TypographyExample />
      </Box>
      
      <Box sx={{ my: 4 }}>
        <ButtonExample />
      </Box>
      
      <Box sx={{ my: 4 }}>
        <FormExample />
      </Box>
      
      <Box sx={{ my: 4 }}>
        <CardExample />
      </Box>
    </Container>
  );
}