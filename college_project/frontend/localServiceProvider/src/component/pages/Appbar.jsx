import React from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Stack,
  Link,
  Button,
  IconButton,
} from "@mui/material";
import { PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";

const defaultNav = ["Home", "Services", "About", "Contact"];

function Header({ navItems = defaultNav, onNavClick }) {
  return (
    <>
      <Link
        href="#main"
        sx={{
          position: "absolute",
          left: -9999,
          top: -9999,
          "&:focus": {
            left: 16,
            top: 8,
            zIndex: 1301,
            bgcolor: "background.paper",
            p: 1,
            borderRadius: 1,
            boxShadow: 2,
          },
        }}
      >
        Skip to content
      </Link>

      <MuiAppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255,255,255,.7)",
          backdropFilter: "saturate(180%) blur(8px)",
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: "divider",
          width: "100%",
        }}
      >
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" fontWeight={800} sx={{ flexGrow: 1 }}>
            Local Service Find
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((n) => (
              <Link
                key={n}
                underline="none"
                color="text.primary"
                href="#"
                onClick={(e) => {
                  if (onNavClick) {
                    e.preventDefault();
                    onNavClick(n);
                  }
                }}
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                {n}
              </Link>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              variant="contained"
              size="small"
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            >
              List Your Business
            </Button>
            <IconButton size="small" aria-label="account">
              <PersonOutline />
            </IconButton>
            <IconButton size="small" aria-label="cart">
              <ShoppingCartOutlined />
            </IconButton>
          </Stack>
        </Toolbar>
      </MuiAppBar>
    </>
  );
}

export default Header;

