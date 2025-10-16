

// import React, { useState } from "react";
// import {
//   AppBar as MuiAppBar,
//   Toolbar,
//   Typography,
//   Stack,
//   Link,
//   Button,
//   IconButton,
// } from "@mui/material";
// import { PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { Drawer, List, ListItemButton, ListItemText, Divider, IconButton,Toolbar } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";


// const defaultNav = ["Home", "Services", "About", "Contact"];

// function Header({ navItems = defaultNav }) {
//   const [mobileOpen, setMobileOpen] = useState(false);
// const toggleMobile = (open) => () => setMobileOpen(open);

//   const navigate = useNavigate();
//   const [active, setActive] = useState("Home"); 

//   const routeMap = {
//     Home: "/",
//     Services: "/service",
//     About: "/about",
//     Contact: "/contact",
//   };

//   const handleClick = (item) => {
//     if (routeMap[item]) navigate(routeMap[item]);
//     setActive(item); 
//   };

//   return (
//     <>
//       <Link
//         href="#main"
//         sx={{
//           position: "absolute",
//           left: -9999,
//           top: -9999,
//           "&:focus": {
//             left: 16,
//             top: 8,
//             zIndex: 1301,
//             bgcolor: "background.paper",
//             p: 1,
//             borderRadius: 1,
//             boxShadow: 2,
//           },
//         }}
//       >
//         Skip to content
//       </Link>
//       {/* <MuiAppBar
//         position="sticky"
//         elevation={0}
//         sx={{
//           backgroundColor: "rgba(255,255,255,.7)",
//           backdropFilter: "saturate(180%) blur(8px)",
//           color: "text.primary",
//           borderBottom: "1px solid",
//           borderColor: "divider",
//           width: "100%",
//         }}
//       >
//         <Toolbar sx={{ gap: 2 }}>
//           <Typography variant="h6" fontWeight={800} sx={{ flexGrow: 1 }}>
//             Local Service Find
//           </Typography>

//           {/* Desktop nav */}
//           <Stack
//             direction="row"
//             spacing={2}
//             sx={{ display: { xs: "none", md: "flex" } }}
//           >
//             {navItems.map((n) => (
//               <Link
//                 key={n}
//                 underline="none"
//                 component="button"
//                 onClick={() => handleClick(n)}
//                 sx={{
//                   px: 2,
//                   py: 1,
//                   borderRadius: "8px",
//                   color: active === n ? "#fff" : "text.primary",
//                   backgroundColor: active === n ? "#009973ff" : "transparent",
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     backgroundColor:
//                       active === n ? "#009973ff" : "rgba(0,0,0,0.04)",
//                   },
//                 }}
//               >
//                 {n}
//               </Link>
//             ))}
//           </Stack>

//           {/* Actions */}
//           <Stack direction="row" spacing={1} alignItems="center">
//             <Button
//               variant="contained"
//               size="small"
//               sx={{
//                 display: { xs: "none", sm: "inline-flex" },
//                 background:
//                   "linear-gradient(135deg, #4c1d95 0%, #581c87 40%, #1e40af 100%)",
//                 textTransform: "none",
//                 fontWeight: 600,
//                 borderRadius: 2,
//                   transition: "background 0.4s ease, transform 0.2s ease",
//                   "&:hover": {
//                     background:'#009973ff',
//                     transform: "scale(1.03)"
//                   },    
//               }}
//             >
//               List Your Business
//             </Button>
//             <IconButton size="small" aria-label="account">
//               <PersonOutline />
//             </IconButton>
//             <IconButton size="small" aria-label="cart">
//               <ShoppingCartOutlined />
//             </IconButton>
//           </Stack>
//         </Toolbar>
//       // </MuiAppBar> */}
//       <Toolbar sx={{ gap: 2 }}>
//   <IconButton
//     aria-label="open navigation"
//     onClick={toggleMobile(true)}
//     edge="start"
//     sx={{ display: { xs: "inline-flex", md: "none" } }}
//   >
//     <MenuIcon />
//   </IconButton>

//   <Typography variant="h6" fontWeight={800} sx={{ flexGrow: 1 }}>
//     Local Service Find
//   </Typography>

//   {/* Desktop nav (unchanged) */}
//   <Stack
//     direction="row"
//     spacing={2}
//     sx={{ display: { xs: "none", md: "flex" } }}
//   >
//     {/* ...links... */}
//   </Stack>

//   {/* Actions (unchanged) */}
//   {/* ... */}
// </Toolbar>

//   );
// }

// export default Header;



import React, { useState } from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Stack,
  Link as MuiLink,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { Login, PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const defaultNav = ["Home", "Services", "About", "Contact", "AdminDashboard","Login"];

function Header({ navItems = defaultNav }) {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = (open) => () => setMobileOpen(open);

  const routeMap = {
    Home: "/",
    Services: "/service",
    About: "/about",
    Contact: "/contact",
    AdminDashboard: "/AdminDashboard",
    Login: "/userlogin",
  };

  const handleClick = (item) => {
    if (routeMap[item]) navigate(routeMap[item]);
    setActive(item);
  };

  return (
    <>
      {/* Skip link for accessibility */}
      <MuiLink
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
      </MuiLink>

      {/* AppBar */}
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
          {/* Hamburger for mobile/tablet */}
          <IconButton
            aria-label="open navigation"
            onClick={toggleMobile(true)}
            edge="start"
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Brand */}
          <Typography variant="h6" fontWeight={800} sx={{ flexGrow: 1 }}>
            Local Service Find
          </Typography>

          {/* Desktop nav */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((n) => (
              <MuiLink
                key={n}
                underline="none"
                component="button"
                onClick={() => handleClick(n)}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  color: active === n ? "#fff" : "text.primary",
                  backgroundColor: active === n ? "#009973ff" : "transparent",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor:
                      active === n ? "#009973ff" : "rgba(0,0,0,0.04)",
                  },
                }}
              >
                {n}
              </MuiLink>
            ))}
          </Stack>

          {/* Actions */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              variant="contained"
              size="small"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                background:
                  "linear-gradient(135deg, #4c1d95 0%, #581c87 40%, #1e40af 100%)",
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                transition: "background 0.4s ease, transform 0.2s ease",
                "&:hover": {
                  background: "#009973ff",
                  transform: "scale(1.03)",
                },
              }}
              onClick={() => {
                // add action handler if needed
              }}
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

      {/* Mobile/Tablet Drawer */}
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
              key={n}
              selected={active === n}
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
                primary={n}
                primaryTypographyProps={{
                  fontWeight: active === n ? 700 : 500,
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
