// import * as React from "react";
// import { Box, Container, Grid, Stack, Typography,Stack } from "@mui/material";


// function CategoryGrid() {
//     const categories = [
//   { label: "Home Repair", icon: <BuildOutlined /> },
//   { label: "Cleaning", icon: <CleaningServicesOutlined /> },
//   { label: "Landscaping", icon: <GrassOutlined /> },
//   { label: "Electrical", icon: <ElectricBoltOutlined /> },
//   { label: "Plumbing", icon: <PlumbingOutlined /> },
//   { label: "Painting", icon: <FormatPaintOutlined /> },
// ];

//   return (
//     <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
//       <Stack spacing={1} alignItems="center" textAlign="center" mb={4}>
//         <Typography variant="h5" fontWeight={800}>
//           Popular Service Categories
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Browse services by category to find exactly what you need
//         </Typography>
//       </Stack>

//       <Grid container spacing={2}>
//         {categories.map((c) => (
//           <Grid item xs={6} sm={4} md={2} key={c.label}>
//             <Stack
//               spacing={1}
//               alignItems="center"
//               sx={{
//                 p: 2,
//                 borderRadius: 2,
//                 bgcolor: "background.paper",
//                 border: "1px solid",
//                 borderColor: "divider",
//                 transition: "all .2s",
//                 "&:hover": { boxShadow: 3, transform: "translateY(-2px)" },
//                 textAlign: "center",
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 48,
//                   height: 48,
//                   borderRadius: "50%",
//                   bgcolor: "action.hover",
//                   display: "grid",
//                   placeItems: "center",
//                   color: "primary.main",
//                 }}
//               >
//                 {c.icon}
//               </Box>
//               <Typography variant="body2" fontWeight={600}>
//                 {c.label}
//               </Typography>
//             </Stack>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }
// export default CategoryGrid;



import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  BuildOutlined,
  CleaningServicesOutlined,
  GrassOutlined,
  ElectricBoltOutlined,
  PlumbingOutlined,
  FormatPaintOutlined,
} from "@mui/icons-material";

function CategoryGrid() {
  const categories = [
    { label: "Home Repair", icon: <BuildOutlined fontSize="small" /> },
    { label: "Cleaning", icon: <CleaningServicesOutlined fontSize="small" /> },
    { label: "Landscaping", icon: <GrassOutlined fontSize="small" /> },
    { label: "Electrical", icon: <ElectricBoltOutlined fontSize="small" /> },
    { label: "Plumbing", icon: <PlumbingOutlined fontSize="small" /> },
    { label: "Painting", icon: <FormatPaintOutlined fontSize="small" /> },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      <Stack spacing={1} alignItems="center" textAlign="center" mb={4}>
        <Typography variant="h5" fontWeight={800}>
          Popular Service Categories
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Browse services by category to find exactly what you need
        </Typography>
      </Stack>

      <Grid container spacing={2}>
        {categories.map((c) => (
          <Grid item xs={6} sm={4} md={2} key={c.label}>
            <Stack
              role="button"
              aria-label={c.label}
              spacing={1}
              alignItems="center"
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                transition: "transform .2s, box-shadow .2s, border-color .2s",
                cursor: "pointer",
                "&:hover": { boxShadow: 3, transform: "translateY(-2px)", borderColor: "primary.light" },
                textAlign: "center",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  bgcolor: "action.hover",
                  display: "grid",
                  placeItems: "center",
                  color: "primary.main",
                }}
              >
                {c.icon}
              </Box>
              <Typography variant="body2" fontWeight={600}>
                {c.label}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CategoryGrid;
