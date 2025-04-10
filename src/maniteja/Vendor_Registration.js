import React from 'react';
import {
    Box, Typography, TextField, Button, Select, MenuItem,
    InputLabel, FormControl, Paper, Stack, styled
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


// Custom red button (Cancel)
const RedButton = styled(Button)({
    backgroundColor: 'red',
    color: 'white',
    '&:hover': {
        backgroundColor: '#cc0000',
    },
});

// Custom light blue button (Submit)
const BlueButton = styled(Button)({
    backgroundColor: '#4da6ff', // light blue
    color: 'white',
    '&:hover': {
        backgroundColor: '#3399ff',
    },
});


// Custom gray button with black text
const GrayButton = styled(Button)({
    backgroundColor: '#a9a9a9',
    color: 'black',
    '&:hover': {
        backgroundColor: 'gray',
    },
});

const VendorRegister = () => {
    return (
        <Box sx={{
            p: { xs: 2, sm: 3 },
            maxWidth: 'md',
            mx: 'auto'
        }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                Vendor Registration
            </Typography>

            {/* Category Section */}
            <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Category
                </Typography>

                <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel id="category-label">Select Category</InputLabel>
                    <Select
                        labelId="category-label"
                        id="category"
                        label="Select Category"
                        defaultValue="Plumbing"
                    >
                        <MenuItem value="Plumbing">Plumbing</MenuItem>
                        <MenuItem value="Electrical">Electrical</MenuItem>
                        <MenuItem value="Carpentry">Carpentry</MenuItem>
                    </Select>
                </FormControl>

                <TextField fullWidth label="Name" variant="outlined" sx={{ mb: 2 }} />
                <TextField fullWidth label="Mobile" variant="outlined" sx={{ mb: 2 }} />
                <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2 }} />
                <TextField fullWidth label="Address" variant="outlined" sx={{ mb: 2 }} />
                <TextField fullWidth label="Work Experience" variant="outlined" sx={{ mb: 2 }} />

                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Profile photo
                </Typography>
                <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                    sx={{ mb: 3 }}
                >
                    Upload Image
                    <VisuallyHiddenInput type="file" />
                </Button>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Previous worked photos
                </Typography>
                <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                    sx={{ mb: 3 }}
                >
                    Upload Image
                    <VisuallyHiddenInput type="file" multiple />
                </Button>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Description
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={4}
                />
            </Paper>

            <Stack direction="row" spacing={2} justifyContent="center">
                <RedButton
                    variant="contained"
                    size="large"
                    sx={{ px: 4, fontWeight: 'bold' }}
                >
                    Cancel
                </RedButton>
                <BlueButton
                    variant="contained"
                    size="large"
                    sx={{ px: 4, fontWeight: 'bold' }}
                >
                    SUBMIT
                </BlueButton>
            </Stack>
        </Box>
    );
};

export default VendorRegister;
