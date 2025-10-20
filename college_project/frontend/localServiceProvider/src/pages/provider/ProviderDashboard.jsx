import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Switch,
  Avatar, Grid
} from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import StarIcon from "@mui/icons-material/Star";

const gig = {
  cover:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  company: "QuickFix Plumbing",
  price: "$85/hr",
  rating: 4.6,
  reviews: 89,
  desc:
    "24/7 emergency plumbing services. Specializing in urgent repairs, leak detection, and drain cleaning. Fast response guaranteed.",
  location: "Nagercoil",
  experience: 12,
  verified: true
};

export default function GigsPage() {
  const [active, setActive] = React.useState(true);

  return (
    <Box sx={{ minHeight: "98dvh", bgcolor: "#eaf3fb" }}>
      {/* Navbar */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: "#fff", color: "#222" }}>
        <Toolbar>
          <Avatar sx={{ bgcolor: "#f2f7fb", color: "#222", mr: 2 }}>
            <PersonOutlinedIcon />
          </Avatar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Provider
          </Typography>
          <Button sx={{ color: "#222", mr: 1, textTransform: "none", fontWeight: 500, bgcolor: "#f2f7fb", px: 2, borderRadius: 2 }} startIcon={<PersonOutlinedIcon />}>
            Myself
          </Button>
          <Button sx={{ color: "#222", textTransform: "none", fontWeight: 500 }} startIcon={<LogoutIcon />}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Grid container spacing={0} maxWidth='xl' sx={{ mx: "auto", mt: 4 }}>
        <Box sx={{ width: "60%", mt: 4, display: "flex", flexDirection: "column", gap: 3, px: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 500, mb:2}}>
          Gigs
        </Typography>
        <Card
          sx={{
            maxWidth: 380,
            borderRadius: 4,
            boxShadow: "0 8px 20px 0 #b1c7de44",
            mb: 2,
            position: "relative"
          }}
        >
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="150"
              sx={{
                objectFit: "cover",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16
              }}
              image={gig.cover}
              alt="gig cover"
            />
            {/* Toggle Switch */}
            <Switch
              checked={active}
              onChange={() => setActive((prev) => !prev)}
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                bgcolor: "rgba(0, 0, 0, 0.72)",
                borderRadius: 2
              }}
              inputProps={{ 'aria-label': 'active toggle' }}
            />
          </Box>
          <CardContent sx={{ pb: 2.5 }}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="subtitle1" fontWeight={700}>
                {gig.company}
              </Typography>
              <Typography sx={{ color: "#0ca678", fontWeight: 700 }}>
                {gig.price}
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary" gutterBottom>Name</Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  fontSize="small"
                  sx={{
                    color: i < Math.round(gig.rating) ? "#ffbe32" : "#e0e0e0",
                    fontSize: 18
                  }}
                />
              ))}
              <Typography variant="body2" sx={{ ml: 0.5 }}>
                {gig.rating} ({gig.reviews} reviews)
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
              {gig.desc}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", color: "#8a93a7" }}
              >
                <RoomOutlinedIcon sx={{ fontSize: 18, mr: 0.5 }} />
                {gig.location}
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", color: "#8a93a7" }}
              >
                <BoltOutlinedIcon sx={{ fontSize: 18, mr: 0.5 }} />
                {gig.experience} +yrs exp
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", color: "#4bb543" }}
              >
                <CheckCircleOutlinedIcon sx={{ fontSize: 18, mr: 0.5 }} />
                Verified
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      </Grid>
    </Box>
  );
}
