// src/pages/Unauthorized.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export default function Unauthorized() {
  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h5" color="error">
        🚫 Access Denied
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        You don’t have permission to access this page.
      </Typography>
      <Button component={Link} to="/" variant="contained" sx={{ mt: 3 }}>
        Go to Login
      </Button>
    </Box>
  );
}
