import { React, useState, useEffect } from "react";
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
  FormControlLabel,
  Chip,
  Rating,
  Pagination,
  Grid,
  CssBaseline,
  CircularProgress,
  RadioGroup,
  Radio,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Snackbar
} from "@mui/material";
import {
  LocationOn,
  AccessTime,
  Verified,
  AttachMoney,
  Business,
  Home as HomeIcon,
  Schedule,
  People,
  LocalOffer
} from "@mui/icons-material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import BuildIcon from "@mui/icons-material/Build";
import HouseIcon from "@mui/icons-material/House";
import ConstructionIcon from "@mui/icons-material/Construction";
import HandymanIcon from "@mui/icons-material/Handyman";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import EngineeringIcon from "@mui/icons-material/Engineering";
import axios from "axios";
import ProviderDetailsModal from "../features/providerDetailsModal";
import { useLocation, useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const [openContact, setOpenContact] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);

  // 🔹 Smart icon selector — detects category keywords
  const getCategoryIcon = (categoryName = "") => {
    const name = categoryName.toLowerCase();

    if (name.includes("electric"))
      return <ElectricBoltIcon sx={{ color: "#f4b400", fontSize: 48 }} />;
    if (name.includes("plumb"))
      return <PlumbingIcon sx={{ color: "#1e88e5", fontSize: 48 }} />;
    if (name.includes("clean"))
      return <CleaningServicesIcon sx={{ color: "#43a047", fontSize: 48 }} />;
    if (name.includes("carpent"))
      return <CarpenterIcon sx={{ color: "#8d6e63", fontSize: 48 }} />;
    if (name.includes("paint"))
      return <HouseIcon sx={{ color: "#9c27b0", fontSize: 48 }} />;
    if (name.includes("mechanic"))
      return <EngineeringIcon sx={{ color: "#546e7a", fontSize: 48 }} />;
    if (name.includes("construction"))
      return <ConstructionIcon sx={{ color: "#fb8c00", fontSize: 48 }} />;
    if (name.includes("repair"))
      return <HomeRepairServiceIcon sx={{ color: "#009688", fontSize: 48 }} />;
    if (name.includes("handyman"))
      return <HandymanIcon sx={{ color: "#00796b", fontSize: 48 }} />;

    // Default fallback
    return <BuildIcon sx={{ color: "#757575", fontSize: 48 }} />;
  };

  const categoryName =
    service?.category?.category_name || service.category || "General";
  const categoryIcon = getCategoryIcon(categoryName);

  // 📋 Handle copy and auto-close
  const handleCopy = async () => {
    await navigator.clipboard.writeText(service.phone_no || "N/A");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpenContact(false);
    }, 1000);
  };

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          width: "auto",
          borderRadius: 2,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            height: 160,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>{categoryIcon}</Box>
          <Chip
            label={service.status ? "Active" : "InActive"}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              bgcolor: service.status ? "#4CAF50" : "#E53935",
              color: "#fff",
              fontWeight: 600,
              fontSize: 11,
            }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: 16, sm: 15, md: 18 },
                color: "#1a1a1aff",
              }}
            >
              {service.category.category_name}
            </Typography>
          </Box>

          {/* Category */}
          <Typography
            sx={{
              fontWeight: 100,
              color: "#666",
              fontSize: { xs: 10, sm: 14, md: 16 },
              mb: 1.5,
            }}
          >
            {service.full_name}
          </Typography>

          {/* Rating */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <Rating
              value={Math.round(service.average_rating) || 0}
              precision={1}
              readOnly
              size="small"
              sx={{ mr: 1 }}
            />
            <Typography
              sx={{ fontSize: { xs: 10, sm: 13, md: 10 }, color: "#666" }}
            >
              {service.average_rating} ({service.ratings_count} reviews)
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            sx={{
              fontSize: { xs: 12, sm: 13, md: 13 },
              color: "#666",
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            {service.description}
          </Typography>

          {/* Tags/Attributes */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LocationOn sx={{ fontSize: 14, color: "#eb0f0fff" }} />
              <Typography sx={{ fontSize: 12, color: "#666" }}>
                {service.location}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <AccessTime sx={{ fontSize: 14, color: "#1846dbff" }} />
              <Typography sx={{ fontSize: 12, color: "#666" }}>
                {service.experience + " yrs exp"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Verified sx={{ fontSize: 14, color: "#00d60bff" }} />
              <Typography sx={{ fontSize: 12, color: "#666" }}>
                {"Verified"}
              </Typography>
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => setOpenDetails(true)}
              sx={{
                bgcolor: "#4f46e5",
                textTransform: "none",
                fontWeight: 600,
                py: 1,
                "&:hover": { backgroundColor: "#009973ff", color: "#fff" },
              }}
            >
              View Details
            </Button>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderColor: "#4f46e5",
                color: "#4f46e5",
                py: 1,
                px: 3,
                "&:hover": { backgroundColor: "#009973", color: "#fff" },
              }}
              onClick={() => setOpenContact(true)}
            >
              Contact
            </Button>
          </Box>
        </CardContent>
      </Card>
      <ProviderDetailsModal
        open={openDetails}
        onClose={() => setOpenDetails(false)}
        service={service}
      />
      {/* 📞 Contact Modal */}
      <Dialog open={openContact} onClose={() => setOpenContact(false)}>
        <DialogTitle>
          Contact
          <IconButton
            aria-label="close"
            onClick={() => setOpenContact(false)}
            sx={{ position: "absolute", right: 3, top: 12 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Mobile Number
          </Typography>
          <Typography sx={{ mt: 1, fontSize: 18, fontWeight: 700 }}>
            {service.phone_no || "N/A"}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            startIcon={<ContentCopyIcon />}
            onClick={handleCopy}
            sx={{ bgcolor: "#4f46e5", "&:hover": { bgcolor: "#009973" } }}
          >
            Copy
          </Button>
        </DialogActions>
      </Dialog>

      {/* ✅ Copied Snackbar */}
      <Snackbar
        open={copied}
        autoHideDuration={1000}
        message="Copied!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
};

const ServiceListingPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromURL = queryParams.get("category") || "";

  const [providers, setProviders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(categoryFromURL);
  const [rating, setRating] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const resSize = providers.length < 2 ? 12 : 6;

  const navigate = useNavigate();
  // 🔹 Fetch categories
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

  // 🔹 Fetch providers
  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/providers/getProviders`,
          {
            params: {
              page,
              category_id: category || undefined,
              min_rating: rating || undefined,
              status: status || undefined,
            },
          }
        );
        setProviders(data.providers);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Failed to fetch providers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProviders();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, category, rating, status]);

   useEffect(() => {
    if (categoryFromURL) {
      navigate("/services", { replace: true });
    }
  }, []); 

  const clearFilters = () => {
    setCategory("");
    setRating("");
    setStatus("");
    setPage(1);
  };

  console.log("providers", providers);
  // console.log("pages", page)
  console.log("categories", categories);
  // console.log("sshsd", resSize)

  return (
    <Box sx={{ bgcolor: "#f3f4f6", minHeight: "100vh" }}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid
          container
          spacing={3}
          sx={{
            display: { xs: "flex", md: "flex" },
            justifyContent: { xs: "center", md: "center" },
          }}
        >
          {/* Filters Sidebar */}
          <Grid size={{ xs: 10, sm: 5, md: 4, lg: 2.5, xl: 3 }}>
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
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">All Categories</MenuItem>
                  {categories.map((cat) => (
                    <MenuItem key={cat.category_id} value={cat.category_id}>
                      {cat.categoryName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Rating */}
              <Typography sx={{ mb: 1, fontWeight: 600, fontSize: 14 }}>
                Rating
              </Typography>
              <FormControl fullWidth size="small" sx={{ mb: 3 }}>
                <Select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <MenuItem value="">Any Rating</MenuItem>
                  <MenuItem value="1">1+ Stars</MenuItem>
                  <MenuItem value="2">2+ Stars</MenuItem>
                  <MenuItem value="3">3+ Stars</MenuItem>
                  <MenuItem value="4">4+ Stars</MenuItem>
                </Select>
              </FormControl>

              {/* Status */}
              <Typography sx={{ mb: 1, fontWeight: 600, fontSize: 14 }}>
                Status
              </Typography>
              <Box sx={{ mb: 1 }}>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      label="Active"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="Inactive"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#666",
                  borderColor: "#d1d5db",
                }}
                onClick={clearFilters}
              >
                Clear All Filters
              </Button>
            </Card>
          </Grid>
          {/* provvider Listings */}
          <Grid
            sx={{
              backgroundColor: "white",
              borderRadius: 2,
              padding: 3,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              margin: "0 auto",
            }}
            size={{ xs: 10, sm: 7, md: 8, lg: 7.5 }}
          >
            <Typography sx={{ mb: 3, fontSize: 14, color: "#666" }}>
              Showing {providers.length} results for in Nagercoil
            </Typography>
            <Grid container spacing={3}>
              {loading ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="50vh"
                >
                  <CircularProgress />
                </Box>
              ) : providers.length === 0 ? (
                <Typography align="center" sx={{ mt: 3, color: "#888" }}>
                  No providers found
                </Typography>
              ) : (
                <Grid
                  container
                  spacing={3}
                  justifyContent={
                    providers.length < 2 ? "center" : "flex-start"
                  }
                  //  Center cards if only 1 results
                >
                  {providers.map((provider) => (
                    <Grid
                      size={{ xs: 6, sm: 12, md: resSize, lg: resSize }}
                      key={provider.account_id}
                    >
                      <ServiceCard service={provider} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
            {/* Pagination */}
            {providers.length > 0 && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Pagination
                  count={totalPages}
                  defaultPage={page}
                  onChange={(_, newPage) => setPage(newPage)}
                  variant="outlined"
                  shape="rounded"
                  sx={{
                    "& .MuiPaginationItem-root.Mui-selected": {
                      bgcolor: "#4f46e5",
                      color: "#fff",
                    },
                  }}
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
      {/* Footer */}
    </Box>
  );
};

export default ServiceListingPage;
