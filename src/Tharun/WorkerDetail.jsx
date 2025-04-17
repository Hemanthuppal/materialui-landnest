import React from "react";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Container,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  IconButton,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import PostAddIcon from "@mui/icons-material/PostAdd";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const WorkerDetail = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 10 }}>
      {/* Header with Back Button */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <IconButton edge="start" onClick={() => navigate("/inboxlist")}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" sx={{ ml: 1 }}>
          Worker Details
        </Typography>
      </Box>

      <Card elevation={3}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Avatar
              variant="square"
              alt="Kiran"
              src="https://randomuser.me/api/portraits/men/75.jpg"
              sx={{
                width: 120,
                height: 120,
                borderRadius: 2,
                mb: 2,
                boxShadow: 2,
              }}
            />

            <Box sx={{ width: "100%" }}>
              <Typography variant="body1" gutterBottom>
                <strong>Name:</strong> Kiran
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Email ID:</strong> Kiran@gmail.com
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Mobile:</strong> 9999999999
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Address:</strong> 7-52/Gb
              </Typography>
              <Typography variant="body1">
                <strong>Customer ID:</strong> CUSTOMER001
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid #ccc",
        }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Construction & Interiors" icon={<BuildIcon />} />
          <BottomNavigationAction label="Post" icon={<PostAddIcon />} />
          <BottomNavigationAction label="Home Services" icon={<HomeRepairServiceIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default WorkerDetail;
