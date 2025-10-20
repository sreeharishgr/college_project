import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Button,
  Paper,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/SpaceDashboard";
import HistoryIcon from "@mui/icons-material/History";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

// Notification samples
const sampleRequests = [
  {
    id: "1",
    title: "Kannan’s document Verification Request",
    createdAt: "Just now"
  },
  { id: "2", title: "Kannan’s document Verification Request", createdAt: "Today" },
  { id: "3", title: "Kannan’s document Verification Request", createdAt: "Yesterday" },
  { id: "4", title: "Kannan’s document Verification Request", createdAt: "2 days ago" }
];

// Use actual import or URL for your image
import DOCUMENT_IMAGE from '../../../src/assest/adhar_front_1500x1000.png'; // update the path as needed

const navItems = [
  { label: "Dashboard", icon: <DashboardIcon />, href: "/dashboard" },
  { label: "History", icon: <HistoryIcon />, href: "/history" },
  { label: "Notification", icon: <NotificationsIcon />, href: "/notification", active: true },
  { label: "Logout", icon: <LogoutIcon />, href: "/logout" }
];

function TopBar({ onNavigate }) {
  const upMd = useMediaQuery("(min-width:900px)");
  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="inherit"
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backdropFilter: "saturate(180%) blur(6px)",
        bgcolor: (t) => (t.palette.mode === "light" ? "rgba(255,255,255,0.9)" : "rgba(18,18,18,0.8)")
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        {!upMd && (
          <IconButton edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" sx={{ fontWeight: 700, mr: 4 }}>
          Local Service Find
        </Typography>
        <Stack direction="row" spacing={1} sx={{ flexGrow: 1, display: "flex", alignItems: "center" ,justifyContent:'end'}}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              startIcon={item.icon}
              variant={item.active ? "contained" : "text"}
              color={item.active ? "success" : "inherit"}
              sx={{
                fontWeight: item.active ? 700 : 400,
                bgcolor: item.active ? "success.light" : undefined,
                textTransform: "none"
              }}
              // onClick can use navigation logic, e.g. with useNavigate hook from react-router
              onClick={() => onNavigate(item.href)}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 2 }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              border: (t) => `1px solid ${t.palette.divider}`,
              display: "grid",
              placeItems: "center",
              fontSize: 16
            }}
          >
            ⓐ
          </Box>
          <Typography variant="body2">Admin</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function NotificationCard({ title, createdAt, onAccept, onCancel }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: (t) => (t.palette.mode === "light" ? t.palette.grey[100] : t.palette.background.paper),
        display: "flex",
        alignItems: "center",
        gap: 2
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
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1} alignItems="flex-end">
        <Button
          size="small"
          variant="contained"
          color="success"
          onClick={onAccept}
          sx={{ textTransform: "none", minWidth: 140 }}
        >
          View & Accept
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="inherit"
          onClick={onCancel}
          sx={{ textTransform: "none", minWidth: 100 }}
        >
          Cancel
        </Button>
      </Stack>
    </Paper>
  );
}

function DocumentModal({ open, onClose, images }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 700 }}>Kannan’s document</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="document"
              style={{ width: "45%", borderRadius: 8, objectFit: "cover" }}
            />
          ))}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="success" onClick={onClose}>
          Accept
        </Button>
        <Button variant="outlined" color="inherit" onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function NotificationPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [currentDocument, setCurrentDocument] = React.useState([]);

  // Add react-router navigation for real use
  const onNavigate = (href) => {
    window.location.href = href; // Use useNavigate if using react-router, replace as needed
  };

  const handleAccept = (id) => {
    setCurrentDocument([DOCUMENT_IMAGE, DOCUMENT_IMAGE]);
    setModalOpen(true);
  };

  const handleModalClose = () => setModalOpen(false);

  const handleCancel = (id) => {
    console.log("Cancel clicked:", id);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#eef4ff" }}>
      <TopBar onNavigate={onNavigate} />
      {/* Main content below navbar */}
      <Box component="main" sx={{ pt: 9 }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Notification
          </Typography>
          <Grid container spacing={2}>
            {sampleRequests.map((r) => (
              <Grid item xs={12} key={r.id}>
                <NotificationCard
                  title={r.title}
                  createdAt={r.createdAt}
                  onAccept={() => handleAccept(r.id)}
                  onCancel={() => handleCancel(r.id)}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ height: 220 }} />
        </Container>
      </Box>
      {/* Modal for document images */}
      <DocumentModal open={modalOpen} onClose={handleModalClose} images={currentDocument} />
    </Box>
  );
}
