import React from 'react';
import {
  Box, Container, Typography, Button, TextField, Select, MenuItem,
  FormControl, Checkbox, FormControlLabel, Grid, Card, CardContent,
  CardMedia, Chip, CssBaseline, ThemeProvider
} from "@mui/material";
import theme from "../../theme";

const serviceData = [
  {
    id: 1,
    name: "Elite Plumbing Services",
    category: "Plumbing & Repairs",
    price: "$75/hr",
    rating: "4.8 (127 reviews)",
    description: "Professional plumbing services including emergency repairs, installations, and maintenance. Licensed and insured with 15+ years experience.",
    distance: "2.3 miles away",
    status: "Active",
    tags: ["Available today", "Licensed"],
  },
  {
    id: 2,
    name: "QuickFix Plumbing",
    category: "Emergency Plumbing",
    price: "$85/hr",
    rating: "4.9 (247 reviews)",
    description: "24/7 emergency plumbing services. Specializing in repairs, leak detection, and drain cleaning. Fast and reliable.",
    distance: "1.8 miles away",
    status: "Inactive",
    tags: ["24/7 service", "Emergency"],
  },
];

const Service = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        {/* Main Content */}
        <Box component="main" className="bg-blue-50 py-8" marginTop='50px'>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {/* Sidebar Filters */}
              <Grid size={{xs:12,md:3,lg:3}}>
                <Card sx={{ p: 3,}}>
                  <Box className="bg-white p-6 rounded shadow" height="100%" sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
                  <Typography variant="h6" className="font-medium text-gray-800 mb-4">
                    Filters
                  </Typography>
                  <Box className="mb-4">
                    <Typography className="block text-gray-600 font-medium">Location</Typography>
                    <TextField placeholder="New York, NY" variant="outlined" size='small' fullWidth/>
                  </Box>
                  <Box className="mb-4">
                    <Typography className="block text-gray-600 font-medium"  sx={{marginBottom:'5px'}}>Service Category</Typography>
                    <TextField placeholder="Plumbing" variant="outlined" size='small' fullWidth/>
                  </Box>
                  <Box className="mb-4">
                    <Typography className="block text-gray-600 font-medium"  sx={{marginBottom:'5px'}}>Rating</Typography>
                    <FormControl size='small' fullWidth>
                      <Select defaultValue="Any Rating">
                        <MenuItem value="Any Rating">Any Rating</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box className="mb-4">
                    <Typography className="block text-gray-600 font-medium" sx={{marginBottom:'5px'}}>Price Range</Typography>
                    <FormControl fullWidth size='small' >
                      <Select defaultValue="Any Price">
                        <MenuItem value="Any Price">Any Price</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box className="mb-4">
                    <Typography className="block text-gray-600 font-medium">Availability</Typography>
                    <FormControlLabel control={<Checkbox />} label="Available Today" />
                    <FormControlLabel control={<Checkbox />} label="Emergency Service" />
                    <FormControlLabel control={<Checkbox />} label="Licensed & Insured" />
                  </Box>
                  <Button fullWidth variant="outlined">Clear All Filters</Button>
                </Box>
              </Card>
              </Grid>
              {/* Service Listings */}
              <Grid size={{xs:12,md:9,lg:9}}>
                <Box className="mb-4 flex justify-between items-center">
                  <Typography>Showing {serviceData.length} results for "plumbing" in New York, NY</Typography>
                </Box>
                <Grid container spacing={2}>
                  {serviceData.map((service) => (
                    <Grid item xs={12} md={4}  key={service.id}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="200"
                          image="https://placehold.co/600x400?text=Service+Image"
                          alt="Service Image"
                          width="100px"
                        />
                        <Chip
                          label={service.status}
                          sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            bgcolor: service.status === "Active" ? "green.200" : "red.200",
                          }}
                        />
                        <CardContent>
                          <Typography variant="subtitle2">{service.price}</Typography>
                          <Typography variant="h6" fontWeight="bold">{service.name}</Typography>
                          <Typography variant="body2" color="text.secondary">{service.category}</Typography>
                          <Typography variant="body2" sx={{ color: "orange" }}>★ {service.rating}</Typography>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            {service.description}
                          </Typography>
                          <Typography variant="caption">{service.distance}</Typography>
                          <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                            {service.tags.map((tag, i) => (
                              <Chip key={i} label={tag} size="small" />
                            ))}
                          </Box>
                          <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                            <Button variant="contained">View Details</Button>
                            <Button variant="outlined">Contact</Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Footer */}
        <Box component="footer" className="bg-gray-900 text-white py-12 mt-8">
          <Container maxWidth="lg">
            <Typography align="center">© 2024 LocalFind. All rights reserved.</Typography>
          </Container>
        </Box>
    </ThemeProvider>
  );
};

export default Service;
