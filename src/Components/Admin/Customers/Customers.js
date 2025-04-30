// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   Grid,
// } from "@mui/material";
// import axios from "axios";

// const AddCustomerForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     first_name: "",
//     last_name: "",
//     email: "",
//     mobile_no: "",
//     password: "",
//     state: "",
//     city: "",
//     role: 3, // Hidden field, default to "user" role ID
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://46.37.122.105:89/users/", formData);
//       alert("User registered successfully!");
//       console.log(res.data);
//       setFormData({
//         username: "",
//         first_name: "",
//         last_name: "",
//         email: "",
//         mobile_no: "",
//         password: "",
//         state: "",
//         city: "",
//         role: 3,
//       });
//     } catch (err) {
//       console.error("Error registering user:", err);
//       alert("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 10 }}>
//       <Typography variant="h5" gutterBottom>
//         Register New User
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           {["username", "first_name", "last_name", "email", "mobile_no", "password", "state", "city"].map((field) => (
//             <Grid item xs={12} sm={field === "password" ? 12 : 6} key={field}>
//               <TextField
//                 label={field.replace(/_/g, " ").toUpperCase()}
//                 name={field}
//                 type={field === "password" ? "password" : "text"}
//                 fullWidth
//                 value={formData[field]}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//           ))}
//         </Grid>
//         {/* Hidden Role Field */}
//         <input type="hidden" name="role" value={formData.role} />
//         <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
//           Register
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default AddCustomerForm;

//---------------get api/delete api working code -->

// import React, { useEffect, useState, useMemo } from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   IconButton,
//   CircularProgress,
// } from "@mui/material";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import DataTable from "../Pagination/TableLayout/TableLayout";
// import UserDetailModal from "./CustomerModel";
// import { useNavigate } from "react-router-dom";
// import AdminDashboard from "../../Admin/Dashboard/Dashboard";
// import axios from "axios";

// const Customer = () => {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [openModal, setOpenModal] = useState(false);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("http://46.37.122.105:89/users/");
//         const transformedUsers = res.data.map((user) => ({
//           user_id: user.user_id,
//           name: `${user.first_name} ${user.last_name}`,
//           profession: "N/A",
//           mobile: user.mobile_no,
//           email: user.email,
//           address: `${user.city}, ${user.state}`,
//           experience: "N/A",
//           description: "N/A",
//           lat: "N/A",
//           long: "N/A",
//           status: "active",
//         }));
//         setUsers(transformedUsers);
//       } catch (err) {
//         console.error("Failed to fetch users:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // 👇 Fetch single user by ID and show in modal
//   const fetchUserById = async (userId) => {
//     try {
//       const res = await axios.get(`http://46.37.122.105:89/users/${userId}/`);
//       const user = res.data[0]; // The API returns an array with a single object

//       const transformedUser = {
//         user_id: user.user_id,
//         name: `${user.first_name} ${user.last_name}`,
//         profession: "N/A",
//         mobile: user.mobile_no,
//         email: user.email,
//         address: `${user.city}, ${user.state}`,
//         experience: "N/A",
//         description: "N/A",
//         lat: "N/A",
//         long: "N/A",
//         status: "active",
//       };

//       setSelectedUser(transformedUser);
//       setOpenModal(true);
//     } catch (err) {
//       console.error("Failed to fetch user by ID:", err);
//     }
//   };

//   const handleView = (user) => {
//     fetchUserById(user.user_id); // Use new fetchUserById
//   };

//   const handleEdit = (userId) => {
//     navigate("/a-editpartners", { state: { userId } });
//   };

//   const handleDelete = async (userId) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       try {
//         await axios.delete(`http://46.37.122.105:89/users/${userId}/`);
//         setUsers((prev) => prev.filter((u) => u.user_id !== userId));
//         alert("User deleted successfully");
//       } catch (error) {
//         console.error("Failed to delete user:", error);
//         alert("Failed to delete user");
//       }
//     }
//   };

//   // const handleAddUser = async () => {
//   //   const newUser = {
//   //     username: "raju",
//   //     first_name: "raju",
//   //     last_name: "shanigarau",
//   //     email: "raju12@gmail.com",
//   //     mobile_no: "8938",
//   //     password: "1234",
//   //     state: "Telangana",
//   //     city: "Hyderabad",
//   //     role: 3,
//   //   };

//   //   try {
//   //     const res = await axios.post("http://46.37.122.105:89/users/", newUser);
//   //     const newUserEntry = {
//   //       user_id: res.data.user_id,
//   //       name: `${res.data.first_name} ${res.data.last_name}`,
//   //       profession: "N/A",
//   //       mobile: res.data.mobile_no,
//   //       email: res.data.email,
//   //       address: `${res.data.city}, ${res.data.state}`,
//   //       experience: "N/A",
//   //       description: "N/A",
//   //       lat: "N/A",
//   //       long: "N/A",
//   //       status: "active",
//   //     };
//   //     setUsers((prev) => [...prev, newUserEntry]);
//   //   } catch (error) {
//   //     console.error("Error adding user:", error);
//   //   }
//   // };

//   const columns = useMemo(() => [
//     { Header: "Name", accessor: "name" },
//     { Header: "User ID", accessor: "user_id" },
//     { Header: "Profession", accessor: "profession" },
//     { Header: "Mobile", accessor: "mobile" },
//     { Header: "Email", accessor: "email" },
//     { Header: "Address", accessor: "address" },
//     { Header: "Experience", accessor: "experience" },
//     {
//       Header: "Actions",
//       accessor: "actions",
//       disableSortBy: true,
//       Cell: ({ row }) => (
//         <>
//           <IconButton color="primary" onClick={() => handleView(row.original)}>
//             <VisibilityIcon />
//           </IconButton>
//           {/* <IconButton color="info" onClick={() => handleEdit(row.original.user_id)}>
//             <EditIcon />
//           </IconButton> */}
//           <IconButton color="error" onClick={() => handleDelete(row.original.user_id)}>
//             <DeleteIcon />
//           </IconButton>
//         </>
//       ),
//     },
//   ], []);

//   return (
//     <Container sx={{ mt: 10 }}>
//       <>
//         <AdminDashboard />
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             flexWrap: "wrap",
//             mb: 2,
//           }}
//         >
//           <Typography variant="h5">Customers</Typography>
//         </Box>

//         {loading ? (
//           <Box display="flex" justifyContent="center" mt={4}>
//             <CircularProgress />
//           </Box>
//         ) : (
//           <DataTable columns={columns} data={users} initialSearchValue={searchTerm} />
//         )}

//         <UserDetailModal
//           open={openModal}
//           onClose={() => setOpenModal(false)}
//           user={selectedUser}
//         />
//       </>
//     </Container>
//   );
// };

// export default Customer;
import React, { useEffect, useState, useMemo } from "react";
import {
  Container,
  Typography,
  Box,
  IconButton,
  CircularProgress,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import DataTable from "../Pagination/TableLayout/TableLayout";
import UserDetailModal from "./CustomerModel";
import AdminDashboard from "../../Admin/Dashboard/Dashboard";
import axios from "axios";

const Customer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Fetching users data from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://46.37.122.105:89/users/");
        const transformedUsers = res.data.map((user) => ({
          user_id: user.user_id,
          name: `${user.first_name} ${user.last_name}`,
          profession: "N/A",
          mobile: user.mobile_no,
          email: user.email,
          address: `${user.city}, ${user.state}`,
          experience: "N/A",
          description: "N/A",
          lat: "N/A",
          long: "N/A",
          status: "active",
        }));
        setUsers(transformedUsers);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Fetch user by ID for modal view
  // const fetchUserById = async (userId) => {
  //   try {
  //     const res = await axios.get(`http://46.37.122.105:89/users/${userId}/`);
  //     const user = res.data[0]; // API returns an array

  //     if (user) {
  //       const transformedUser = {
  //         user_id: user.user_id,
  //         name: `${user.first_name} ${user.last_name}`,
  //         profession: "N/A",
  //         mobile: user.mobile_no,
  //         email: user.email,
  //         address: `${user.city}, ${user.state}`,
  //         experience: "N/A",
  //         description: "N/A",
  //         lat: "N/A",
  //         long: "N/A",
  //         status: "active",
  //       };

  //       setSelectedUser(transformedUser);
  //       setOpenModal(true);
  //     } else {
  //       console.error("User data is empty");
  //     }
  //   } catch (err) {
  //     console.error("Failed to fetch user by ID:", err);
  //   }
  // };

  const handleView = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://46.37.122.105:89/users/${userId}/`);
        setUsers((prev) => prev.filter((u) => u.user_id !== userId));
        alert("User deleted successfully");
      } catch (error) {
        console.error("Failed to delete user:", error);
        alert("Failed to delete user");
      }
    }
  };

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "User ID", accessor: "user_id" },
      { Header: "Profession", accessor: "profession" },
      { Header: "Mobile", accessor: "mobile" },
      { Header: "Email", accessor: "email" },
      { Header: "Address", accessor: "address" },
      { Header: "Experience", accessor: "experience" },
      {
        Header: "Actions",
        accessor: "actions",
        disableSortBy: true,
        Cell: ({ row }) => {
          const user = row.original;
          return (
            <Box display="flex" gap={1}>
              <IconButton color="primary" onClick={() => handleView(user)}>
                <VisibilityIcon />
              </IconButton>
              <IconButton color="error" onClick={() => handleDelete(user.user_id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          );
        },
      },
    ],
    []
  );

  return (
    <Container sx={{ mt: 10 }}>
      <AdminDashboard />
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", mb: 2 }}>
        <Typography variant="h5">Customers</Typography>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <DataTable columns={columns} data={users} />
      )}

      <UserDetailModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        user={selectedUser}
      />
    </Container>
  );
};

export default Customer;

