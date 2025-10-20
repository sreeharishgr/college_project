import React from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  IconButton
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function ProfileForm() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    retypePassword: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#eaf3fb", py: { xs: 2, md: 6 } }}>
      <Box>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 5 },
            borderRadius: 2,
            maxWidth: 650,
            mx: "auto",
            mt: 5,
            border: "1px solid #b1c7de",
            position: "relative"
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: 700, mb: 3 }}
          >
            New User
            <IconButton
              sx={{ position: "absolute", right: 32, top: 32 }}
              aria-label="edit"
            >
              <EditOutlinedIcon />
            </IconButton>
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid size={{xs:12,sm:12, md:6,lg:6}}>
                <TextField
                  name="fullName"
                  label="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid size={{xs:12,sm:12, md:6,lg:6}}>
                <TextField
                  name="email"
                  label="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  type="email"
                />
              </Grid>
              <Grid size={{xs:12,sm:12, md:6,lg:6}}>
                <TextField
                  name="phone"
                  label="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid size={{xs:12,sm:12, md:6,lg:6}}>
                <TextField
                  name="location"
                  label="Location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid size={{xs:12,sm:12, md:6,lg:6}}>
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid size={{xs:12,sm:12, md:6,lg:6}}>
                <TextField
                  name="retypePassword"
                  label="Retype Password"
                  type="password"
                  value={formData.retypePassword}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid size={{xs:12,sm:12, md:6,lg:6}}></Grid>
              <Grid size={{xs:12,sm:12, md:6,lg:6}}>
                <Box display="flex" justifyContent="flex-end" gap={2}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{ minWidth: 120 }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={handleSave}
                    sx={{
                      bgcolor: "#2364fb",
                      minWidth: 120,
                      color: "#fff",
                      fontWeight: 600,
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
