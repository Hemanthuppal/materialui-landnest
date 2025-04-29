import React from "react";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import FormsBottomNavbar from "../maniteja/FormsBottomNavbar";

const WorkerDetail = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "rgb(239, 231, 221)", minHeight: "100vh", position: "relative", pb: 7 }}>
      {/* Fixed Header */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bgcolor: "rgb(239, 231, 221)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 1,
          borderBottom: "1px solid #ccc",
        }}
      >
        <IconButton edge="start" onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h6" sx={{ ml: 1, fontWeight: "bold" }}>
          Worker Detail
        </Typography>
      </Box>

      {/* Scrollable Content Area */}
      <Box sx={{ mt: 8, mb: 8, px: 2, height: "100vh" }}>
        <Card elevation={3}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "left",
                px: 2,
                py: 3,
              }}
            >
              {/* Worker Avatar */}
              <Box
                sx={{
                  mb: 3,
                  p: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  variant="square"
                  alt="Kiran"
                  src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              </Box>

              {/* Worker Information */}
              <Box sx={{ width: "100%" }}>
                {[
                  { label: "Name", value: "Kiran" },
                  { label: "Email ID", value: "Kiran@gmail.com" },
                  { label: "Mobile", value: "9999999999" },
                  { label: "Address", value: "7-52/5b" },
                  { label: "Customer ID", value: "CUSTOMER001" },
                  { label: "My Post Property With Landnest", value: "2" },
                  { label: "My Sell Property", value: "2" },
                  { label: "My Rent Property", value: "2" },
                  { label: "My Lease Property", value: "2" },
                  { label: "My Vendors Registration", value: "2" },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1.5,
                    }}
                  >
                    <Typography variant="body1" fontWeight="bold">
                      {item.label}:
                    </Typography>
                    <Typography
  variant="body1"
  sx={{
    cursor: ['My Post Property With Landnest', 'My Sell Property', 'My Rent Property', 'My Lease Property'].includes(item.label)
      ? 'pointer'
      : 'default',
    color: ['My Post Property With Landnest', 'My Sell Property', 'My Rent Property', 'My Lease Property'].includes(item.label)
      ? 'primary.main'
      : 'inherit',
    textDecoration: ['My Post Property With Landnest', 'My Sell Property', 'My Rent Property', 'My Lease Property'].includes(item.label)
      ? 'underline'
      : 'none',
  }}
  onClick={() => {
    if (item.label == 'My Post Property With Landnest' || item.label == 'My Sell Property') {
      navigate('/user-buy');
    } else if (item.label == 'My Rent Property') {
      navigate('/user-rent');
    } else if (item.label == 'My Lease Property') {
      navigate('/user-lease');
    }
  }}
>
  {item.value}
</Typography>

                  </Box>
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Fixed Bottom Navigation */}
      <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <FormsBottomNavbar />
      </Box>
    </Box>
  );
};

export default WorkerDetail;
