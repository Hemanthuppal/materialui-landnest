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
                  src="https://randomuser.me/api/portraits/men/75.jpg"
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
                    <Typography variant="body1">{item.value}</Typography>
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
