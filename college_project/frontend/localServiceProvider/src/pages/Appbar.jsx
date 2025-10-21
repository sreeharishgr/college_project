import React, { useState } from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Stack,
  Link as MuiLink,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Tooltip,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearAccount } from "../redux/slices/accountSlice"; // ✅ adjust import path as needed
import axios from "axios";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ Get user info from Redux
  const account = useSelector((state) => state.account.account);
  const role = account?.role || "guest"; // fallback
  const name = account?.full_name || account?.username || "Guest";

  const toggleMobile = (open) => () => setMobileOpen(open);

  // ✅ Role-based nav definitions
  const navByRole = {
    guest: [
      { label: "Login", path: "/" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
    ],
    user: [
      { label: "Home", path: "/home" },
      { label: "Services", path: "/services" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
    ],
    provider: [{ label: "Home", path: "/provider-home" }],
    admin: [
      { label: "Dashboard", path: "/admin-dashboard" },
      { label: "Services", path: "/services" },
      { label: "Notifications", path: "/notifications" },
      { label: "Rating History", path: "/RatingHistory" },
    ],
  };

  const navItems = navByRole[role] || navByRole.guest;

  const handleClick = (item) => {
    navigate(item.path);
    setActive(item.label);
  };

  // ✅ Logout handler
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("AccountToken");

      // Call backend logout
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/log-out`, // ✅ adjust your actual API base URL
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        console.log("✅ Logout success:", res.data.message);
        localStorage.removeItem("AccountToken");
        dispatch(clearAccount());
        navigate("/");
      } else {
        console.warn("⚠️ Logout failed on server:", res.data);
      }
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  return (
    <>
      <MuiAppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255,255,255,.7)",
          backdropFilter: "saturate(180%) blur(8px)",
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ gap: 2 }}>
          {/* Hamburger for mobile */}
          <IconButton
            aria-label="open navigation"
            onClick={toggleMobile(true)}
            edge="start"
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Brand */}
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{
              flexGrow: 1,
              fontSize: {
                md: "1.5rem",
                lg: "1.5rem",
              },
            }}
          >
            Local Service Find
          </Typography>

          {/* Desktop navigation */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((n) => (
              <MuiLink
                key={n.label}
                underline="none"
                component="button"
                onClick={() => handleClick(n)}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  color: active === n.label ? "#fff" : "text.primary",
                  backgroundColor:
                    active === n.label ? "#009973ff" : "transparent",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor:
                      active === n.label ? "#009973ff" : "rgba(0,0,0,0.04)",
                  },
                }}
              >
                {n.label}
              </MuiLink>
            ))}
          </Stack>

          {/* ✅ Show logout only if NOT guest */}
          {role !== "guest" && !mobileOpen && (
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "8px",
                }}
              >
                <PersonOutlineIcon sx={{ fontSize: 20, mr: 0.5 }} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {name} ({role})
                </Typography>
              </Box>

              <Tooltip title="Logout">
                <IconButton onClick={handleLogout} color="inherit">
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          )}
        </Toolbar>
      </MuiAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleMobile(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: 260,
            borderRight: "1px solid",
            borderColor: "divider",
            backgroundColor: "rgba(255,255,255,.9)",
            backdropFilter: "saturate(180%) blur(8px)",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {navItems.map((n) => (
            <ListItemButton
              key={n.label}
              selected={active === n.label}
              onClick={() => {
                handleClick(n);
                setMobileOpen(false);
              }}
              sx={{
                borderRadius: 1,
                mx: 1,
                my: 0.5,
                "&.Mui-selected": {
                  bgcolor: "rgba(0,0,0,0.06)",
                },
              }}
            >
              <ListItemText
                primary={n.label}
                primaryTypographyProps={{
                  fontWeight: active === n.label ? 700 : 500,
                }}
              />
            </ListItemButton>
          ))}

          {/* ✅ Logout button inside mobile drawer */}
          {role !== "guest" && (
            <>
              <Divider sx={{ my: 1 }} />
              <ListItemButton onClick={handleLogout}>
                <LogoutIcon sx={{ mr: 1 }} />
                <ListItemText primary="Logout" />
              </ListItemButton>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
