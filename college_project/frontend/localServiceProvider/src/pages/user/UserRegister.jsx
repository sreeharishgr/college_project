import { React, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  IconButton,
  Alert,
  InputAdornment,
  CircularProgress
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import axios from "axios";

export default function ProfileForm() {
  const [newUser, setNewUser] = useState({
    full_name: "",
    email: "",
    phone_no: "",
    location: "Nagercoil",
    password: "",
    role: "user",
    retypePassword: "",
  });
  const [showPwd, setShowPwd] = useState(false);
  const [showRePwd, setShowRePwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errors, setErrors] = useState({
    full_name: "",
    email: "",
    phone_no: "",
    password: "",
    retypePassword: "",
    api: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
    setErrors({ ...errors, [name]: "", api: "" }); // clear previous errors
  };

  const validateFields = () => {
    let newErrors = {};

    // Full name
    if (!newUser.full_name.trim())
      newErrors.full_name = "Full name is required";

    // Email
    if (!newUser.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newUser.email))
      newErrors.email = "Invalid email format";

    // Phone number
    if (!newUser.phone_no) newErrors.phone_no = "Phone number is required";
    else if (!/^\d{10}$/.test(newUser.phone_no))
      newErrors.phone_no = "Phone number must be 10 digits";

    // Password
    if (!newUser.password) newErrors.password = "Password is required";
    else if (newUser.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    // Retype Password
    if (!newUser.retypePassword)
      newErrors.retypePassword = "Please retype your password";
    else if (newUser.password !== newUser.retypePassword)
      newErrors.retypePassword = "Passwords do not match";

    return newErrors;
  };

  const navigate = useNavigate();

  const handleCancel = () => {
    setNewUser({
      full_name: "",
      email: "",
      phone_no: "",
      location: "Nagercoil",
      password: "",
      role: "user",
      retypePassword: "",
    });
    setErrors({
      full_name: "",
      email: "",
      phone_no: "",
      password: "",
      retypePassword: "",
      api: "",
    });
    setShowPwd(false);
    setShowRePwd(false);
  };

  const handleSave = async () => {
    setErrors({ ...errors, api: "" });

    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors({ ...errors, ...newErrors });
      return;
    }
    console.log("newUser", newUser);
    try {
      setLoading(true);
      const { retypePassword, ...payload } = newUser;
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/sign-up`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ user Register successful:", response.data);
      setSuccessMsg("Provider registered successfully!");
      setErrors({
        full_name: "",
        email: "",
        phone_no: "",
        location: "",
        password: "",
        retypePassword: "",
        api: "",
      });
      setTimeout(() => navigate("/user-login"), 2000);
    } catch (error) {
      console.error("❌ Register failed:", error);

      const apiError =
        error.response?.data?.message ||
        "Internal server error please try again later.";
      setErrors({ ...errors, api: apiError });
    } finally {
      setLoading(false);
    }
  };

  // Password match validation colors
  const getPasswordBorderColor = () => {
    if (!newUser.password || !newUser.retypePassword) return "";
    if (newUser.password === newUser.retypePassword) return "success.main"; // green
    return "error.main"; // red
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
            position: "relative",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: 700, mb: 3 }}
          >
            New User
          </Typography>
          {/* ✅ Show API error message */}
          {errors.api && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errors.api}
            </Alert>
          )}
          {successMsg && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                      {successMsg}
                    </Alert>
                  )}
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <TextField
                  name="full_name"
                  label="Full name"
                  value={newUser.full_name}
                  onChange={handleChange}
                  required
                  fullWidth
                  error={Boolean(errors.full_name)}
                  helperText={errors.full_name}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <TextField
                  name="email"
                  label="Email address"
                  value={newUser.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  type="email"
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <TextField
                  name="phone_no"
                  label="Phone number"
                  value={newUser.phone_no}
                  onChange={handleChange}
                  required
                  fullWidth
                  error={Boolean(errors.phone_no)}
                  helperText={errors.phone_no}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <TextField
                  name="location"
                  label="Location"
                  value={newUser.location}
                  required
                  fullWidth
                  disabled // ✅ user cannot edit this field
                  InputProps={{
                    readOnly: true, // optional extra safety
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <TextField
                  name="password"
                  label="Password"
                  type={showPwd ? "text" : "password"}
                  placeholder="••••••••"
                  value={newUser.password}
                  onChange={handleChange}
                  required
                  fullWidth
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: getPasswordBorderColor(),
                      },
                    },
                  }}
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
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <TextField
                  name="retypePassword"
                  label="Retype Password"
                  type={showRePwd ? "text" : "password"}
                  value={newUser.retypePassword}
                  placeholder="••••••••"
                  onChange={handleChange}
                  required
                  fullWidth
                  error={Boolean(errors.retypePassword)}
                  helperText={errors.retypePassword}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: getPasswordBorderColor(),
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowRePwd((s) => !s)}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showRePwd ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}></Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <Box display="flex" justifyContent="flex-end" gap={2}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{ minWidth: 120 }}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    // type="submit"
                    variant="contained"
                    onClick={handleSave}
                    sx={{
                      bgcolor: "#2364fb",
                      minWidth: 120,
                      color: "#fff",
                      fontWeight: 600,
                    }}
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Save"
                    )}
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
