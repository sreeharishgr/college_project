import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Typography,
  Link as MuiLink,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Grid,
  Divider,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";

// function Header() {
//   return (
//     <AppBar position="sticky" elevation={0} color="transparent" sx={{ backdropFilter: "blur(6px)" }}>
//       <Container maxWidth="lg">
//         <Toolbar disableGutters sx={{ gap: 2, py: 1 }}>
//           <Typography variant="h6" sx={{ color: "#5b5bd6", fontWeight: 700 }}>
//             Local Service Find
//           </Typography>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
//             <MuiLink href="#" underline="none" color="text.primary">Home</MuiLink>
//             <MuiLink href="#" underline="none" color="text.primary">Terms</MuiLink>
//             <MuiLink href="#" underline="none" color="text.primary">About</MuiLink>
//             <MuiLink href="#" underline="none" color="text.primary">Contact</MuiLink>
//           </Box>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             <Button variant="contained" sx={{ ml: 2, bgcolor: "#6c63ff" }}>
//               List Your Business
//             </Button>
//           </Box>
//           <IconButton sx={{ display: { xs: "inline-flex", sm: "none" }, ml: 1 }}>
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </Container>
//       <Divider />
//     </AppBar>
//   );
// }

function LoginCard() {
  const [showPwd, setShowPwd] = React.useState(false);

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: { xs: "calc(100dvh - 320px)", md: "calc(100dvh - 360px)" },
        display: "grid",
        placeItems: "center",
        bgcolor: "rgba(99, 102, 241, 0.06)",

      }}
    >
      <Paper
        variant="outlined"
        sx={{
          width: "100%",
          maxWidth: 520,
          p: { xs: 3, sm: 4 },
          borderRadius: 2,
        }}
      >
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>User Protal</Typography>
          <Typography variant="body2" color="text.secondary">Access your account</Typography>
        </Box>

        <Box component="form" noValidate autoComplete="off">
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            Email address<span style={{ color: "#ef4444" }}> *</span>
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="you@example.com"
            type="email"
            margin="dense"
          />
          <Typography variant="caption" sx={{ fontWeight: 600, mt: 1, display: "block" }}>
            Password<span style={{ color: "#ef4444" }}> *</span>
          </Typography>
          <TextField
            fullWidth
            size="small"
            type={showPwd ? "text" : "password"}
            placeholder="••••••••"
            margin="dense"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPwd((s) => !s)} edge="end" aria-label="toggle password">
                    {showPwd ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, bgcolor: "#2563eb", py: 1.1, textTransform: "none", fontWeight: 600 }}
          >
            Login
          </Button>
        </Box>

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Don’t have an account?{" "}
            <MuiLink href="#" underline="hover">Register</MuiLink>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mt: 1 }}>
            <ArrowBackIosNew fontSize="small" />
            <MuiLink href="#" underline="hover">Back to home</MuiLink>
          </Box>
        </Box>
      </Paper>  
    </Container>
  );
}

// function Footer() {
//   return (
//     <Box component="footer" sx={{ bgcolor: "#0f172a", color: "rgba(255,255,255,0.9)", pt: 6 }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" sx={{ mb: 1 }}>LocalFind</Typography>
//             <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
//               Connecting you with trusted local service providers in your area.
//             </Typography>
//           </Grid>
//           <Grid item xs={6} sm={4} md={2}>
//             <Typography variant="subtitle1" sx={{ mb: 1 }}>Services</Typography>
//             <Box sx={{ display: "grid", gap: 1 }}>
//               <MuiLink color="inherit" underline="hover" href="#">Home Repair</MuiLink>
//               <MuiLink color="inherit" underline="hover" href="#">Cleaning</MuiLink>
//               <MuiLink color="inherit" underline="hover" href="#">Landscaping</MuiLink>
//               <MuiLink color="inherit" underline="hover" href="#">Electrical</MuiLink>
//             </Box>
//           </Grid>
//           <Grid item xs={6} sm={4} md={2}>
//             <Typography variant="subtitle1" sx={{ mb: 1 }}>Company</Typography>
//             <Box sx={{ display: "grid", gap: 1 }}>
//               <MuiLink color="inherit" underline="hover" href="#">About Us</MuiLink>
//               <MuiLink color="inherit" underline="hover" href="#">Contact</MuiLink>
//               <MuiLink color="inherit" underline="hover" href="#">Privacy Policy</MuiLink>
//               <MuiLink color="inherit" underline="hover" href="#">Terms of Service</MuiLink>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={4} md={2}>
//             <Typography variant="subtitle1" sx={{ mb: 1 }}>Connect</Typography>
//             <Box sx={{ display: "grid", gap: 1 }}>
//               <MuiLink color="inherit" underline="hover" href="#">Facebook</MuiLink>
//               <MuiLink color="inherit" underline="hover" href="#">Twitter</MuiLink>
//               <MuiLink color="inherit" underline="hover" href="#">Instagram</MuiLink>
//               <MuiLink color="inherit" underline="hover" href="#">LinkedIn</MuiLink>
//             </Box>
//           </Grid>
//         </Grid>
//         <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", my: 3 }} />
//         <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", pb: 4, textAlign: "center" }}>
//           © 2024 LocalFind. All rights reserved.
//         </Typography>
//       </Container>
//     </Box>
//   );
// }

export default function App() {
  return (
    <Box sx={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      {/* <Header /> */}
      <LoginCard />
      {/* <Footer /> */}
    </Box>
  );
}
