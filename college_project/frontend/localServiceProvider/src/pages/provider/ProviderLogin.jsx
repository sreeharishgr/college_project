import React from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  Link as MuiLink,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Grid,
  CircularProgress,
  Alert,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAccount } from "../../redux/slices/accountSlice.js";
import axios from "axios";
import { useState } from "react";

function LoginCard() {
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "", api: "" });
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("Provideraccount", account);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
    setErrors({ ...errors, [name]: "", api: "" }); // clear previous errors
  };

  const handleLogin = async () => {
    setErrors({ ...errors, api: "" }); // Clear previous errors
    let newErrors = {};

    if (!loginDetails.email) newErrors.email = "Email is required";
    if (!loginDetails.password) newErrors.password = "Password is required";

    // Stop if validation fails
    if (Object.keys(newErrors).length > 0) {
      setErrors({ ...errors, ...newErrors });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        { email: loginDetails.email, password: loginDetails.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ Login successful Provider:", response.data);

      dispatch(setAccount(response.data.user)); // optional Redux dispatch

      localStorage.setItem("AccountToken", response.data.token); // store token
      setErrors({ email: "", password: "", api: "" });
      navigate("/provider-home");
    } catch (error) {
      console.error("❌ Login failed Provider:", error);

      const apiError =
        error.response?.data?.message ||
        "Internal server error please try again later.";
      setErrors({ ...errors, api: apiError });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="xxl"
      sx={{
        padding: "0px",
        minHeight: "97.6dvh",
        bgcolor: "rgba(99, 102, 241, 0.06)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          width: "100%",
          maxWidth: 520,
          p: { xs: 3, sm: 4 },
          borderRadius: 2,
          m: "0 auto",
          height: "auto",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Provider Portal
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "15px" }}
          >
            Access your account
          </Typography>
        </Box>
        {/* ✅ Show API error message */}
        {errors.api && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errors.api}
          </Alert>
        )}
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <TextField
                fullWidth
                size="large"
                name="email"
                placeholder="you@example.com"
                label="Email address"
                type="email"
                required
                margin="dense"
                onChange={handleInputChange}
                value={loginDetails.email}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <TextField
                fullWidth
                size="large"
                minLength={5}
                label="Password"
                name="password"
                type={showPwd ? "text" : "password"}
                placeholder="••••••••"
                required
                margin="dense"
                onChange={handleInputChange}
                value={loginDetails.password}
                error={Boolean(errors.password)}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPwd((s) => !s)}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPwd ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <Button
                variant="contained"
                sx={{
                  mt: 1,
                  bgcolor: "#2563eb",
                  py: 1.1,
                  textTransform: "none",
                  fontWeight: 600,
                  width: "50%",
                  margin: "auto",
                  display: "block",
                  fontSize: "17px",
                }}
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Login"
                )}
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "18px" }}
          >
            Don’t have an account? <Link to="/provider-register">Register</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default function ProviderLogin() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginCard />
    </Box>
  );
}
