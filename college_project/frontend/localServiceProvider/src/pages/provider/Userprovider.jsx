import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Stack,
  Button,
  Paper,
  Grid,
  Avatar,
  Link,
  IconButton,
} from "@mui/material";
import { PersonOutline, AdminPanelSettings, HealthAndSafety } from "@mui/icons-material";

function NavBar() {
  return (
      <Toolbar sx={{ minHeight: 60, px: { xs: 2, md: 4 } }}>
        <Typography variant="h6" fontWeight={800} sx={{ color: "#4F46E5", mr: 3 }}>
          Local Service Find
        </Typography>
        <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
          {["Home", "Terms", "About", "Contact"].map((item) => (
            <Link key={item} underline="none" color="inherit" sx={{ "&:hover": { color: "#4F46E5" } }}>
              {item}
            </Link>
          ))}
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="contained"
          size="small"
          sx={{
            bgcolor: "#4F46E5",
            "&:hover": { bgcolor: "#4338CA" },
            borderRadius: 1.5,
            height: 36,
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          List Your Business
        </Button>
      </Toolbar>
  );
}

function RoleCard({ color, icon, title, subtitle, cta, onClick }) {
  return (
    <Paper
      role="button"
      tabIndex={0}
      elevation={2}
      onClick={onClick}
      sx={{
        p: { xs: 2.5, md: 3,lg:3 },
        borderRadius: 2,
        outline: "none",
        "&:focus-visible": { boxShadow: `0 0 0 3px ${color}33` },
        width:'310px',
        height:'310px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      }}
    >
      <Stack spacing={3} sx={{display:'flex',alignItems:'center'}}>
        <Avatar sx={{ width: 84, height: 84, bgcolor: `${color}1A`, color }}>{icon}</Avatar>
        <Stack spacing={0.5} alignItems="center" textAlign="center">
          <Typography variant="subtitle1" fontWeight={800} sx={{ color: "#0F172A",fontSize:{xs:'1.3rem',md:'1.5rem',lg:'1.5rem'} }}>
            {title} 
          </Typography>
          <Typography variant="body2" sx={{ color: "#64748B",fontSize:{xs:'0.9rem',md:'1rem',lg:'1rem'} }}>
            {subtitle}
          </Typography>
        </Stack>
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 0.5,
            bgcolor: color,
            "&:hover": { bgcolor: color === "#22C55E" ? "#16A34A" : "#4338CA" },
            height: 40,
            borderRadius: 1.5,
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          {cta}
        </Button>
      </Stack>
    </Paper>
  );
}

export default function HomeChoice() {
  return (
    <Box component="main" id="main" sx={{ bgcolor: "#E9F1FF", minHeight: "98dvh" }}>
      <Box
        sx={{
          position: "fixed",
          top: { xs: 76, md: 84 },
          right: { xs: 12, md: 24 },
          zIndex: 1200,
          borderRadius: 2,
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
          bgcolor: "#0F172A",
          color: "#FFFFFF",
          px: 2.5,
          py: 1,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <IconButton size="small" sx={{ color: "white", p: 0.5 }}>
          <AdminPanelSettings fontSize="large" />
        </IconButton>
        <Typography variant="body2">Admin</Typography>
      </Box>
      {/* Hero area */}
      <Container component="section" aria-labelledby="choice-heading" maxWidth="xxl" sx={{ py: { xs: 6, md: 10 }, textAlign: "center",height:'97dvh',display:'flex',flexDirection:'column',justifyContent:'center' }}>
        <Stack spacing={1.2} alignItems="center" sx={{ mb: { xs: 3, md: 5 } }}>
          <Typography
            id="choice-heading"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.2rem",lg:'2.5rem' },
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: 0.2,
              color: "#0F172A",
            }}
          >
            Find Local Services
          </Typography>
        <Typography sx={{ color: "#64748B", fontSize: { xs: "0.95rem", md: "1rem",lg:'1rem' } }}>
            Connect with trusted service providers in your area
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 3,sm:2, md:2,lg:2}}>
          <Grid sx={{display:'flex',justifyContent:'end'}} size={{ xs:5,sm:10,md:6}}>
            <RoleCard
              color="#4F46E5"
              icon={<PersonOutline />}
              title="I’m a User"
              subtitle="Looking for local service provider"
              cta="Get Started"
              onClick={() => {}}
            //   justifyContent='end'
            />
          </Grid>
          <Grid sx={{display:'flex',justifyContent:'start'}} size={{ xs:5,sm:10,md:6}}>
            <RoleCard
              color="#22C55E"
              icon={<HealthAndSafety />}
              title="I’m a Provider"
              subtitle="Offering services to local customers"
              cta="Join Now"
              onClick={() => {}}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      {/* <Box component="footer" sx={{ bgcolor: "#0F172A", color: "white", pt: { xs: 6, md: 8 }, pb: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 6 }}>
            <Grid item xs={12} md={3}>
              <Typography sx={{ fontSize: "1.1rem", fontWeight: 800 }}>LocalFind</Typography>
              <Typography sx={{ color: "#CBD5E1", mt: 1.5, fontSize: "0.9rem" }}>
                Connecting you with trusted local service providers in your area.
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography sx={{ color: "#E2E8F0", fontWeight: 700, mb: 1, fontSize: "0.85rem" }}>Services</Typography>
              <Stack spacing={1}>
                {["Home Repair", "Cleaning", "Landscaping", "Electrical"].map((t) => (
                  <Link key={t} underline="none" sx={{ color: "#94A3B8", "&:hover": { color: "#FFFFFF" }, fontSize: "0.9rem" }} href="#">
                    {t}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography sx={{ color: "#E2E8F0", fontWeight: 700, mb: 1, fontSize: "0.85rem" }}>Company</Typography>
              <Stack spacing={1}>
                {["About Us", "Contact", "Privacy Policy", "Terms of Service"].map((t) => (
                  <Link key={t} underline="none" sx={{ color: "#94A3B8", "&:hover": { color: "#FFFFFF" }, fontSize: "0.9rem" }} href="#">
                    {t}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography sx={{ color: "#E2E8F0", fontWeight: 700, mb: 1, fontSize: "0.85rem" }}>Connect</Typography>
              <Stack spacing={1}>
                {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((t) => (
                  <Link key={t} underline="none" sx={{ color: "#94A3B8", "&:hover": { color: "#FFFFFF" }, fontSize: "0.9rem" }} href="#">
                    {t}
                  </Link>
                ))}
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.08)", mt: { xs: 4, md: 6 }, pt: 3, textAlign: "center" }}>
            <Typography sx={{ color: "#94A3B8", fontSize: "0.8rem" }}>
              © 2024 LocalFind. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box> */}
    </Box>
  );
}

//provider login
// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Container,
//   Box,
//   Stack,
//   Button,
//   Paper,
//   Grid,
//   TextField,
//   Link,
//   Divider,
// } from "@mui/material";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// function NavBar() {
//   return (
//     <AppBar
//       position="sticky"
//       elevation={0}
//       sx={{
//         bgcolor: "#FFFFFF",
//         color: "#0F172A",
//         borderBottom: "1px solid #E2E8F0",
//       }}
//     >
//       <Toolbar sx={{ minHeight: 60, px: { xs: 2, md: 4 } }}>
//         <Typography
//           variant="h6"
//           fontWeight={800}
//           sx={{ color: "#4F46E5", mr: 3 }}
//         >
//           Local Service Find
//         </Typography>

//         <Stack
//           direction="row"
//           spacing={3}
//           sx={{ display: { xs: "none", md: "flex" } }}
//         >
//           {["Home", "Terms", "About", "Contact"].map((item) => (
//             <Link
//               key={item}
//               underline="none"
//               color="inherit"
//               sx={{ "&:hover": { color: "#4F46E5" } }}
//               href="#"
//             >
//               {item}
//             </Link>
//           ))}
//         </Stack>

//         <Box sx={{ flexGrow: 1 }} />

//         <Button
//           variant="contained"
//           size="small"
//           sx={{
//             bgcolor: "#6D5DF6",
//             "&:hover": { bgcolor: "#5B4EE8" },
//             borderRadius: 1.5,
//             height: 36,
//             fontWeight: 700,
//             textTransform: "none",
//           }}
//         >
//           List Your Business
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default function ProviderLogin() {
//   return (
//     <Box sx={{ bgcolor: "#E9F1FF", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
//       <NavBar />

//       {/* Centered login card */}
//       <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 }, flex: 1 }}>
//         <Grid container justifyContent="center">
//           <Grid item xs={12} sm={10} md={6}>
//             <Paper
//               component="section"
//               aria-labelledby="provider-login-title"
//               elevation={2}
//               sx={{
//                 p: { xs: 3, md: 4 },
//                 borderRadius: 2,
//                 border: "1px solid #E5E7EB",
//                 mx: "auto",
//               }}
//             >
//               <Stack spacing={1} alignItems="center" textAlign="center" mb={2}>
//                 <Typography
//                   id="provider-login-title"
//                   sx={{
//                     fontSize: { xs: "1.25rem", md: "1.35rem" },
//                     fontWeight: 800,
//                     color: "#0F172A",
//                   }}
//                 >
//                   Provider Login
//                 </Typography>
//                 <Typography sx={{ color: "#64748B", fontSize: "0.95rem" }}>
//                   Access your account
//                 </Typography>
//               </Stack>

//               <Stack spacing={2.5}>
//                 <Box>
//                   <Typography
//                     variant="caption"
//                     sx={{ color: "#0F172A", fontWeight: 600 }}
//                     component="label"
//                     htmlFor="email"
//                   >
//                     Email address <span style={{ color: "#EF4444" }}>*</span>
//                   </Typography>
//                   <TextField
//                     id="email"
//                     fullWidth
//                     placeholder="you@example.com"
//                     size="small"
//                     type="email"
//                     autoComplete="email"
//                     sx={{
//                       mt: 0.75,
//                       "& .MuiOutlinedInput-root": {
//                         bgcolor: "#FFFFFF",
//                         borderRadius: 1.25,
//                       },
//                     }}
//                   />
//                 </Box>

//                 <Box>
//                   <Typography
//                     variant="caption"
//                     sx={{ color: "#0F172A", fontWeight: 600 }}
//                     component="label"
//                     htmlFor="password"
//                   >
//                     Password <span style={{ color: "#EF4444" }}>*</span>
//                   </Typography>
//                   <TextField
//                     id="password"
//                     fullWidth
//                     placeholder="••••••••"
//                     size="small"
//                     type="password"
//                     autoComplete="current-password"
//                     sx={{
//                       mt: 0.75,
//                       "& .MuiOutlinedInput-root": {
//                         bgcolor: "#FFFFFF",
//                         borderRadius: 1.25,
//                       },
//                     }}
//                   />
//                 </Box>

//                 <Button
//                   type="submit"
//                   variant="contained"
//                   fullWidth
//                   sx={{
//                     bgcolor: "#2563EB",
//                     "&:hover": { bgcolor: "#1D4ED8" },
//                     height: 44,
//                     borderRadius: 1.25,
//                     fontWeight: 700,
//                     textTransform: "none",
//                   }}
//                 >
//                   Login
//                 </Button>

//                 <Typography sx={{ color: "#64748B", textAlign: "center" }}>
//                   Don’t have an account?{" "}
//                   <Link href="#" underline="hover" sx={{ color: "#2563EB", fontWeight: 600 }}>
//                     Register
//                   </Link>
//                 </Typography>

//                 <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
//                   <ArrowBackIosNewIcon sx={{ fontSize: 14, color: "#64748B" }} />
//                   <Link href="#" underline="hover" sx={{ color: "#64748B" }}>
//                     Back to home
//                   </Link>
//                 </Stack>
//               </Stack>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Footer */}
//       <Box component="footer" sx={{ bgcolor: "#0F172A", color: "#FFFFFF", pt: { xs: 6, md: 8 }, pb: 4 }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={{ xs: 3, md: 6 }}>
//             <Grid item xs={12} md={3}>
//               <Typography sx={{ fontSize: "1.1rem", fontWeight: 800 }}>
//                 LocalFind
//               </Typography>
//               <Typography sx={{ color: "#CBD5E1", mt: 1.5, fontSize: "0.9rem" }}>
//                 Connecting you with trusted local service providers in your area.
//               </Typography>
//             </Grid>

//             <Grid item xs={6} md={3}>
//               <Typography sx={{ color: "#E2E8F0", fontWeight: 700, mb: 1, fontSize: "0.85rem" }}>
//                 Services
//               </Typography>
//               <Stack spacing={1}>
//                 {["Home Repair", "Cleaning", "Landscaping", "Electrical"].map((t) => (
//                   <Link key={t} href="#" underline="none" sx={{ color: "#94A3B8", "&:hover": { color: "#FFFFFF" }, fontSize: "0.9rem" }}>
//                     {t}
//                   </Link>
//                 ))}
//               </Stack>
//             </Grid>

//             <Grid item xs={6} md={3}>
//               <Typography sx={{ color: "#E2E8F0", fontWeight: 700, mb: 1, fontSize: "0.85rem" }}>
//                 Company
//               </Typography>
//               <Stack spacing={1}>
//                 {["About Us", "Contact", "Privacy Policy", "Terms of Service"].map((t) => (
//                   <Link key={t} href="#" underline="none" sx={{ color: "#94A3B8", "&:hover": { color: "#FFFFFF" }, fontSize: "0.9rem" }}>
//                     {t}
//                   </Link>
//                 ))}
//               </Stack>
//             </Grid>

//             <Grid item xs={12} md={3}>
//               <Typography sx={{ color: "#E2E8F0", fontWeight: 700, mb: 1, fontSize: "0.85rem" }}>
//                 Connect
//               </Typography>
//               <Stack spacing={1}>
//                 {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((t) => (
//                   <Link key={t} href="#" underline="none" sx={{ color: "#94A3B8", "&:hover": { color: "#FFFFFF" }, fontSize: "0.9rem" }}>
//                     {t}
//                   </Link>
//                 ))}
//               </Stack>
//             </Grid>
//           </Grid>

//           <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 3 }} />

//           <Typography sx={{ color: "#94A3B8", textAlign: "center", fontSize: "0.8rem" }}>
//             © 2024 LocalFind. All rights reserved.
//           </Typography>
//         </Container>
//       </Box>
//     </Box>
//   );
// }
 