import React from "react";
import { Box, Button, Container, Stack, Typography, useTheme } from "@mui/material";

function DirectoryCta() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      aria-labelledby="directory-cta-heading"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          sx={{
            p: { xs: 2, sm: 3 },
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            boxShadow: { xs: 0, sm: 1 },
            backgroundColor: "background.paper",
          }}
        >
          <Typography id="directory-cta-heading" variant="h5" fontWeight={800}>
            Need More Services?
          </Typography>

          <Typography color="text.secondary" sx={{ maxWidth: 560 }}>
            Browse our complete directory of 150+ professional services
          </Typography>

          <Button
            variant="outlined"
            size="large"
            sx={{
              
              borderColor:
                theme.palette.mode === "dark"
                  // ? "rgba(255,255,255,0.5)"
                  //  ? "green"
                  ? "rgba(13, 179, 135, 1)"
                  : "divider",
              "&:hover": {
                borderColor:
                  theme.palette.mode === "dark"
                    // ? "rgba(255,255,255,0.8)"
                    //  ? "green"
                    ? "black"
                    : "text.primary",
                backgroundColor:
                  theme.palette.mode === "light"
                    // ? "rgba(255,255,255,0.06)"
                    // ? "rgba(13, 179, 135, 0.49)"
                      ?"#a78bfa"
                      : "action.hover",

                color:'white'
              },
              "&:focus-visible": {
                outline: `3px solid ${theme.palette.primary.light}`,
                outlineOffset: 2,
              },
              px: 3,
            }}
          >
            View All Services
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default DirectoryCta;
