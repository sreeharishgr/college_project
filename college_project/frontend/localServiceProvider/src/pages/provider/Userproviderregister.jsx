import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";

const serviceCategories = [
  "Home Repair",
  "Cleaning",
  "Landscaping",
  "Electrical",
];

function ProviderPortalForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    retypePassword: "",
    serviceCategory: "",
    experience: "",
    qualification: "",
    rate: "",
    description: "",
    aadhar: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and API integration here
    alert("Submitted");
  };

  return (
    <Container maxWidth="sm" sx={{ my: 6 }}>
      <Paper sx={{ p: { xs: 2, md: 4 }, borderRadius: 3 }}>
        <Box mb={2} textAlign="center">
          <Typography variant="h5" mb={1}>
            Provider Portal
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Join our service provider network
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email address"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Location"
                name="location"
                value={form.location}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
                type="password"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Retype Password"
                name="retypePassword"
                value={form.retypePassword}
                onChange={handleChange}
                type="password"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Service Category</InputLabel>
                <Select
                  name="serviceCategory"
                  value={form.serviceCategory}
                  onChange={handleChange}
                  label="Service Category"
                >
                  {serviceCategories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Experience (Years)"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Qualification"
                name="qualification"
                value={form.qualification}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Rate (R/hr)"
                name="rate"
                value={form.rate}
                onChange={handleChange}
                type="number"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                value={form.description}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "2px dashed #8884ff88",
                  borderRadius: 2,
                }}
              >
                <Typography mb={1} fontSize={14}>
                  Please upload your Aadhar
                </Typography>
                <Button variant="outlined" component="label">
                  Browse file
                  <input
                    type="file"
                    name="aadhar"
                    accept=".pdf,.jpg,.png"
                    hidden
                    onChange={handleChange}
                  />
                </Button>
                {form.aadhar && (
                  <Typography mt={1} fontSize={12}>
                    Selected: {form.aadhar.name}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2, bgcolor: "#244afc" }}
              >
                Register as Provider
              </Button>
            </Grid>
          </Grid>
        </form>
        <Box textAlign="center" mt={2}>
          <Typography variant="body2">
            Already have an account? <a href="/login">Login</a>
          </Typography>
          <Button href="/" sx={{ textTransform: "none", mt: 1 }}>&lt; Back to home</Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default ProviderPortalForm;
