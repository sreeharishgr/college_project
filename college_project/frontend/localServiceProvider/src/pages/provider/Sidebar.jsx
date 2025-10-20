import React from "react";
import { Drawer, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard as DashboardIcon, History, Notifications, Logout, Person } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom"; // 👈 added

const Sidebar = () => {
  const location = useLocation(); // 👈 to highlight active menu

  // Helper to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          bgcolor: "#fff",
          borderRight: "none",
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#5c6bc0",
            fontWeight: 600,
            fontSize: 22,
            mb: 4,
          }}
        >
          Local Service Find
        </Typography>
      </Box>

      <List sx={{ px: 2 }}>
        {/* Dashboard */}
        <ListItem
          component={Link}
          to="/dashboard"
          button
          sx={{
            borderRadius: 1,
            mb: 1,
            bgcolor: isActive("/dashboard") ? "#e8eaf6" : "transparent",
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            <DashboardIcon sx={{ color: isActive("/dashboard") ? "#3f51b5" : "#666" }} />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            primaryTypographyProps={{
              fontSize: 15,
              color: isActive("/dashboard") ? "#3f51b5" : "#333",
              fontWeight: isActive("/dashboard") ? 600 : 400,
            }}
          />
        </ListItem>

        {/* Rating History */}
        <ListItem
          component={Link}
          to="/rating-history"
          button
          sx={{
            borderRadius: 1,
            mb: 1,
            bgcolor: isActive("/rating-history") ? "#e8eaf6" : "transparent",
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            <History sx={{ color: isActive("/rating-history") ? "#3f51b5" : "#666" }} />
          </ListItemIcon>
          <ListItemText
            primary="Rating History"
            primaryTypographyProps={{
              fontSize: 15,
              color: isActive("/rating-history") ? "#3f51b5" : "#333",
              fontWeight: isActive("/rating-history") ? 600 : 400,
            }}
          />
        </ListItem>

        {/* Notification */}
        <ListItem
          component={Link}
          to="/notifications"
          button
          sx={{
            borderRadius: 1,
            mb: 1,
            bgcolor: isActive("/notifications") ? "#e8eaf6" : "transparent",
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            <Notifications sx={{ color: isActive("/notifications") ? "#3f51b5" : "#666" }} />
          </ListItemIcon>
          <ListItemText
            primary="Notification"
            primaryTypographyProps={{
              fontSize: 15,
              color: isActive("/notifications") ? "#3f51b5" : "#333",
              fontWeight: isActive("/notifications") ? 600 : 400,
            }}
          />
        </ListItem>

        {/* Logout */}
        <ListItem
          button
          sx={{
            borderRadius: 1,
            mb: 1,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            <Logout sx={{ color: "#666" }} />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{ fontSize: 15, color: "#333" }}
          />
        </ListItem>
      </List>

      {/* Footer (Admin Profile) */}
      <Box
        sx={{
          mt: "auto",
          p: 2,
          borderTop: "1px solid #e0e0e0",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            bgcolor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Person sx={{ color: "#fff" }} />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Admin
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
