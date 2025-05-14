import React, { useEffect, useState, useContext } from "react";
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
import { BASE_URL } from "../Api/ApiUrls";
import { AuthContext } from "../AuthContext/AuthContext";

const WorkerDetail = () => {
  const navigate = useNavigate();
  const { userId, logout } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [propertyCounts, setPropertyCounts] = useState({
    postProperty: 0,
    sellProperty: 0,
    rentProperty: 0,
    leaseProperty: 0,
    vendors: 0,
  });

  const clickableLabels = [
    "My Post Property With Landnest",
    "My Sell Property",
    "My Rent Property",
    "My Lease Property",
  ];

  useEffect(() => {
    if (!userId) return;

    // Fetch user data
    fetch(`${BASE_URL}/users/${userId}/`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data); // Direct user object
      })
      .catch((error) => console.error("Error fetching user data:", error));

     fetch(`${BASE_URL}/property/`)
    .then(response => response.json()) 
    .then(data => {
      const currentUserId = userId; // Replace with real user ID (from context, auth, etc.)

      const userProperties = data.filter(prop => prop.user_id == currentUserId);

      const counts = {
        postProperty: userProperties.filter(prop => prop.type == "best-deal").length,
        sellProperty: userProperties.filter(prop => prop.type == "sell").length,
        rentProperty: userProperties.filter(prop => prop.type == "rent").length,
        leaseProperty: userProperties.filter(prop => prop.type == "lease").length,
        vendors: 0 // Still needs separate API
      };

      setPropertyCounts(counts);
    })
    .catch(error => console.error("Error fetching property data:", error));
}, []);

  return (
    <Box sx={{ bgcolor: "rgb(239, 231, 221)", minHeight: "100vh", position: "relative", pb: 7 }}>
      {/* Header */}
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

      {/* Main Content */}
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
              {/* Avatar */}
              <Box sx={{ mb: 3, p: 1, display: "flex", justifyContent: "center" }}>
                <Avatar
                  variant="square"
                  alt={userData?.username || "Worker"}
                  src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000"
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              </Box>

              {/* Info Fields */}
              <Box sx={{ width: "100%" }}>
                {[
                  { label: "Name", value: userData?.username || "Loading..." },
                  { label: "Email ID", value: userData?.email || "Loading..." },
                  { label: "Mobile", value: userData?.mobile_no || "Loading..." },
                  { label: "Address", value: userData?.city || "Loading..." },
                  { label: "Customer ID", value: userData?.user_id ? `CUSTOMER${userData.user_id.toString().padStart(4, '0')}` : "Loading..." },
                  { label: "My Post Property With Landnest", value: propertyCounts.postProperty },
                  { label: "My Sell Property", value: propertyCounts.sellProperty },
                  { label: "My Rent Property", value: propertyCounts.rentProperty },
                  { label: "My Lease Property", value: propertyCounts.leaseProperty },
                  { label: "My Vendors Registration", value: propertyCounts.vendors },
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
                        cursor: clickableLabels.includes(item.label) ? "pointer" : "default",
                        color: clickableLabels.includes(item.label) ? "primary.main" : "inherit",
                        textDecoration: clickableLabels.includes(item.label) ? "underline" : "none",
                      }}
                      onClick={() => {
                        if (item.label == "My Post Property With Landnest") {
                          navigate("/user-buy", { state: { type: "best-deal" } });
                        } else if (item.label == "My Sell Property") {
                          navigate("/user-buy", { state: { type: "sell" } });
                        } else if (item.label == "My Rent Property") {
                          navigate("/user-rent");
                        } else if (item.label == "My Lease Property") {
                          navigate("/user-lease");
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

      {/* Bottom Nav */}
      <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <FormsBottomNavbar />
      </Box>
    </Box>
  );
};

export default WorkerDetail;
