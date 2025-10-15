import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  useMediaQuery,
  Card,
  CardContent,
  Stack,
  Chip,
  Tooltip,
  alpha,
  ThemeProvider,
  createTheme,
  Link as MuiLink,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip as ReTooltip,
  CartesianGrid,
} from "recharts";

const drawerWidth = 220;

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#3b5bfd" }, 
    text: {
      primary: "#1a1f36",
      secondary: "#5f6b85",
    },
    background: {
      default: "#eef4ff", 
      paper: "#ffffff",
    },
    divider: alpha("#000", 0.06),
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    h5: { fontWeight: 700, letterSpacing: 0.2 },
    h6: { fontWeight: 600 },
    body2: { color: "#5f6b85" },
    caption: { color: "#8892a6" },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "0 1px 2px rgba(16,24,40,0.04), 0 1px 3px rgba(16,24,40,0.08)",
          border: "1px solid rgba(16,24,40,0.06)",
          transition: "transform .2s ease, box-shadow .2s ease",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          margin: "4px 8px",
        },
      },
    },
  },
});

const navTopLinks = [
  { label: "Home", icon: <HomeOutlinedIcon fontSize="small" /> },
  { label: "Services", icon: <MiscellaneousServicesOutlinedIcon fontSize="small" /> },
  { label: "About", icon: <InfoOutlinedIcon fontSize="small" /> },
  { label: "Contact", icon: <ContactMailOutlinedIcon fontSize="small" /> },
];

const sideNav = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  { label: "History", icon: <HistoryIcon /> },
  { label: "Notification", icon: <NotificationsNoneIcon /> },
  { label: "Logout", icon: <LogoutOutlinedIcon /> },
];

const metrics = [
  {
    label: "Active Users",
    value: "275",
    icon: <PersonOutlineIcon />,
  },
  {
    label: "New User",
    value: "3,298",
    icon: <GroupAddOutlinedIcon />,
  },
  {
    label: "Total providers",
    value: "258",
    icon: <StorefrontOutlinedIcon />,
  },
  {
    label: "Not Verified Providers",
    value: "35",
    icon: <ReportGmailerrorredOutlinedIcon />,
  },
  {
    label: "Monthly",
    value: "867",
    icon: <CalendarMonthOutlinedIcon />,
    tinySpark: true,
  },
  {
    label: "Yearly",
    value: "+34%",
    icon: <TimelineOutlinedIcon />,
    tinySpark: true,
  },
];

const activity = [
  { name: "JAN", uv: 70 },
  { name: "FEB", uv: 110 },
  { name: "MAR", uv: 150 },
  { name: "APR", uv: 220 },
  { name: "MAY", uv: 260 },
  { name: "JUN", uv: 190 },
  { name: "JUL", uv: 230 },
  { name: "AUG", uv: 90 },
  { name: "SEP", uv: 180 },
  { name: "OCT", uv: 310 },
  { name: "NOV", uv: 360 },
  { name: "DEC", uv: 380 },
];

const TinySpark = ({ color = theme.palette.primary.main }) => (
  <Box
    sx={{
      mt: 1,
      height: 28,
      width: "100%",
      position: "relative",
      "&:before": {
        content: '""',
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(90deg, rgba(59,91,253,0.15), rgba(59,91,253,0.04))",
        borderRadius: 20,
      },
      "&:after": {
        content: '""',
        position: "absolute",
        left: 8,
        right: 8,
        top: 10,
        height: 2,
        background:
          "linear-gradient(90deg, transparent 0%, transparent 10%, currentColor 10%, currentColor 50%, transparent 50%, transparent 60%, currentColor 60%, currentColor 90%, transparent 90%)",
        color,
        borderRadius: 2,
      },
    }}
  />
);
const StatCard = ({ label, value, icon, tinySpark }) => (
  <Card
    component="section"
    role="region"
    aria-label={label}
    sx={{
      ":hover": {
        transform: "translateY(-2px)",
        boxShadow:
          "0 6px 16px rgba(16,24,40,0.08), 0 2px 6px rgba(16,24,40,0.06)",
      },
      minWidth: 200,
      flex: 1,
    }}
  >
    <CardContent sx={{ p: 2.5 }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: 1.5,
            bgcolor: alpha(theme.palette.primary.main, 0.08),
            color: theme.palette.primary.main,
            display: "grid",
            placeItems: "center",
          }}
        >
          {icon}
        </Box>
        <Typography variant="body2">{label}</Typography>
      </Stack>
      <Typography variant="h5" sx={{ mt: 1 }}>
        {value}
      </Typography>
      {tinySpark ? (
        <TinySpark />
      ) : null}
    </CardContent>
  </Card>
);
const ActivityCard = () => {
  const isXs = useMediaQuery("(max-width:600px)");
  return (
    <Card
      component="section"
      role="region"
      aria-label="Activity"
      sx={{
        ":hover": {
          transform: "translateY(-2px)",
          boxShadow:
            "0 6px 16px rgba(16,24,40,0.08), 0 2px 6px rgba(16,24,40,0.06)",
        },
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2">Activity</Typography>
          <Chip
            variant="outlined"
            size="small"
            label={
              <Stack direction="row" spacing={0.5} alignItems="center">
                <span>Month</span>
                <ChevronRightIcon fontSize="small" />
              </Stack>
            }
          />
        </Stack>
        <Box sx={{ mt: 1.5, height: isXs ? 220 : 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activity} barCategoryGap={isXs ? 20 : 30}>
              <CartesianGrid vertical={false} stroke={alpha("#000", 0.06)} />
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#8892a6", fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#8892a6", fontSize: 12 }}
                width={30}
              />
              <ReTooltip
                cursor={{ fill: alpha(theme.palette.primary.main, 0.06) }}
                contentStyle={{
                  borderRadius: 10,
                  border: "1px solid rgba(16,24,40,0.06)",
                }}
              />
              <Bar
                dataKey="uv"
                radius={[6, 6, 0, 0]}
                fill={theme.palette.primary.main}
                maxBarSize={26}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default function LocalServiceFindDashboard() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMdUp = useMediaQuery("(min-width:900px)");

  const drawer = (
    <Box
      component="nav"
      aria-label="Sidebar navigation"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        pb: 2,
      }}
    >
      <Box>
        <Toolbar sx={{ minHeight: 72 }} />
        <List sx={{ px: 0.5 }}>
          {sideNav.map((item, idx) => (
            <ListItemButton
              key={item.label}
              selected={idx === 0}
              sx={{
                "&.Mui-selected": {
                  bgcolor: alpha(theme.palette.primary.main, 0.08),
                  color: theme.palette.primary.main,
                },
                "&:hover": {
                  bgcolor: alpha(theme.palette.primary.main, 0.06),
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    idx === 0
                      ? theme.palette.primary.main
                      : theme.palette.text.secondary,
                  minWidth: 36,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {item.label}
                  </Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
      <Box sx={{ px: 2, display: "flex", alignItems: "center", gap: 1.2 }}>
        <Box
          sx={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: "2px solid",
            borderColor: alpha("#000", 0.4),
            display: "grid",
            placeItems: "center",
          }}
          aria-hidden
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: alpha("#000", 0.6) }} />
        </Box>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Admin
        </Typography>
      </Box>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
        {/* Top App Bar */}
        <AppBar
          position="fixed"
          color="transparent"
          elevation={0}
          sx={{
            borderBottom: "1px solid",
            borderColor: "divider",
            backdropFilter: "saturate(180%) blur(8px)",
            backgroundColor: alpha(theme.palette.background.default, 0.9),
          }}
        >
          <Toolbar sx={{ minHeight: 72, px: 2 }}>
            {!isMdUp && (
              <IconButton
                edge="start"
                onClick={() => setMobileOpen(true)}
                aria-label="open sidebar"
                sx={{ mr: 1.5 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" sx={{ fontWeight: 800, color: theme.palette.primary.main }}>
              Local Service Find
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <nav aria-label="Top navigation">
              <Stack direction="row" spacing={3} alignItems="center">
                {navTopLinks.map((n) => (
                  <MuiLink
                    key={n.label}
                    component="button"
                    underline="none"
                    color="text.secondary"
                    sx={{
                      display: { xs: "none", sm: "inline-flex" },
                      alignItems: "center",
                      gap: 0.7,
                      fontSize: 14,
                      "&:hover": { color: "text.primary" },
                    }}
                  >
                    {n.icon}
                    {n.label}
                  </MuiLink>
                ))}
              </Stack>
            </nav>
          </Toolbar>
        </AppBar>

        {/* Sidebar */}
        <Box
          component="aside"
          sx={{
            width: { md: drawerWidth },
            flexShrink: 0,
          }}
        >
          {/* Mobile temporary drawer */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                p: 1,
              },
            }}
          >
            {drawer}
          </Drawer>
          {/* Desktop permanent drawer */}
          <Drawer
            variant="permanent"
            open
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                p: 1,
                borderRight: "1px solid",
                borderColor: "divider",
                backgroundColor: "#f7f9ff",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 10, sm: 12 },
            ml: { md: `${drawerWidth}px` },
          }}
        >
          <Toolbar sx={{ display: { xs: "block", md: "none" } }} />
          <Typography variant="h5" sx={{ mb: 2, color: "#4d5ef6" }}>
            Dashboard
          </Typography>

          {/* Metric cards grid */}
          <Box
            component="section"
            aria-label="Key metrics"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "repeat(3, minmax(0,1fr))",
                lg: "repeat(6, minmax(0,1fr))",
              },
              gap: 2,
              mb: 2.5,
            }}
          >
            {metrics.map((m) => (
              <StatCard key={m.label} {...m} />
            ))}
          </Box>

          {/* Activity chart */}
          <ActivityCard />

          {/* Footer mimic spacing */}
          <Divider sx={{ my: 3 }} />
          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
            <Tooltip title="Material UI components">
              <Chip variant="outlined" label="Material UI" />
            </Tooltip>
            <Tooltip title="Recharts responsive bar">
              <Chip color="primary" variant="outlined" label="Recharts" />
            </Tooltip>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
