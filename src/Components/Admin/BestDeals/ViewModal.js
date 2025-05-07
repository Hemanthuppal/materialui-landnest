import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    Avatar,
    Grid,
    Divider,
    Chip,
    IconButton,
    Paper
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { BASE_URL } from "../../../Api/ApiUrls";

const StyledDialogTitle = styled(DialogTitle)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1976d2",
    color: "white",
});

const PropertyDetailItem = ({ label, value }) => (
    <Grid item xs={12} sm={6} md={4}>
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
            {label}:
        </Typography>
        <Typography variant="body1" gutterBottom>
            {value || "N/A"}
        </Typography>
    </Grid>
);

const ViewModal = ({ open, onClose, property }) => {
    if (!property) return null;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <StyledDialogTitle>
                <Typography variant="h6">{property.property_name}</Typography>
                <IconButton onClick={onClose} sx={{ color: "white" }}>
                    <CloseIcon />
                </IconButton>
            </StyledDialogTitle>

            <DialogContent dividers>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                        Property Details 
                    </Typography>
                    
                </Box>

                <Divider sx={{ my: 2 }} />

                <Grid container spacing={3}>
                    <PropertyDetailItem label="Property ID" value={property.property_id} />
                    <PropertyDetailItem label="Type" value={property.type} />
                    <PropertyDetailItem label="Price" value={`₹${property.price?.toLocaleString()}`} />
                    <PropertyDetailItem label="Location" value={property.location} />
                    <PropertyDetailItem label="Facing" value={property.facing} />
                    <PropertyDetailItem label="Road Width" value={`${property.roadwidth} ${property.units}`} />
                    <PropertyDetailItem label="Site Area" value={`${property.site_area} ${property.units}`} />
                    <PropertyDetailItem label="Dimensions" value={`${property.length} x ${property.width} ${property.units}`} />
                    <PropertyDetailItem label="Built-up Area" value={`${property.buildup_area} ${property.units}`} />
                    <PropertyDetailItem label="Posted By" value={property.posted_by} />
                    <PropertyDetailItem label="Nearby" value={property.nearby} />
                    <PropertyDetailItem label="Mobile No" value={property.mobile_no} />
                    <PropertyDetailItem label="Coordinates" value={`Lat: ${property.lat}, Long: ${property.long}`} />

                    <Grid item xs={12}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Amenities:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {property.power_backup && <Chip label={`Power Backup: ${property.power_backup}`} />}
                            {property.gated_security && <Chip label={`Gated Security: ${property.gated_security}`} />}
                            {property.borewell && <Chip label={`Borewell: ${property.borewell}`} />}
                            {property.parking && <Chip label={`Parking: ${property.parking}`} />}
                            {property.lift && <Chip label={`Lift: ${property.lift}`} />}
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Room Configuration:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {property._1bhk_count && <Chip label={`1 BHK: ${property._1bhk_count}`} />}
                            {property._2bhk_count && <Chip label={`2 BHK: ${property._2bhk_count}`} />}
                            {property._3bhk_count && <Chip label={`3 BHK: ${property._3bhk_count}`} />}
                            {property._4bhk_count && <Chip label={`4 BHK: ${property._4bhk_count}`} />}
                            {property.bedrooms_count && <Chip label={`Bedrooms: ${property.bedrooms_count}`} />}
                            {property.bathrooms_count && <Chip label={`Bathrooms: ${property.bathrooms_count}`} />}
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', py: 2 }}>
                        {property.property_images?.length > 0 ? (
                            property.property_images.map((image) => (
                                <Avatar
                                    key={image.id}
                                    src={`${BASE_URL}${image.image}`}  // Prepend base URL to image path
                                    alt={`Property ${image.id}`}
                                    variant="rounded"
                                    sx={{ width: 150, height: 150 }}
                                />
                            ))
                        ) : (
                            <Typography>No images available</Typography>
                        )}
                    </Box>
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} color="primary" variant="contained">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ViewModal;