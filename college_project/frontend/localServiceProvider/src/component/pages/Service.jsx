import React from 'react';
import { Box, Container, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';

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
  {
    id: 3,
    name: "Reliable Pipes Co.",
    category: "Residential Plumbing",
    price: "$65/hr",
    rating: "4.9 (156 reviews)",
    description: "Affordable residential plumbing solutions. Kitchen and bathroom installations, pipe repairs, and water heater services.",
    distance: "2.1 miles away",
    status: "Active",
    tags: ["Budget Friendly", "Residential"],
  },
  {
    id: 4,
    name: "Metro Plumbing Solutions",
    category: "Commercial & Residential",
    price: "$90/hr",
    rating: "4.5 (203 reviews)",
    description: "Full-service plumbing company serving both residential and commercial clients. Advanced equipment and certified technicians.",
    distance: "3.2 miles away",
    status: "Inactive",
    tags: ["Commercial", "Service"],
  },
  {
    id: 5,
    name: "Drain Masters NYC",
    category: "Drain & Sewer Services",
    price: "$95/hr",
    rating: "4.7 (86 reviews)",
    description: "Specialists in drain cleaning, sewer line repairs, and hydro jetting. State-of-the-art equipment for tough blockages.",
    distance: "2.7 miles away",
    status: "Active",
    tags: ["Specialist", "Same day"],
  },
  {
    id: 6,
    name: "Family First Plumbing",
    category: "Family-Owned Business",
    price: "$70/hr",
    rating: "4.8 (142 reviews)",
    description: "Family owned plumbing business with 25+ years of experience. Personal service and competitive rates for all plumbing needs.",
    distance: "4.5 miles away",
    status: "Inactive",
    tags: ["Family owned", "25+ years"],
  },
];

const About = () => {
  return (
    <Box>
      {/* Header */}
      <Box component="header" className="bg-white py-4 shadow-md">
        <Container maxWidth="lg" className="flex justify-between items-center">
          <Typography variant="h5" className="font-bold text-blue-600">
            Local Service Find
          </Typography>
          <Box component="nav" className="flex space-x-4">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <Button key={item} href="#" className="text-gray-500 hover:text-blue-600 capitalize">
                {item}
              </Button>
            ))}
            <Button href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              List Your Business
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Box component="main" className="bg-blue-50 py-8">
        <Container maxWidth="lg" className="flex">
          {/* Sidebar Filters */}
          <Box component="aside" className="w-1/4 bg-white p-6 rounded shadow">
            <Typography variant="h6" className="font-medium text-gray-800 mb-4">
              Filters
            </Typography>
            <Box className="mb-4">
              <Typography className="block text-gray-600 font-medium">Location</Typography>
              <TextField
                placeholder="New York, NY"
                variant="outlined"
                fullWidth
                className="bg-gray-100"
                InputProps={{ className: "bg-gray-100 border-gray-300 p-2 rounded" }}
              />
            </Box>
            <Box className="mb-4">
              <Typography className="block text-gray-600 font-medium">Service Category</Typography>
              <TextField
                placeholder="Plumbing"
                variant="outlined"
                fullWidth
                className="bg-gray-100"
                InputProps={{ className: "bg-gray-100 border-gray-300 p-2 rounded" }}
              />
            </Box>
            <Box className="mb-4">
              <Typography className="block text-gray-600 font-medium">Rating</Typography>
              <FormControl fullWidth>
                <Select
                  defaultValue="Any Rating"
                  className="bg-gray-100 border-gray-300 p-2 rounded"
                >
                  <MenuItem value="Any Rating">Any Rating</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className="mb-4">
              <Typography className="block text-gray-600 font-medium">Price Range</Typography>
              <FormControl fullWidth>
                <Select
                  defaultValue="Any Price"
                  className="bg-gray-100 border-gray-300 p-2 rounded"
                >
                  <MenuItem value="Any Price">Any Price</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className="mb-4">
              <Typography className="block text-gray-600 font-medium">Availability</Typography>
              <FormControlLabel
                control={<Checkbox />}
                label={<Typography className="text-gray-600">Available Today</Typography>}
              />
              <FormControlLabel
                control={<Checkbox />}
                label={<Typography className="text-gray-600">Emergency Service</Typography>}
              />
              <FormControlLabel
                control={<Checkbox />}
                label={<Typography className="text-gray-600">Licensed & Insured</Typography>}
              />
            </Box>
            <Button fullWidth className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
              Clear All Filters
            </Button>
          </Box>

          {/* Service Listings */}
          <Box className="w-3/4 ml-6">
            <Box className="mb-4 flex justify-between items-center">
              <Typography>Showing 6 results for "plumbing" in New York, NY</Typography>
              <Box className="flex space-x-2">
                <Button className="bg-white border border-gray-300 px-4 py-2 rounded">Grid</Button>
                <Button className="bg-white border border-gray-300 px-4 py-2 rounded">List</Button>
                <FormControl>
                  <Select
                    defaultValue="Sort by Relevance"
                    className="bg-white border border-gray-300 p-2 rounded"
                  >
                    <MenuItem value="Sort by Relevance">Sort by Relevance</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Grid container spacing={2}>
              {serviceData.map((service) => (
                <Grid item xs={6} key={service.id}>
                  <Card className="bg-white rounded shadow">
                    <Box className="relative">
                      <CardMedia
                        component="img"
                        height="200"
                        image="https://placehold.co/600x400?text=Service+Image"
                        alt="Service Image"
                        className="rounded-t"
                      />
                      <Chip
                        label={service.status}
                        className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${
                          service.status === "Active" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
                        }`}
                      />
                    </Box>
                    <CardContent className="p-4">
                      <Typography className="font-medium text-gray-800">{service.price}</Typography>
                      <Typography variant="h6" className="font-bold text-gray-800">
                        {service.name}
                      </Typography>
                      <Typography className="text-sm text-gray-500">{service.category}</Typography>
                      <Box className="flex items-center my-2">
                        <Typography className="text-yellow-500 text-sm mr-2">
                          ★ {service.rating}
                        </Typography>
                      </Box>
                      <Typography className="text-gray-600 mb-4">{service.description}</Typography>
                      <Box className="flex text-gray-500 text-sm space-x-2 mb-4">
                        <Typography>{service.distance}</Typography>
                        {service.tags.map((tag, index) => (
                          <Typography key={index}>{tag}</Typography>
                        ))}
                      </Box>
                      <Box className="flex justify-between items-center">
                        <Button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                          View Details
                        </Button>
                        <Button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
                          Contact
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box className="flex justify-center space-x-2 mt-6">
              <Button className="bg-white border border-gray-300 px-4 py-2 rounded">Previous</Button>
              <Button className="bg-blue-600 text-white px-4 py-2 rounded">1</Button>
              <Button className="bg-white border border-gray-300 px-4 py-2 rounded">2</Button>
              <Button className="bg-white border border-gray-300 px-4 py-2 rounded">3</Button>
              <Button className="bg-white border border-gray-300 px-4 py-2 rounded">4</Button>
              <Button className="bg-white border border-gray-300 px-4 py-2 rounded">Next</Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" className="bg-gray-900 text-white py-12">
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={3}>
              <Typography variant="h6" className="font-bold mb-3">
                LocalFind
              </Typography>
              <Typography>Connecting you with trusted local service providers in your area.</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" className="font-bold mb-3">
                Services
              </Typography>
              {['Home Repair', 'Cleaning', 'Landscaping', 'Electrical'].map((item) => (
                <Typography key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </Typography>
              ))}
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" className="font-bold mb-3">
                Company
              </Typography>
              {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <Typography key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </Typography>
              ))}
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" className="font-bold mb-3">
                Connect
              </Typography>
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((item) => (
                <Typography key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </Typography>
              ))}
            </Grid>
          </Grid>
          <Box className="text-center mt-8">
            <Typography>© 2024 LocalFind. All rights reserved.</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;