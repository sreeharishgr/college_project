// import React from "react";
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
// import { useNavigate } from 'react-router-dom';


// const defaultNav = ["Home", "Services", "About", "Contact"];

// function Header({ navItems = defaultNav, onNavClick }) {
//   const navigate = useNavigate();
//   const handleClick = (item) => {
//     if (item === "Services") {
//       navigate('/Services'); 
//     } else if (item === "Home") {
//       navigate('/'); 
//     } 
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

//       <MuiAppBar
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

//           <Stack
//             direction="row"
//             spacing={2}
//             sx={{ display: { xs: "none", md: "flex" } }}
//           >
//             {defaultNav.map((n) => (
//               <Link
//                 key={n}
//                 underline="none"
//                 color="text.primary"
//                 href="#"
//                 onClick={() => {
//                     handleClick(n);
//                 }}
//                 sx={{ "&:hover": { color: "blue" } }}
//               >
//                 {n}
//               </Link>
//           ))} 
//           </Stack>

//           <Stack direction="row" spacing={1} alignItems="center">
//             <Button
//               variant="contained"
//               size="small"
//               sx={{ display: { xs: "none", sm: "inline-flex" },       background:
//           "linear-gradient(135deg, rgba(76,29,149,1) 0%, rgba(88,28,135,1) 40%, rgba(30,64,175,1) 100%)", }}
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
//       </MuiAppBar>
//     </>
//   );
// }

// export default Header;

// import React from "react";
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
// const [active, setActive] = useState("");

// const defaultNav = ["Home", "Services", "About", "Contact"];

// function Header({ navItems = defaultNav }) {
  
//   const navigate = useNavigate();

//   const routeMap = {
//     Home: "/",
//     Services: "/service",
//     About: "/About",
//     Contact: "/Contact",
//   };

//   const handleClick = (item) => {
//     if (routeMap[item]) navigate(routeMap[item]);
//   };

//   const handleClicks = (n) => {
//     setActive(n);
//   };
//   return (
//     <>
//       {/* Skip to content link for accessibility */}
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

//       <MuiAppBar
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
//             {/* {navItems.map((n) => (
//               <Link
//                 key={n}
//                 underline="none"
//                 color="text.primary"
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleClick(n);
//                 }}
//                 sx={{ "&:hover": { color: "blue" } }}
//               >
//                 {n}
//               </Link>
//             ))} */}
//             {navItems.map((n) => (
//           <Link
//             key={n}
//             underline="none"
//             color={active === n ? "white" : "text.primary"}
//             href="#"
//             onClick={(e) => {
//               e.preventDefault();
//               handleClicks(n);
//             }}
//             sx={{
//               px: 2,
//               py: 1,
//               borderRadius: "8px",
//               backgroundColor: active === n ? "#1976d2" : "transparent",
//               transition: "all 0.3s ease",
//               "&:hover": {
//                 backgroundColor: active === n ? "#1565c0" : "#f0f0f0",
//               },
//             }}
//           >
//             {n}
//           </Link>
//         ))}
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
//       </MuiAppBar>
//     </>
//   );
// }

// export default Header;


import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const defaultNav = ["Home", "Services", "About", "Contact"];

function Header({ navItems = defaultNav }) {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home"); // ✅ must be inside component

  const routeMap = {
    Home: "/",
    Services: "/service",
    About: "/about",
    Contact: "/contact",
  };

  const handleClick = (item) => {
    if (routeMap[item]) navigate(routeMap[item]);
    setActive(item); // ✅ also set active here
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
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

          {/* Desktop nav */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((n) => (
              <Link
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
              </Link>
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
                    background:'#009973ff',
                    transform: "scale(1.03)"
                  },    
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
    </>
  );
}

export default Header;

