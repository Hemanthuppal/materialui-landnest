import React from 'react';
import { AppBar, Tabs, Tab, Typography, Box, TextField, Checkbox, FormControlLabel, Button, Container, Paper } from '@mui/material';

function InteriorConsultationForm() {
  const [value, setValue] = React.useState(1); // Default to "Interior"

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <AppBar position="static" color="default" sx={{ mb: 2 }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Constructions" />
            <Tab label="Interior" sx={{ color: 'green', fontWeight: 'bold' }} />
          </Tabs>
        </AppBar>

        <Box sx={{ mb: 3 }}>
          <Tabs centered textColor="inherit">
            <Tab label="Our Services" />
            <Tab label="Portfolio" />
            <Tab label="How it works?" />
          </Tabs>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'center', mb: 3 }}>
          Talk to an Interior Designer
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <TextField fullWidth label="Name" margin="normal" />
          <TextField fullWidth label="Email ID" margin="normal" />
          <TextField fullWidth label="Phone" margin="normal" />

          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="Check Updates on Whatsapp"
            sx={{ mb: 2 }}
          />

          <Box sx={{ textAlign: 'center' }}>
            <Button variant="contained" sx={{ backgroundColor: 'red', color: '#fff', borderRadius: '20px', px: 4 }}>
              GET FREE CONSULTATION
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default InteriorConsultationForm;
