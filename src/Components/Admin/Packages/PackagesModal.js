// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   TextField,
//   Box,
// } from "@mui/material";

// const AddPackageModal = ({ open, onClose, onCreate, loading }) => {
//   const [newPackage, setNewPackage] = useState({
//     user_id: 1,
//     category: "",
//     package_cost: "",
//     tile_general: "",
//     window_standered: "",
//     doors_pooja: "",
//     sanitary_wallmixer: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPackage((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleCreate = () => {
//     onCreate(newPackage);
//     setNewPackage({
//       user_id: 1,
//       category: "",
//       package_cost: "",
//       tile_general: "",
//       window_standered: "",
//       doors_pooja: "",
//       sanitary_wallmixer: "",
//     });
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
//       <DialogTitle>Add New Construction Package</DialogTitle>
//       <DialogContent>
//         <Box sx={{ mt: 2 }}>
//           <FormControl fullWidth sx={{ mb: 3 }}>
//             <InputLabel>Category</InputLabel>
//             <Select
//               name="category"
//               value={newPackage.category}
//               onChange={handleInputChange}
//               label="Category"
//             >
//               <MenuItem value="Basic Construction">Basic Construction</MenuItem>
//               <MenuItem value="Standard Construction">Standard Construction</MenuItem>
//               <MenuItem value="Premium Construction">Premium Construction</MenuItem>
//             </Select>
//           </FormControl>

//           <TextField
//             name="package_cost"
//             label="Package Cost"
//             value={newPackage.package_cost}
//             onChange={handleInputChange}
//             fullWidth
//             type="number"
//             sx={{ mb: 3 }}
//           />

//           <TextField
//             name="tile_general"
//             label="Tile General (sq. ft. price)"
//             value={newPackage.tile_general}
//             onChange={handleInputChange}
//             fullWidth
//             type="number"
//             sx={{ mb: 3 }}
//           />

//           <TextField
//             name="window_standered"
//             label="Window Standard (sq. ft. price)"
//             value={newPackage.window_standered}
//             onChange={handleInputChange}
//             fullWidth
//             type="number"
//             sx={{ mb: 3 }}
//           />

//           <TextField
//             name="doors_pooja"
//             label="Doors Pooja (price per door)"
//             value={newPackage.doors_pooja}
//             onChange={handleInputChange}
//             fullWidth
//             type="number"
//             sx={{ mb: 3 }}
//           />

//           <TextField
//             name="sanitary_wallmixer"
//             label="Sanitary Wall Mixer (price)"
//             value={newPackage.sanitary_wallmixer}
//             onChange={handleInputChange}
//             fullWidth
//             type="number"
//             sx={{ mb: 3 }}
//           />
//         </Box>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose} disabled={loading}>
//           Cancel
//         </Button>
//         <Button onClick={handleCreate} variant="contained" disabled={loading}>
//           {loading ? "Creating..." : "Create Package"}
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AddPackageModal;