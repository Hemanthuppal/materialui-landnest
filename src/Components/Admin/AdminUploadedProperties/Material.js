import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    IconButton,
} from '@mui/material';
import DataTable from '../Pagination/TableLayout/TableLayout';
import { Edit, Delete, Visibility } from '@mui/icons-material';

const Material = () => {
    const [materials, setMaterials] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [currentMaterial, setCurrentMaterial] = useState(null);
    const [category, setCategory] = useState('');
    const [materialName, setMaterialName] = useState('');
    const [image, setImage] = useState(null);
    const [imageFileName, setImageFileName] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleAddClick = () => {
        setOpenDialog(true);
        setIsEditing(false);
        setCategory('');
        setMaterialName('');
        setImage(null);
        setImageFileName('');
    };

    const handleEditClick = (material) => {
        setOpenDialog(true);
        setIsEditing(true);
        setCategory(material.category);
        setMaterialName(material.materialName);
        setImage(material.image);
        setImageFileName(material.imageFileName);
        setCurrentMaterial(material);
    };

    const handleSaveMaterial = () => {
        if (isEditing) {
            const updatedMaterials = materials.map((material) =>
                material.id === currentMaterial.id
                    ? { ...material, category, materialName, image, imageFileName }
                    : material
            );
            setMaterials(updatedMaterials);
        } else {
            const newMaterial = {
                id: Date.now(),
                category,
                materialName,
                image,
                imageFileName,
            };
            setMaterials([...materials, newMaterial]);
        }
        setOpenDialog(false);
    };

    const handleDeleteClick = (id) => {
        setMaterials(materials.filter((material) => material.id !== id));
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFileName(file.name);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const columns = [
        {
            Header: 'S.No',
            accessor: 'id',
        },
        {
            Header: 'Category',
            accessor: 'category',
        },
        {
            Header: 'Material Name',
            accessor: 'materialName',
        },
        {
            Header: 'Image',
            accessor: 'image',
            Cell: ({ value }) => <img src={value} alt="material" width={50} />,
        },
        {
            Header: 'Actions',
            accessor: 'actions',
            Cell: ({ row }) => (
                <Box>
                    <IconButton onClick={() => handleEditClick(row.original)}>
                        <Edit />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDeleteClick(row.original.id)}>
                        <Delete />
                    </IconButton>
                    <IconButton onClick={() => alert("View clicked")}>
                        <Visibility />
                    </IconButton>
                </Box>
            ),
        },
    ];

    return (
        <Box>
            {/* Header and Add Button Centered */}
            <Box mb={2}>
    <h3 style={{ textAlign: 'center' }}>Add Materials</h3> {/* or remove textAlign if you want it left */}
  </Box>



            {/* Material Table */}
            <DataTable
                columns={columns}
                data={materials}
                initialSearchValue=""
            />

            {/* Dialog for Add/Update Material */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>{isEditing ? 'Edit Material' : 'Add Material'}</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Category</InputLabel>
                        <Select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            label="Category"
                        >
                            <MenuItem value="Category 1">Category 1</MenuItem>
                            <MenuItem value="Category 2">Category 2</MenuItem>
                            <MenuItem value="Category 3">Category 3</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="Material Name"
                        variant="outlined"
                        fullWidth
                        value={materialName}
                        onChange={(e) => setMaterialName(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    {/* Upload Image Field inside Dialog */}
                    <TextField
                        label="Upload Image"
                        variant="outlined"
                        fullWidth
                        value={imageFileName}
                        InputProps={{
                            endAdornment: (
                                <Button
                                    variant="outlined"
                                    component="label"
                                >
                                    Upload
                                    <input
                                        type="file"
                                        hidden
                                        accept="image/*"
                                        onChange={handleFileUpload}
                                    />
                                </Button>
                            ),
                        }}
                        sx={{ mb: 2 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveMaterial} color="primary">
                        {isEditing ? 'Update' : 'Save'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Material;
