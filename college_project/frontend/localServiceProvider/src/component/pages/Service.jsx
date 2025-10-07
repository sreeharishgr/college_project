// import React from 'react';
// import {
//   Box, Container, Typography, Button, TextField, Select, MenuItem,
//   FormControl, Checkbox, FormControlLabel, Grid, Card, CardContent,
//   CardMedia, Chip, CssBaseline, ThemeProvider
// } from "@mui/material";
// import theme from "../../theme";

// const serviceData = [
//   {
//     id: 1,
//     name: "Elite Plumbing Services",
//     category: "Plumbing & Repairs",
//     price: "$75/hr",
//     rating: "4.8 (127 reviews)",
//     description: "Professional plumbing services including emergency repairs, installations, and maintenance. Licensed and insured with 15+ years experience.",
//     distance: "2.3 miles away",
//     status: "Active",
//     tags: ["Available today", "Licensed"],
//   },
//   {
//     id: 2,
//     name: "QuickFix Plumbing",
//     category: "Emergency Plumbing",
//     price: "$85/hr",
//     rating: "4.9 (247 reviews)",
//     description: "24/7 emergency plumbing services. Specializing in repairs, leak detection, and drain cleaning. Fast and reliable.",
//     distance: "1.8 miles away",
//     status: "Inactive",
//     tags: ["24/7 service", "Emergency"],
//   },
// ];

// const Service = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//         {/* Main Content */}
//         <Box component="main" className="bg-blue-50 py-8" marginTop='50px'>
//           <Container maxWidth="lg">
//             <Grid container spacing={3}>
//               {/* Sidebar Filters */}
//               <Grid size={{xs:12,md:3,lg:3}}>
//                 <Card sx={{ p: 3,}}>
//                   <Box className="bg-white p-6 rounded shadow" height="100%" sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
//                   <Typography variant="h6" className="font-medium text-gray-800 mb-4">
//                     Filters
//                   </Typography>
//                   <Box className="mb-4">
//                     <Typography className="block text-gray-600 font-medium">Location</Typography>
//                     <TextField placeholder="New York, NY" variant="outlined" size='small' fullWidth/>
//                   </Box>
//                   <Box className="mb-4">
//                     <Typography className="block text-gray-600 font-medium"  sx={{marginBottom:'5px'}}>Service Category</Typography>
//                     <TextField placeholder="Plumbing" variant="outlined" size='small' fullWidth/>
//                   </Box>
//                   <Box className="mb-4">
//                     <Typography className="block text-gray-600 font-medium"  sx={{marginBottom:'5px'}}>Rating</Typography>
//                     <FormControl size='small' fullWidth>
//                       <Select defaultValue="Any Rating">
//                         <MenuItem value="Any Rating">Any Rating</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Box>
//                   <Box className="mb-4">
//                     <Typography className="block text-gray-600 font-medium" sx={{marginBottom:'5px'}}>Price Range</Typography>
//                     <FormControl fullWidth size='small' >
//                       <Select defaultValue="Any Price">
//                         <MenuItem value="Any Price">Any Price</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Box>
//                   <Box className="mb-4">
//                     <Typography className="block text-gray-600 font-medium">Availability</Typography>
//                     <FormControlLabel control={<Checkbox />} label="Available Today" />
//                     <FormControlLabel control={<Checkbox />} label="Emergency Service" />
//                     <FormControlLabel control={<Checkbox />} label="Licensed & Insured" />
//                   </Box>
//                   <Button fullWidth variant="outlined">Clear All Filters</Button>
//                 </Box>
//               </Card>
//               </Grid>
//               {/* Service Listings */}
//               <Grid size={{xs:12,md:9,lg:9}}>
//                 <Box className="mb-4 flex justify-between items-center">
//                   <Typography>Showing {serviceData.length} results for "plumbing" in New York, NY</Typography>
//                 </Box>
//                 <Grid container spacing={2}>
//                   {serviceData.map((service) => (
//                     <Grid item xs={12} md={4}  key={service.id}>
//                       <Card>
//                         <CardMedia
//                           component="img"
//                           height="200"
//                           image="https://placehold.co/600x400?text=Service+Image"
//                           alt="Service Image"
//                           width="100px"
//                         />
//                         <Chip
//                           label={service.status}
//                           sx={{
//                             position: "absolute",
//                             top: 10,
//                             right: 10,
//                             bgcolor: service.status === "Active" ? "green.200" : "red.200",
//                           }}
//                         />
//                         <CardContent>
//                           <Typography variant="subtitle2">{service.price}</Typography>
//                           <Typography variant="h6" fontWeight="bold">{service.name}</Typography>
//                           <Typography variant="body2" color="text.secondary">{service.category}</Typography>
//                           <Typography variant="body2" sx={{ color: "orange" }}>★ {service.rating}</Typography>
//                           <Typography variant="body2" color="text.secondary" gutterBottom>
//                             {service.description}
//                           </Typography>
//                           <Typography variant="caption">{service.distance}</Typography>
//                           <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
//                             {service.tags.map((tag, i) => (
//                               <Chip key={i} label={tag} size="small" />
//                             ))}
//                           </Box>
//                           <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
//                             <Button variant="contained">View Details</Button>
//                             <Button variant="outlined">Contact</Button>
//                           </Box>
//                         </CardContent>
//                       </Card>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>

//         {/* Footer */}
//         <Box component="footer" className="bg-gray-900 text-white py-12 mt-8">
//           <Container maxWidth="lg">
//             <Typography align="center">© 2024 LocalFind. All rights reserved.</Typography>
//           </Container>
//         </Box>
//     </ThemeProvider>
//   );
// };

// export default Service;



// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   Checkbox,
//   FormControlLabel,
//   AppBar,
//   Toolbar,
//   Chip,
//   Rating,
//   Pagination,
// } from '@mui/material';
// import {
//   LocationOn,
//   AccessTime,
//   Verified,
//   AttachMoney,
//   Business,
//   Home as HomeIcon,
//   Schedule,
//   People,
//   LocalOffer,
// } from '@mui/icons-material';

// const ServiceCard = ({ service }) => {
//   return (
//     <Card
//       sx={{
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         borderRadius: 2,
//         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//       }}
//     >
//       {/* Image Section */}
//       <Box
//         sx={{
//           height: 160,
//           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           position: 'relative',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Box sx={{ fontSize: 48 }}>{service.icon}</Box>
//         <Chip
//           label={service.status}
//           size="small"
//           sx={{
//             position: 'absolute',
//             top: 12,
//             right: 12,
//             bgcolor: '#fff',
//             fontWeight: 600,
//             fontSize: 11,
//           }}
//         />
//       </Box>

//       <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
//         {/* Header */}
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'flex-start',
//             mb: 1,
//           }}
//         >
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 700,
//               fontSize: 18,
//               color: '#1a1a1a',
//             }}
//           >
//             {service.name}
//           </Typography>
//           <Typography
//             sx={{
//               color: '#10b981',
//               fontWeight: 700,
//               fontSize: 16,
//             }}
//           >
//             {service.price}
//           </Typography>
//         </Box>

//         {/* Category */}
//         <Typography
//           sx={{
//             color: '#9ca3af',
//             fontSize: 13,
//             mb: 1.5,
//           }}
//         >
//           {service.category}
//         </Typography>

//         {/* Rating */}
//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
//           <Rating
//             value={service.rating}
//             precision={0.1}
//             readOnly
//             size="small"
//             sx={{ mr: 1 }}
//           />
//           <Typography sx={{ fontSize: 13, color: '#666' }}>
//             {service.rating} ({service.reviewCount} reviews)
//           </Typography>
//         </Box>

//         {/* Description */}
//         <Typography
//           sx={{
//             fontSize: 13,
//             color: '#666',
//             lineHeight: 1.6,
//             mb: 2,
//           }}
//         >
//           {service.description}
//         </Typography>

//         {/* Tags/Attributes */}
//         <Box
//           sx={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             gap: 1.5,
//             mb: 2,
//           }}
//         >
//           {service.tags.map((tag, index) => (
//             <Box
//               key={index}
//               sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
//             >
//               {tag.icon}
//               <Typography sx={{ fontSize: 12, color: '#666' }}>
//                 {tag.text}
//               </Typography>
//             </Box>
//           ))}
//         </Box>

//         {/* Action Buttons */}
//         <Box sx={{ display: 'flex', gap: 1 }}>
//           <Button
//             variant="contained"
//             fullWidth
//             sx={{
//               bgcolor: '#4f46e5',
//               textTransform: 'none',
//               fontWeight: 600,
//               py: 1,
//               '&:hover': { bgcolor: '#4338ca' },
//             }}
//           >
//             View Details
//           </Button>
//           <Button
//             variant="outlined"
//             sx={{
//               textTransform: 'none',
//               fontWeight: 600,
//               borderColor: '#4f46e5',
//               color: '#4f46e5',
//               py: 1,
//               px: 3,
//               '&:hover': { borderColor: '#4338ca' },
//             }}
//           >
//             Contact
//           </Button>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// const ServiceListingPage = () => {
//   const [serviceCategory, setServiceCategory] = useState('Plumbing');
//   const [rating, setRating] = useState('Any Rating');
//   const [priceRange, setPriceRange] = useState('Any Price');
//   const [activeStatus, setActiveStatus] = useState(false);
//   const [inactiveStatus, setInactiveStatus] = useState(false);

//   const services = [
//     {
//       name: 'Elite Plumbing Services',
//       price: '$75/hr',
//       category: 'Name',
//       rating: 4.8,
//       reviewCount: 127,
//       description:
//         'Professional plumbing services including emergency repairs, installations, and maintenance. Licensed and insured with 15+ years experience.',
//       status: 'Active',
//       icon: '🔧',
//       tags: [
//         {
//           icon: <LocationOn sx={{ fontSize: 14, color: '#666' }} />,
//           text: 'Nagercoil',
//         },
//         {
//           icon: <AccessTime sx={{ fontSize: 14, color: '#666' }} />,
//           text: '12 yrs exp',
//         },
//         {
//           icon: <Verified sx={{ fontSize: 14, color: '#666' }} />,
//           text: 'Verified',
//         },
//       ],
//     },
//     {
//       name: 'QuickFix Plumbing',
//       price: '$85/hr',
//       category: 'Emergency Plumbing',
//       rating: 4.6,
//       reviewCount: 94,
//       description:
//         '24/7 emergency plumbing services. Specializing in urgent repairs, leak detection, and drain cleaning. Fast response guaranteed.',
//       status: 'Active',
//       icon: '🚰',
//       tags: [
//         {
//           icon: <LocationOn sx={{ fontSize: 14, color: '#666' }} />,
//           text: '1.8 miles away',
//         },
//         {
//           icon: <Schedule sx={{ fontSize: 14, color: '#666' }} />,
//           text: '24/7 service',
//         },
//         {
//           icon: <LocalOffer sx={{ fontSize: 14, color: '#666' }} />,
//           text: 'Emergency',
//         },
//       ],
//     },
//     {
//       name: 'Reliable Pipes Co.',
//       price: '$65/hr',
//       category: 'Residential Plumbing',
//       rating: 4.9,
//       reviewCount: 156,
//       description:
//         'Affordable residential plumbing solutions. Kitchen and bathroom installations, pipe repairs, and water heater services.',
//       status: 'Active',
//       icon: '🔩',
//       tags: [
//         {
//           icon: <LocationOn sx={{ fontSize: 14, color: '#666' }} />,
//           text: '3.1 miles away',
//         },
//         {
//           icon: <AttachMoney sx={{ fontSize: 14, color: '#666' }} />,
//           text: 'Budget-friendly',
//         },
//         {
//           icon: <HomeIcon sx={{ fontSize: 14, color: '#666' }} />,
//           text: 'Residential',
//         },
//       ],
//     },
//     {
//       name: 'Metro Plumbing Solutions',
//       price: '$90/hr',
//       category: 'Commercial & Residential',
//       rating: 4.5,
//       reviewCount: 203,
//       description:
//         'Full-service plumbing company serving both residential and commercial clients. Advanced equipment and certified technicians.',
//       status: 'Inactive',
//       icon: '🏢',
//       tags: [
//         {
//           icon: <LocationOn sx={{ fontSize: 14, color: '#666' }} />,
//           text: '4.2 miles away',
//         },
//         {
//           icon: <Business sx={{ fontSize: 14, color: '#666' }} />,
//           text: 'Commercial',
//         },
//         {
//           icon: <Verified sx={{ fontSize: 14, color: '#666' }} />,
//           text: 'Full-service',
//         },
//       ],
//     },
//     {
//       name: 'Drain Masters NYC',
//       price: '$95/hr',
//       category: 'Drain & Sewer Services',
//       rating: 4.7,
//       reviewCount: 88,
//       description:
//         'Specialists in drain cleaning, sewer line repairs, and hydro jetting. State-of-the-art equipment for tough blockages.',
//       status: 'Active',
//       icon: '🚿',
//       tags: [
//         {
//           icon: <LocationOn sx={{ fontSize: 14, color: '#666' }} />,
//           text: '2.7 miles away',
//         },
//         {
//           icon: <LocalOffer sx={{ fontSize: 14, color: '#666' }} />,
//           text: 'Specialist',
//         },
//         {
//           icon: <Schedule sx={{ fontSize: 14, color: '#666' }} />,
//           text: 'Same day',
//         },
//       ],
//     },
//     {
//       name: 'Family First Plumbing',
//       price: '$70/hr',
//       category: 'Family-Owned Business',
//       rating: 4.8,
//       reviewCount: 142,
//       description:
//         'Family-owned plumbing business with 25+ years of experience. Personal service and competitive rates for all plumbing needs.',
//       status: 'Inactive',
//       icon: '👨‍👩‍👧',
//       tags: [
//         {
//           icon: <LocationOn sx={{ fontSize: 14, color: '#666' }} />,
//           text: '3.5 miles away',
//         },
//         {
//           icon: <People sx={{ fontSize: 14, color: '#666' }} />,
//           text: 'Family owned',
//         },
//         {
//           icon: <AccessTime sx={{ fontSize: 14, color: '#666' }} />,
//           text: '25+ years',
//         },
//       ],
//     },
//   ];

//   return (
//     <Box sx={{ bgcolor: '#f3f4f6', minHeight: '100vh' }}>
//       {/* Header */}
//       <AppBar
//         position="static"
//         elevation={0}
//         sx={{ bgcolor: '#fff', borderBottom: '1px solid #e5e7eb' }}
//       >
//         <Toolbar>
//           <Typography
//             variant="h6"
//             sx={{ flexGrow: 1, color: '#6366f1', fontWeight: 700 }}
//           >
//             Local Service Find
//           </Typography>
//           <Box sx={{ display: 'flex', gap: 3 }}>
//             <Typography sx={{ color: '#666', cursor: 'pointer' }}>
//               Home
//             </Typography>
//             <Typography sx={{ color: '#666', cursor: 'pointer' }}>
//               Services
//             </Typography>
//             <Typography sx={{ color: '#666', cursor: 'pointer' }}>
//               About
//             </Typography>
//             <Typography sx={{ color: '#666', cursor: 'pointer' }}>
//               Contact
//             </Typography>
//           </Box>
//           <Button
//             variant="contained"
//             sx={{
//               ml: 3,
//               bgcolor: '#6366f1',
//               textTransform: 'none',
//               px: 3,
//               '&:hover': { bgcolor: '#4f46e5' },
//             }}
//           >
//             List Your Business
//           </Button>
//         </Toolbar>
//       </AppBar>

//       <Container maxWidth="xl" sx={{ py: 4 }}>
//         <Grid container spacing={3}>
//           {/* Filters Sidebar */}
//           <Grid item xs={12} md={3}>
//             <Card sx={{ p: 3, borderRadius: 2 }}>
//               <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
//                 Filters
//               </Typography>

//               {/* Service Category */}
//               <Typography sx={{ mb: 1, fontWeight: 600, fontSize: 14 }}>
//                 Service Category
//               </Typography>
//               <FormControl fullWidth size="small" sx={{ mb: 3 }}>
//                 <Select
//                   value={serviceCategory}
//                   onChange={(e) => setServiceCategory(e.target.value)}
//                 >
//                   <MenuItem value="Plumbing">Plumbing</MenuItem>
//                   <MenuItem value="Electrical">Electrical</MenuItem>
//                   <MenuItem value="Cleaning">Cleaning</MenuItem>
//                 </Select>
//               </FormControl>

//               {/* Rating */}
//               <Typography sx={{ mb: 1, fontWeight: 600, fontSize: 14 }}>
//                 Rating
//               </Typography>
//               <FormControl fullWidth size="small" sx={{ mb: 3 }}>
//                 <Select value={rating} onChange={(e) => setRating(e.target.value)}>
//                   <MenuItem value="Any Rating">Any Rating</MenuItem>
//                   <MenuItem value="4+">4+ Stars</MenuItem>
//                   <MenuItem value="3+">3+ Stars</MenuItem>
//                 </Select>
//               </FormControl>

//               {/* Price Range */}
//               <Typography sx={{ mb: 1, fontWeight: 600, fontSize: 14 }}>
//                 Price Range
//               </Typography>
//               <FormControl fullWidth size="small" sx={{ mb: 3 }}>
//                 <Select
//                   value={priceRange}
//                   onChange={(e) => setPriceRange(e.target.value)}
//                 >
//                   <MenuItem value="Any Price">Any Price</MenuItem>
//                   <MenuItem value="$-$$">$ - $$</MenuItem>
//                   <MenuItem value="$$-$$$">$$ - $$$</MenuItem>
//                 </Select>
//               </FormControl>

//               {/* Status */}
//               <Typography sx={{ mb: 1, fontWeight: 600, fontSize: 14 }}>
//                 Status
//               </Typography>
//               <Box sx={{ mb: 3 }}>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       checked={activeStatus}
//                       onChange={(e) => setActiveStatus(e.target.checked)}
//                       size="small"
//                     />
//                   }
//                   label={
//                     <Typography sx={{ fontSize: 14 }}>Active</Typography>
//                   }
//                 />
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       checked={inactiveStatus}
//                       onChange={(e) => setInactiveStatus(e.target.checked)}
//                       size="small"
//                     />
//                   }
//                   label={
//                     <Typography sx={{ fontSize: 14 }}>Inactive</Typography>
//                   }
//                 />
//               </Box>

//               <Button
//                 fullWidth
//                 variant="outlined"
//                 sx={{
//                   textTransform: 'none',
//                   color: '#666',
//                   borderColor: '#d1d5db',
//                 }}
//               >
//                 Clear All Filters
//               </Button>
//             </Card>
//           </Grid>

//           {/* Service Listings */}
//           <Grid item xs={12} md={9}>
//             <Typography sx={{ mb: 3, fontSize: 14, color: '#666' }}>
//               Showing 6 results for "plumbing" in Nagercoil
//             </Typography>

//             <Grid container spacing={3}>
//               {services.map((service, index) => (
//                 <Grid item xs={12} md={6} key={index}>
//                   <ServiceCard service={service} />
//                 </Grid>
//               ))}
//             </Grid>

//             {/* Pagination */}
//             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//               <Pagination
//                 count={4}
//                 defaultPage={1}
//                 siblingCount={1}
//                 variant="outlined"
//                 shape="rounded"
//                 sx={{
//                   '& .MuiPaginationItem-root.Mui-selected': {
//                     bgcolor: '#4f46e5',
//                     color: '#fff',
//                   },
//                 }}
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Footer */}
//       <Box
//         sx={{
//           bgcolor: '#1f2937',
//           color: '#9ca3af',
//           py: 6,
//           mt: 6,
//         }}
//       >
//         <Container maxWidth="xl">
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={3}>
//               <Typography
//                 variant="h6"
//                 sx={{ color: '#fff', fontWeight: 700, mb: 2 }}
//               >
//                 LocalFind
//               </Typography>
//               <Typography sx={{ fontSize: 14 }}>
//                 Connecting you with trusted local service providers in your area.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={3}>
//               <Typography
//                 sx={{ color: '#fff', fontWeight: 600, mb: 2, fontSize: 15 }}
//               >
//                 Services
//               </Typography>
//               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                 <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
//                   Home Repair
//                 </Typography>
//                 <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
//                   Cleaning
//                 </Typography>
//                 <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
//                   Landscaping
//                 </Typography>
//                 <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
//                   Electrical
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={3}>
//               <Typography
//                 sx={{ color: '#fff', fontWeight: 600, mb: 2, fontSize: 15 }}
//               >
//                 Company
//               </Typography>
//               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                 <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
//                   About Us
//                 </Typography>
//                 <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
//                   Contact
//                 </Typography>
//                 <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
//                   Privacy Policy
//                 </Typography>
//                 <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
//                   Terms of Service
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={3}>
//               <Typography
//                 sx={{ color: '#fff', fontWeight: 600, mb: 2, fontSize: 15 }}
//               >
//                 Connect
//               </Typography>
//               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                 <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
//                   Facebook
//                 </Typography>
//                 <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
//                   Twitter
//                 </Typography>
//                 <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
//                   Instagram
//                 </Typography>
//                 <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
//                   LinkedIn
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//           <Box sx={{ textAlign: 'center', mt: 4, pt: 4, borderTop: '1px solid #374151' }}>
//             <Typography sx={{ fontSize: 13 }}>
//               © 2024 LocalFind. All rights reserved.
//             </Typography>
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default ServiceListingPage;




import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  FormControlLabel,
  AppBar,
  Toolbar,
  Chip,
  Rating,
  Pagination,
  Grid
} from '@mui/material';
import {
  LocationOn,
  AccessTime,
  Verified,
  AttachMoney,
  Business,
  Home as HomeIcon,
  Schedule,
  People,
  LocalOffer,
} from '@mui/icons-material';

const ServiceCard = ({ service }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width:'400px',
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          height: 160,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ fontSize: 48 }}>{service.icon}</Box>
        <Chip
          label={service.status}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            bgcolor: '#fff',
            fontWeight: 600,
            fontSize: 11,
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: 18,
              color: '#1a1a1a',
            }}
          >
            {service.name}
          </Typography>
          <Typography
            sx={{
              color: '#10b981',
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            {service.price}
          </Typography>
        </Box>

        {/* Category */}
        <Typography
          sx={{
            color: '#9ca3af',
            fontSize: 13,
            mb: 1.5,
          }}
        >
          {service.category}
        </Typography>

        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
          <Rating
            value={service.rating}
            precision={0.1}
            readOnly
            size="small"
            sx={{ mr: 1 }}
          />
          <Typography sx={{ fontSize: 13, color: '#666' }}>
            {service.rating} ({service.reviewCount} reviews)
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          sx={{
            fontSize: 13,
            color: '#666',
            lineHeight: 1.6,
            mb: 2,
          }}
        >
          {service.description}
        </Typography>

        {/* Tags/Attributes */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
            mb: 2,
          }}
        >
          {service.tags.map((tag, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              {tag.icon}
              <Typography sx={{ fontSize: 12, color: '#666' }}>
                {tag.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: '#4f46e5',
              textTransform: 'none',
              fontWeight: 600,
              py: 1,
              '&:hover': { bgcolor: '#4338ca' },
            }}
          >
            View Details
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              borderColor: '#4f46e5',
              color: '#4f46e5',
              py: 1,
              px: 3,
              '&:hover': { borderColor: '#4338ca' },
            }}
          >
            Contact
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const ServiceListingPage = () => {
  const [serviceCategory, setServiceCategory] = useState('Plumbing');
  const [rating, setRating] = useState('Any Rating');
  const [priceRange, setPriceRange] = useState('Any Price');
  const [activeStatus, setActiveStatus] = useState(false);
  const [inactiveStatus, setInactiveStatus] = useState(false);

  const services = [
    {
      name: 'Elite Plumbing Services',
      price: '$75/hr',
      category: 'Name',
      rating: 4.8,
      reviewCount: 127,
      description:
        'Professional plumbing services including emergency repairs, installations, and maintenance. Licensed and insured with 15+ years experience.',
      status: 'Active',
      icon: '🔧',
      tags: [
        {
          icon: <LocationOn sx={{ fontSize: 14, color: '#666' }} />,
          text: 'Nagercoil',
        },
        {
          icon: <AccessTime sx={{ fontSize: 14, color: '#666' }} />,
          text: '12 yrs exp',
        },
        {
          icon: <Verified sx={{ fontSize: 14, color: '#666' }} />,
          text: 'Verified',
        },
      ],
    },
    {
      name: 'QuickFix Plumbing',
      price: '$85/hr',
      category: 'Emergency Plumbing',
      rating: 4.6,
      reviewCount: 94,
      description:
        '24/7 emergency plumbing services. Specializing in urgent repairs, leak detection, and drain cleaning. Fast response guaranteed.',
      status: 'Active',
      icon: '🚰',
      tags: [
        {
          icon: <LocationOn sx={{ fontSize: 14, color: '#666' }} />,
 text: 'Nagercoil',        },
        {
          icon: <Schedule sx={{ fontSize: 14, color: '#666' }} />,
                   text: '8 yrs exp',

        },
        {
          icon: <LocalOffer sx={{ fontSize: 14, color: '#666' }} />,
           text: 'Verified',
        },
      ],
    },
    {
      name: 'Reliable Pipes Co.',
      price: '$65/hr',
      category: 'Residential Plumbing',
      rating: 4.9,
      reviewCount: 156,
      description:
        'Affordable residential plumbing solutions. Kitchen and bathroom installations, pipe repairs, and water heater services.',
      status: 'Active',
      icon: '🔩',
      tags: [
        {
          icon: <LocationOn sx={{ fontSize: 14, color: '#666' }} />,
          text: 'Nagercoil',
        },
        {
          icon: <AttachMoney sx={{ fontSize: 14, color: '#666' }} />,
          text: '10 years exp',
        },
        {
          icon: <HomeIcon sx={{ fontSize: 14, color: '#666' }} />,
           text: 'Verified',
        },
      ],
    },
    {
      name: 'Metro Plumbing Solutions',
      price: '$90/hr',
      category: 'Commercial & Residential',
      rating: 4.5,
      reviewCount: 203,
      description:
        'Full-service plumbing company serving both residential and commercial clients. Advanced equipment and certified technicians.',
      status: 'Inactive',
      icon: '🏢',
      tags: [
        {
          icon: <LocationOn sx={{ fontSize: 14, color: '#666' }} />,
          text: 'Nagercoil',
        },
        {
          icon: <Business sx={{ fontSize: 14, color: '#666' }} />,
          text: '15 yrs exp',
        },
        {
          icon: <Verified sx={{ fontSize: 14, color: '#666' }} />,
          text: 'Verified',
        },
      ],
    },
    {
      name: 'Drain Masters NYC',
      price: '$95/hr',
      category: 'Drain & Sewer Services',
      rating: 4.7,
      reviewCount: 88,
      description:
        'Specialists in drain cleaning, sewer line repairs, and hydro jetting. State-of-the-art equipment for tough blockages.',
      status: 'Active',
      icon: '🚿',
      tags: [
        {
          icon: <LocationOn sx={{ fontSize: 14, color: '#666' }} />,
          text: 'Nagercoil',
        },
        {
          icon: <LocalOffer sx={{ fontSize: 14, color: '#666' }} />,
          text: '12 yrs exp',
        },
        {
          icon: <Schedule sx={{ fontSize: 14, color: '#666' }} />,
          text: 'Verified',
        },
      ],
    },
    {
      name: 'Family First Plumbing',
      price: '$70/hr',
      category: 'Family-Owned Business',
      rating: 4.8,
      reviewCount: 142,
      description:
        'Family-owned plumbing business with 25+ years of experience. Personal service and competitive rates for all plumbing needs.',
      status: 'Inactive',
      icon: '👨‍👩‍👧',
      tags: [
        {
          icon: <LocationOn sx={{ fontSize: 14, color: '#666' }} />,
          text: '3.5 miles away',
        },
        {
          icon: <People sx={{ fontSize: 14, color: '#666' }} />,
          text: 'Family owned',
        },
        {
          icon: <AccessTime sx={{ fontSize: 14, color: '#666' }} />,
          text: '25+ years',
        },
      ],
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f3f4f6', minHeight: '100vh' }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {/* Filters Sidebar */}
          <Grid size={{xs:3 ,md:3, lg:2.5}}>
            <Card sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
                Filters
              </Typography>

              {/* Service Category */}
              <Typography sx={{ mb: 1, fontWeight: 600, fontSize: 14 }}>
                Service Category
              </Typography>
              <FormControl fullWidth size="small" sx={{ mb: 3 }}>
                <Select
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                >
                  <MenuItem value="Plumbing">Plumbing</MenuItem>
                  <MenuItem value="Electrical">Electrical</MenuItem>
                  <MenuItem value="Cleaning">Cleaning</MenuItem>
                </Select>
              </FormControl>

              {/* Rating */}
              <Typography sx={{ mb: 1, fontWeight: 600, fontSize: 14 }}>
                Rating
              </Typography>
              <FormControl fullWidth size="small" sx={{ mb: 3 }}>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                  <MenuItem value="Any Rating">Any Rating</MenuItem>
                  <MenuItem value="4+">4+ Stars</MenuItem>
                  <MenuItem value="3+">3+ Stars</MenuItem>
                </Select>
              </FormControl>

              {/* Price Range */}
              <Typography sx={{ mb: 1, fontWeight: 600, fontSize: 14 }}>
                Price Range
              </Typography>
              <FormControl fullWidth size="small" sx={{ mb: 3 }}>
                <Select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <MenuItem value="Any Price">Any Price</MenuItem>
                  <MenuItem value="$-$$">$ - $$</MenuItem>
                  <MenuItem value="$$-$$$">$$ - $$$</MenuItem>
                </Select>
              </FormControl>

              {/* Status */}
              <Typography sx={{ mb: 1, fontWeight: 600, fontSize: 14 }}>
                Status
              </Typography>
              <Box sx={{ mb: 3 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={activeStatus}
                      onChange={(e) => setActiveStatus(e.target.checked)}
                      size="small"
                    />
                  }
                  label={<Typography sx={{ fontSize: 14 }}>Active</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={inactiveStatus}
                      onChange={(e) => setInactiveStatus(e.target.checked)}
                      size="small"
                    />
                  }
                  label={<Typography sx={{ fontSize: 14 }}>Inactive</Typography>}
                />
              </Box>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  textTransform: 'none',
                  color: '#666',
                  borderColor: '#d1d5db',
                }}
              >
                Clear All Filters
              </Button>
            </Card>
          </Grid>
          {/* Service Listings */}
            <Grid sx={{backgroundColor:'white', borderRadius:2, padding:3, boxShadow: '0 2px 8px rgba(0,0,0,0.1)',margin:'0 auto'}} size={{xs:9 ,md:9, lg:7.5}}>
            <Typography sx={{ mb: 3, fontSize: 14, color: '#666' }}>
              Showing 6 results for "plumbing" in Nagercoil
            </Typography>
            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid size={{xs:12,md:6,lg:6}} key={index}>
                  <ServiceCard service={service} />
                </Grid>
              ))}
            </Grid>
            {/* Pagination */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination
                count={4}
                defaultPage={1}
                siblingCount={1}
                variant="outlined"
                shape="rounded"
                sx={{
                  '& .MuiPaginationItem-root.Mui-selected': {
                    bgcolor: '#4f46e5',
                    color: '#fff',
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* Footer */}
      <Box
        sx={{
          bgcolor: '#1f2937',
          color: '#9ca3af',
          py: 6,
          mt: 6,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid xs={12} md={3}>
              <Typography
                variant="h6"
                sx={{ color: '#fff', fontWeight: 700, mb: 2 }}
              >
                LocalFind
              </Typography>
              <Typography sx={{ fontSize: 14 }}>
                Connecting you with trusted local service providers in your area.
              </Typography>
            </Grid>
            <Grid xs={12} md={3}>
              <Typography
                sx={{ color: '#fff', fontWeight: 600, mb: 2, fontSize: 15 }}
              >
                Services
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
                  Home Repair
                </Typography>
                <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
                  Cleaning
                </Typography>
                <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
                  Landscaping
                </Typography>
                <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
                  Electrical
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={3}>
              <Typography
                sx={{ color: '#fff', fontWeight: 600, mb: 2, fontSize: 15 }}
              >
                Company
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
                  About Us
                </Typography>
                <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
                  Contact
                </Typography>
                <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
                  Privacy Policy
                </Typography>
                <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
                  Terms of Service
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={3}>
              <Typography
                sx={{ color: '#fff', fontWeight: 600, mb: 2, fontSize: 15 }}
              >
                Connect
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
                  Facebook
                </Typography>
                <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
                  Twitter
                </Typography>
                <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
                  Instagram
                </Typography>
                <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
                  LinkedIn
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              textAlign: 'center',
              mt: 4,
              pt: 4,
              borderTop: '1px solid #374151',
            }}
          >
            <Typography sx={{ fontSize: 13 }}>
              © 2024 LocalFind. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ServiceListingPage;
