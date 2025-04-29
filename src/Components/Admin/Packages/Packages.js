import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  Box,
  Fade,
  Grow,
  TextField,
  Button,
} from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon, Edit as EditIcon, Save as SaveIcon } from "@mui/icons-material";
import AdminDashboard from "../../Admin/Dashboard/Dashboard";

const ConstructionPackages = () => {
  const [expanded, setExpanded] = useState({});
  const [newPackage, setNewPackage] = useState({
    user_id: 1,
    category: "",
    package_cost: "",
    tile_general: "",
    window_standered: "",
    doors_pooja: "",
    sanitary_wallmixer: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [packages, setPackages] = useState([]);
  const [editableFields, setEditableFields] = useState({}); // State for editable fields

  // Function to fetch all packages
  const fetchPackages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://46.37.122.105:89/packages/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPackages(data);
    } catch (error) {
      setError("Failed to fetch packages: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to create a new package
  const createPackage = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage("");
    
    try {
      const response = await fetch("http://46.37.122.105:89/packages/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPackage),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSuccessMessage(data.message);
      setNewPackage({
        user_id: 1,
        category: "",
        package_cost: "",
        tile_general: "",
        window_standered: "",
        doors_pooja: "",
        sanitary_wallmixer: "",
      });
      fetchPackages(); // Refresh the package list
    } catch (error) {
      setError("Failed to create package: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to update a package
  const updatePackage = async (id, updatedData) => {
    setLoading(true);
    setError(null);
    setSuccessMessage("");

    try {
      const response = await fetch(`http://46.37.122.105:89/packages/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSuccessMessage(data.message);
      fetchPackages(); // Refresh the package list
    } catch (error) {
      setError("Failed to update package: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to delete a package
  const deletePackage = async (id) => {
    setLoading(true);
    setError(null);
    setSuccessMessage("");

    try {
      const response = await fetch(`http://46.37.122.105:89/packages/${id}/`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSuccessMessage(data.message);
      fetchPackages(); // Refresh the package list
    } catch (error) {
      setError("Failed to delete package: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect to fetch packages on component mount
  useEffect(() => {
    fetchPackages();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPackage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleEdit = (pkgId) => {
    setEditableFields((prev) => ({
      ...prev,
      [pkgId]: !prev[pkgId],
    }));
  };

  const handleFieldChange = (pkgId, field, value) => {
    setPackages((prev) =>
      prev.map((pkg) =>
        pkg.package_id === pkgId ? { ...pkg, [field]: value } : pkg
      )
    );
  };

  return (
    <>
      <AdminDashboard />
      <Fade in={true} timeout={800}>
        <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, pt: 4, maxWidth: "1200px", margin: "0 auto", pb: 2 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6"> Add New Package</Typography>
            <TextField
              name="category"
              label="Category"
              value={newPackage.category}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              name="package_cost"
              label="Package Cost"
              value={newPackage.package_cost}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              name="tile_general"
              label="Tile General"
              value={newPackage.tile_general}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              name="window_standered"
              label="Window Standard"
              value={newPackage.window_standered}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              name="doors_pooja"
              label="Doors Pooja"
              value={newPackage.doors_pooja}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              name="sanitary_wallmixer"
              label="Sanitary Wall Mixer"
              value={newPackage.sanitary_wallmixer}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button variant="contained" onClick={createPackage} disabled={loading}>
              {loading ? "Creating..." : "Add Package"}
            </Button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {packages.map((pkg, index) => (
              <Grow in={true} timeout={index * 200 + 400} key={pkg.package_id}>
                <Card sx={{ borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", overflow: "hidden" }}>
                  <CardHeader
                    title={<Typography variant="h5">{pkg.category}</Typography>}
                    subheader={<Typography variant="h4">₹{pkg.package_cost}</Typography>}
                    sx={{ background: "lightgray", padding: "30px 20px", textAlign: "center" }}
                  />
                  <Box sx={{ background: "#fff" }}>
                    <Accordion
                      expanded={expanded[pkg.package_id] === "details"}
                      onChange={(event, newExpanded) => setExpanded({ ...expanded, [pkg.package_id]: newExpanded ? "details" : null })}
                      sx={{ "&:before": { display: "none" }, boxShadow: "none", borderBottom: "1px solid rgba(0,0,0,0.05)" }}
                    >
                      <AccordionSummary
                        expandIcon={expanded[pkg.package_id] === "details" ? <RemoveIcon sx={{ color: "black" }} /> : <AddIcon sx={{ color: "#666" }} />}
                        aria-controls={`details-content`}
                        id={`details-header`}
                        sx={{ padding: "0 25px", minHeight: "68px !important", "& .MuiAccordionSummary-content": { margin: "12px 0", alignItems: "center" } }}
                      >
                        <Typography sx={{ fontWeight: 600, color: "black", fontSize: "1.2rem", letterSpacing: "0.2px" }}>
                          Package Details
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          padding: "0 25px 25px",
                          backgroundColor: "#fff",
                          borderLeft: `3px solid black`,
                          marginLeft: "25px",
                          marginBottom: "15px",
                          borderRadius: "0 8px 8px 0",
                        }}
                      >
                        <Typography variant="body1" sx={{ color: "#555", textAlign: "left", lineHeight: "1.8", fontSize: "0.95rem", whiteSpace: "pre-line" }}>
                          <div>
                            Tile General: {editableFields[pkg.package_id] ? (
                              <TextField
                                value={pkg.tile_general}
                                onChange={(e) => handleFieldChange(pkg.package_id, 'tile_general', e.target.value)}
                                size="small"
                                type="number"
                              />
                            ) : (
                              pkg.tile_general
                            )}
                          </div>
                          <div>
                            Window Standard: {editableFields[pkg.package_id] ? (
                              <TextField
                                value={pkg.window_standered}
                                onChange={(e) => handleFieldChange(pkg.package_id, 'window_standered', e.target.value)}
                                size="small"
                                type="number"
                              />
                            ) : (
                              pkg.window_standered
                            )}
                          </div>
                          <div>
                            Doors Pooja: {editableFields[pkg.package_id] ? (
                              <TextField
                                value={pkg.doors_pooja}
                                onChange={(e) => handleFieldChange(pkg.package_id, 'doors_pooja', e.target.value)}
                                size="small"
                                type="number"
                              />
                            ) : (
                              pkg.doors_pooja
                            )}
                          </div>
                          <div>
                            Sanitary Wall Mixer: {editableFields[pkg.package_id] ? (
                              <TextField
                                value={pkg.sanitary_wallmixer}
                                onChange={(e) => handleFieldChange(pkg.package_id, 'sanitary_wallmixer', e.target.value)}
                                size="small"
                                type="number"
                              />
                            ) : (
                              pkg.sanitary_wallmixer
                            )}
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                      <IconButton onClick={() => toggleEdit(pkg.package_id)}>
                        {editableFields[pkg.package_id] ? <SaveIcon /> : <EditIcon />}
                      </IconButton>
                      <Button variant="outlined" color="error" onClick={() => deletePackage(pkg.package_id)}>
                        Delete Package
                      </Button>
                      {editableFields[pkg.package_id] && (
                        <Button variant="outlined" onClick={() => updatePackage(pkg.package_id, {
                          doors_pooja: pkg.doors_pooja,
                          sanitary_wallmixer: pkg.sanitary_wallmixer,
                          tile_general: pkg.tile_general,
                          window_standered: pkg.window_standered,
                        })}>
                          Save Changes
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Card>
              </Grow>
            ))}
          </Box>
        </Box>
      </Fade>
    </>
  );
};

export default ConstructionPackages;