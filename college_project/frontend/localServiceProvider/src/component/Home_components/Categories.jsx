


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

      <Grid container spacing={3}>
        {categories.map((c) => (
          <Grid item xs={6} sm={4} md={2} lg={2} key={c.label}>
            <Stack
              role="button"
              aria-label={c.label}
              spacing={1}
              alignItems="center"
              sx={{
                p: 4,
                borderRadius: 2,
                // bgcolor: "background.paper",
                // backgroundColor:'red',
                boxShadow:3,
                borderColor: "divider",
                transition: "transform .3s, box-shadow .3s, border-color .3s",
                cursor: "pointer",
                "&:hover": { boxShadow: 3, transform: "translateY(-15px)", borderColor: "primary.light" },
                textAlign: "center",
                height: "140px",
                width:'170px'
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
