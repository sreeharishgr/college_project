import React from "react";
import {
  Typography,
  Container,
  Box,
  Stack,
  Button,
  Paper,
  Grid,
  Avatar,
  IconButton,
} from "@mui/material";
import { PersonOutline, AdminPanelSettings, HealthAndSafety } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function RoleCard({ color, icon, title, subtitle, cta, move }) {
   const navigate = useNavigate()
  return (
    <Paper
      role="button"
      tabIndex={0}
      elevation={2}
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
          onClick={() =>navigate(move)}
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
      {/* <Box
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
      </Box> */}
      {/* Hero area */}
      <Container component="section" aria-labelledby="choice-heading" maxWidth="xxl" sx={{ py:{ xs: 10, md: 10 }, textAlign:"center",height:{xs:'160dvh',sm:'97dvh',md:'100dvh',lg:'100dvh'},display:'flex',flexDirection:'column',justifyContent:'center'}}>
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
          <Grid sx={{display:'flex',justifyContent:{xs:'center',sm:'center',md:'center',lg:'end'}}} size={{ xs:12,sm:6,md:6,lg:6}}>
            <RoleCard
              color="#4F46E5"
              icon={<PersonOutline />}
              title="I’m a User"
              subtitle="Looking for local service provider"
              cta="Get Started"
              move='user-login'
            />
          </Grid>
          <Grid sx={{display:'flex',justifyContent:{xs:'center',sm:'center',md:'center',lg:'start'}}} size={{ xs:12,sm:6,md:6,lg:6}}>
            <RoleCard
              color="#22C55E"
              icon={<HealthAndSafety />}
              title="I’m a Provider"
              subtitle="Offering services to local customers"
              cta="Join Now"
              move='provider-login'
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
 