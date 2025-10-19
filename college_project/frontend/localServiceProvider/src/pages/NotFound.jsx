import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700, color: "error.main" }}>
        404 – Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary">
        The page you are looking for doesn’t exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 2, textTransform: "none", fontWeight: 600 }}
        onClick={() => navigate("/user-login")}
      >
        Go to Login
      </Button>
    </Box>
  );
}
