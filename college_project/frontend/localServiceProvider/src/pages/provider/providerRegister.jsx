import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  IconButton,
  Autocomplete,
  Alert,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// const serviceCategories = [
//   "Home Repair",
//   "Cleaning",
//   "Landscaping",
//   "Electrical",
// ];

function ProviderPortalForm() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone_no: "",
    location: "", // ✅ Fixed location
    password: "",
    retypePassword: "",
    category_name: "",
    experience: "",
    qualification: "",
    role:"provider",
    description: "",
    aadhar_file: null,
  });
  const [showPwd, setShowPwd] = useState(false);
  const [showRePwd, setShowRePwd] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/category/getAllCategories`
        );
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      // File upload handler (only PDF)
      const file = files[0];
      if (file && file.type !== "application/pdf") {
        setErrors({ ...errors, aadhar_file: "Only PDF files are allowed" });
        setForm((prev) => ({ ...prev, aadhar_file: null }));
      } else {
        setErrors({ ...errors, aadhar_file: "" });
        setForm((prev) => ({ ...prev, aadhar_file: file }));
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!form.full_name.trim()) newErrors.full_name = "Full name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email format";

    if (!form.phone_no) newErrors.phone_no = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone_no))
      newErrors.phone_no = "Phone number must be 10 digits";

    if (!form.location.trim()) newErrors.location = "location name is required";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!form.retypePassword)
      newErrors.retypePassword = "Please retype your password";
    else if (form.password !== form.retypePassword)
      newErrors.retypePassword = "Passwords do not match";

    if (!form.category_name)
      newErrors.category_name = "Please select a service category";

    if (!form.experience.trim())
      newErrors.experience = "experience is required";

    if (!form.qualification.trim())
      newErrors.qualification = "Qualification is required";

    if (!form.description.trim())
      newErrors.description = "Description is required";

    if (!form.aadhar_file) newErrors.aadhar_file = "Aadhar PDF file is required";

    return newErrors;
  };
console.log("form",form.category_name)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrors({});

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
const {retypePassword, ...params}= form
      // Append fields
      Object.entries(params).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/sign-up`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("✅ Provider registered:", response.data);
      setSuccessMsg("Provider registered successfully!");
      setErrors({});
      setForm({
        full_name: "",
        email: "",
        phone_no: "",
        location: "",
        password: "",
        retypePassword: "",
        category_name: "",
        experience: "",
        qualification: "",
        role: "provider",
        description: "",
        aadhar: null,
      });

      setTimeout(() => navigate("/provider-login"), 2000);
    } catch (error) {
      console.error("❌ Registration failed:", error);
      const apiError =
        error.response?.data?.message ||
        "Something went wrong. Please try again later.";
      setErrors({ api: apiError });
    } finally {
      setLoading(false);
    }
  };

  const getPasswordBorderColor = () => {
    if (!form.password || !form.retypePassword) return "";
    if (form.password === form.retypePassword) return "success.main"; // green
    return "error.main"; // red
  };
  return (
    <Container maxWidth="sm" sx={{ my: 6 }}>
      <Paper sx={{ p: { xs: 2, md: 4 }, borderRadius: 3 }}>
        <Box mb={2} textAlign="center">
          <Typography variant="h5" mb={1}>
            Provider Portal
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Join our service provider network
          </Typography>
        </Box>
        {/* ✅ Error & Success messages */}
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

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Full name"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                fullWidth
                error={Boolean(errors.full_name)}
                helperText={errors.full_name}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Email address"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                fullWidth
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Phone number"
                name="phone_no"
                value={form.phone_no}
                onChange={handleChange}
                fullWidth
                error={Boolean(errors.phone_no)}
                helperText={errors.phone_no}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Location"
                name="location"
                value={form.location}
                onChange={handleChange}
                fullWidth
                error={Boolean(errors.location)}
                helperText={errors.location}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
                type={showPwd ? "text" : "password"}
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
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Retype Password"
                name="retypePassword"
                value={form.retypePassword}
                onChange={handleChange}
                type={showRePwd ? "text" : "password"}
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
            <Grid size={{ xs: 12, sm: 6 }}>
              <Autocomplete
                freeSolo // ✅ allows typing new category
                options={categories.map((cat) => ({
                  label: cat.categoryName,
                  value: cat.categoryName,
                }))}
                value={
                  categories.find(
                    (cat) => cat.category_id === form.category_name
                  )?.categoryName || form.category_name
                }
                onChange={(e, newValue) => {
                  if (typeof newValue === "string") {
                    // User typed a new category manually
                    setForm((prev) => ({ ...prev, category_name: newValue }));
                  } else if (newValue && newValue.value) {
                    // User selected an existing category
                    setForm((prev) => ({
                      ...prev,
                      category_name: newValue.value,
                    }));
                  } else {
                    // Cleared the field
                    setForm((prev) => ({ ...prev, category_name: "" }));
                  }
                }}
                onInputChange={(e, newInputValue) => {
                  if (
                    !categories.some(
                      (cat) => cat.categoryName === newInputValue
                    )
                  ) {
                    setForm((prev) => ({
                      ...prev,
                      category_name: newInputValue,
                    }));
                  }
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Service Category"
                    fullWidth
                    error={Boolean(errors.category_name)}
                    helperText={errors.category_name}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Qualification"
                name="qualification"
                value={form.qualification}
                onChange={handleChange}
                fullWidth
                error={Boolean(errors.qualification)}
                helperText={errors.qualification}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <TextField
                label="Experience (Years)"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                type="number"
                fullWidth
                error={Boolean(errors.experience)}
                helperText={errors.experience}
              />
            </Grid>

            {/* <Grid item xs={12} sm={6}>
              <TextField
                label="Rate (R/hr)"
                name="rate"
                value={form.rate}
                onChange={handleChange}
                type="number"
                fullWidth
                
              />
            </Grid> */}
            <Grid size={{ xs: 12, sm: 8 }}>
              <TextField
                label="Description"
                name="description"
                value={form.description}
                onChange={handleChange}
                fullWidth
                multiline
                rows={2}
                error={Boolean(errors.description)}
                helperText={errors.description}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "2px dashed #8884ff88",
                  borderRadius: 2,
                }}
              >
                <Typography mb={1} fontSize={14}>
                  Please upload your Aadhar (PDF only)
                </Typography>
                <Button variant="outlined" component="label">
                  Browse file
                  <input
                    type="file"
                    name="aadhar"
                    accept=".pdf"
                    hidden
                    onChange={handleChange}
                  />
                </Button>
                {form.aadhar_file && (
                  <Typography mt={1} fontSize={12}>
                    Selected: {form.aadhar_file.name}
                  </Typography>
                )}
                {errors.aadhar_file && (
                  <Typography color="error" fontSize={12} mt={0.5}>
                    {errors.aadhar_file}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#244afc",
                  mt:2,
                  width: "60%", // adjust width (e.g., 40%, 50%, or 200px)
                }}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Register as Provider"
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
        <Box textAlign="center" mt={2}>
          <Typography variant="body2">
            Already have an account? <Link to="/provider-register">Login</Link>
          </Typography>
          <Button
            onClick={() => navigate("/")}
            sx={{ textTransform: "none", mt: 1 }}
          >
            &lt; Back to home
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default ProviderPortalForm;
