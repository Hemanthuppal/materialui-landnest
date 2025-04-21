import React from "react";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";
import FormsBottomNavbar from "../maniteja/FormsBottomNavbar";

const WorkerDetail = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 10 }}>
      {/* Header with Back Button */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <IconButton edge="start" onClick={() => navigate("/inboxlist")}>
             <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h6" sx={{ ml: 1, fontWeight: "bold" }}>
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
              textAlign: "left",
              px: 2,
              py: 3,
              height: "80vh"
            }}
          >
            {/* Avatar in a Box for clean spacing */}
            <Box
              sx={{
                mb: 3,
                p: 1,
                display: "flex",
                justifyContent: "center",
                borderRadius: 2,
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

            {/* Worker Info */}
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

      <FormsBottomNavbar />
    </Container>
  );
};

export default WorkerDetail;
