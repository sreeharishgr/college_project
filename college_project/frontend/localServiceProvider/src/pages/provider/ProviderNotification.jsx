import { React, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Pagination,
} from "@mui/material";
import axios from "axios";

// 🔹 Notification Card
function NotificationCard({ title, createdAt, onAccept }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: (t) =>
          t.palette.mode === "light"
            ? t.palette.grey[100]
            : t.palette.background.paper,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {createdAt}
        </Typography>
      </Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1}
        alignItems="flex-end"
      >
        <Button
          size="small"
          variant="contained"
          color="success"
          onClick={onAccept}
          sx={{ textTransform: "none", minWidth: 140 }}
        >
          View & Accept
        </Button>
      </Stack>
    </Paper>
  );
}

// 🔹 Document Modal
function DocumentModal({
  open,
  onClose,
  images,
  providerName,
  onAccept,
  loading,
  successMessage,
  errorMessage,
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 700 }}>
        {providerName}’s Documents
      </DialogTitle>

      <DialogContent>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          {images.map((file, idx) => {
            const isPdf = file.startsWith("JVBER"); // check PDF
            return isPdf ? (
              <object
                key={idx}
                data={`data:application/pdf;base64,${file}`}
                type="application/pdf"
                width="100%"
                height="500px"
                style={{
                  borderRadius: 8,
                  boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                }}
              >
                <p>
                  PDF cannot be displayed.
                  <a
                    href={`data:application/pdf;base64,${file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download PDF
                  </a>
                </p>
              </object>
            ) : (
              <img
                key={idx}
                src={`data:image/jpeg;base64,${file}`}
                alt="document"
                style={{
                  width: "60%",
                  borderRadius: 8,
                  objectFit: "cover",
                  boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                }}
              />
            );
          })}
        </Box>

        {/* ✅ Feedback messages */}
        {successMessage && (
          <Typography color="success.main" textAlign="center" sx={{ mt: 1 }}>
            {successMessage}
          </Typography>
        )}
        {errorMessage && (
          <Typography color="error.main" textAlign="center" sx={{ mt: 1 }}>
            {errorMessage}
          </Typography>
        )}
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          color="success"
          disabled={loading}
          onClick={onAccept}
          sx={{ minWidth: 120 }}
        >
          {loading ? <CircularProgress size={22} color="inherit" /> : "Accept"}
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          onClick={onClose}
          disabled={loading}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// 🔹 Main Page
export default function NotificationPage() {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProvider, setCurrentProvider] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalSuccess, setModalSuccess] = useState("");
  const [modalError, setModalError] = useState("");

  // 🔸 Fetch paginated unverified providers
  const fetchProviders = async (pageNumber = 1) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/admin/unverifiedProviders?page=${pageNumber}`
      );

      setProviders(data.providers || []);
      setTotalPages(data.totalPages || 1);
      setPage(data.currentPage || 1);
    } catch (err) {
      console.error("Error fetching unverified providers:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProviders(page);
  }, [page]);

  // 🔸 Modal open on accept
  const handleView = (provider) => {
    setCurrentProvider(provider);
    setModalOpen(true);
  };
  console.log("currentProvider", currentProvider);

  const handleModalClose = () => setModalOpen(false);

  const handleAccept = async () => {
    if (!currentProvider) return;

    setModalLoading(true);
    setModalSuccess("");
    setModalError("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/verifyProvider`,
        { providerId: currentProvider.provider_id }
      );

      setModalSuccess(`${currentProvider.full_name} verified successfully!`);

      // Refresh data after a short delay
      setTimeout(() => {
        setModalOpen(false);
        fetchProviders(page);
        setModalSuccess("");
      }, 1500);
    } catch (err) {
      console.error("Error verifying provider:", err);
      setModalError("Failed to verify provider. Try again later.");
    } finally {
      setModalLoading(false);
    }
  };

  const handleCancel = (id) => {
    console.log("Cancel clicked:", id);
  };

  // 🔸 Pagination change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#eef4ff" }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          Notification
        </Typography>

        {loading ? (
          <Box
            sx={{
              py: 6,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Grid container spacing={2}>
              {providers.length > 0 ? (
                providers.map((p) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={p.provider_id}>
                    <NotificationCard
                      title={`${p.full_name}'s Document Verification Request`}
                      createdAt={`Contact Number: ${p.phone_no}`}
                      onAccept={() => handleView(p)}
                      onCancel={() => handleCancel(p.provider_id)}
                    />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Typography textAlign="center" color="text.secondary">
                    No unverified providers found.
                  </Typography>
                </Grid>
              )}
            </Grid>

            {/* Pagination controls */}
            {totalPages > 1 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 4,
                }}
              >
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  shape="rounded"
                />
              </Box>
            )}
          </>
        )}
      </Container>

      {/* Document Modal */}
      {currentProvider && (
        <DocumentModal
          open={modalOpen}
          onClose={handleModalClose}
          images={[currentProvider.aadhar_file].filter(Boolean)}
          providerName={currentProvider.full_name}
          onAccept={handleAccept}
          loading={modalLoading}
          successMessage={modalSuccess}
          errorMessage={modalError}
        />
      )}
    </Box>
  );
}
