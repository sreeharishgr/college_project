import { React, useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Button,
  Box,
  Rating,
  CircularProgress,
} from "@mui/material";
import {LocationOn,
  AccessTime,
  Verified} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useSelector } from "react-redux";

const ProviderDetailsModal = ({ open, onClose, service }) => {
  const [ratingValue, setRatingValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { account } = useSelector((state) => state.account);

  useEffect(() => {
    if (open) {
      setRatingValue(0);
      setError("");
      setSuccess(false);
      setLoading(false);
    }
  }, [open]);

  const handleSubmitRating = async () => {
    if (!ratingValue) {
      setError("Please select a rating before submitting!");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/rating/submitRating`, {
        providerId: service.account_id,
        starCount: ratingValue,
        userId: account.user_id,
      });
      setSuccess(true);
      setError("Rating submit was sucess");
      setTimeout(() => {
        setLoading(false);
        onClose();
      }, 1000);
    } catch (err) {
      console.error(err);
      setError("Failed to submit rating. Please try again.");
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: { borderRadius: 3, p: 2, width: { xs: "90%", sm: "500px" } },
      }}
    >
      <DialogTitle sx={{ textAlign: "center", fontWeight: 700, fontSize: 22 }}>
        Provider Details
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8, color: "#555" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ py: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {service.full_name || "Provider Name"}
        </Typography>

        <Typography sx={{ color: "#666", fontSize: 14, mb: 1 }}>
          {service.description || "No description available."}
        </Typography>

        <Box display="flex" alignItems="center" mb={1}>
          <Rating
            value={Math.round(service.average_rating) || 0}
            precision={1}
            readOnly
          />
          <Typography sx={{ ml: 1, color: "#666", fontSize: 14 }}>
            {service.average_rating || 0} ({service.ratings_count || 0} reviews)
          </Typography>
        </Box>

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

        {/* Rating submission */}
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            Submit Your Rating
          </Typography>

          <Rating
            value={ratingValue}
            onChange={(e, newValue) => setRatingValue(newValue)}
            size="large"
          />

          {error && (
            <Typography sx={{ color: "red", fontSize: 13, mt: 1 }}>
              {error}
            </Typography>
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button
          variant="contained"
          onClick={handleSubmitRating}
          disabled={loading}
          sx={{
            bgcolor: "#4f46e5",
            textTransform: "none",
            fontWeight: 600,
            px: 4,
            py: 1,
            "&:hover": { bgcolor: "#009973" },
          }}
        >
          {loading ? (
            <CircularProgress size={22} color="inherit" />
          ) : success ? (
            "Submitted ✅"
          ) : (
            "Submit"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProviderDetailsModal;
