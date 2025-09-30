// function FeaturedCards() {
//   return (
//     <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
//       <Stack spacing={1} alignItems="center" textAlign="center" mb={4}>
//         <Typography variant="h5" fontWeight={800}>
//           Featured Service Providers
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Top-rated professionals in your area
//         </Typography>
//       </Stack>

//       <Grid container spacing={3}>
//         {featured.map((f) => (
//           <Grid item xs={12} md={4} key={f.title}>
//             <Card sx={{ overflow: "hidden", height: "100%" }}>
//               <Box
//                 sx={{
//                   height: 140,
//                   background: `linear-gradient(135deg, ${f.colorFrom}, ${f.colorTo})`,
//                   display: "grid",
//                   placeItems: "center",
//                 }}
//               >
//                 {f.icon}
//               </Box>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={1}>
//                   <Typography variant="subtitle1" fontWeight={700} flex={1}>
//                     {f.title}
//                   </Typography>
//                   <Stack direction="row" spacing={0.5} alignItems="center">
//                     <StarIcon sx={{ color: "warning.main", fontSize: 18 }} />
//                     <Typography variant="body2">{f.rating}</Typography>
//                   </Stack>
//                 </Stack>
//                 <Typography variant="body2" color="text.secondary" mt={1}>
//                   {f.desc}
//                 </Typography>

//                 <Stack direction="row" spacing={1} mt={2}>
//                   <Chip
//                     size="small"
//                     icon={<RoomOutlined />}
//                     label={f.area}
//                     variant="outlined"
//                   />
//                   <Chip size="small" color="primary" label={f.tag} />
//                 </Stack>
//               </CardContent>
//               <CardActions sx={{ px: 2, pb: 2 }}>
//                 <Button fullWidth variant="contained">Contact</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }
// export default FeaturedCards;


import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  Star as StarIcon,
  RoomOutlined,
  BuildOutlined,
  CleaningServicesOutlined,
  ElectricBoltOutlined,
} from "@mui/icons-material";

const featured = [
  {
    title: "Mike's Handyman Services",
    rating: 4.9,
    area: "Downtown Area",
    desc:
      "Professional home repairs and maintenance services. 15+ years of experience.",
    tag: "Home Repair",
    colorFrom: "#6ea3ff",
    colorTo: "#4b6bff",
    icon: <BuildOutlined sx={{ fontSize: 36, color: "white" }} aria-label="Home Repair" />,
  },
  {
    title: "Sparkle Clean Co.",
    rating: 4.8,
    area: "Citywide Service",
    desc:
      "Residential and commercial cleaning services. Eco-friendly products used.",
    tag: "Cleaning",
    colorFrom: "#36d399",
    colorTo: "#16a34a",
    icon: (
      <CleaningServicesOutlined
        sx={{ fontSize: 36, color: "white" }}
        aria-label="Cleaning"
      />
    ),
  },
  {
    title: "PowerPro Electric",
    rating: 4.9,
    area: "Metro Area",
    desc:
      "Licensed electricians for all electrical needs. 24/7 emergency service.",
    tag: "Electrical",
    colorFrom: "#a78bfa",
    colorTo: "#7c3aed",
    icon: (
      <ElectricBoltOutlined
        sx={{ fontSize: 36, color: "white" }}
        aria-label="Electrical"
      />
    ),
  },
];

function FeaturedCards() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      <Stack spacing={1} alignItems="center" textAlign="center" mb={4}>
        <Typography component="h2" variant="h5" fontWeight={800}>
          Featured Service Providers
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Top-rated professionals in your area
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {featured.map((f) => (
          <Grid item xs={12} md={4} key={f.title}>
            <Card
              sx={{
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              elevation={2}
            >
              <Box
                sx={{
                  height: 140,
                  background: `linear-gradient(135deg, ${f.colorFrom}, ${f.colorTo})`,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {f.icon}
              </Box>

              <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="subtitle1" fontWeight={700} flex={1}>
                    {f.title}
                  </Typography>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <StarIcon sx={{ color: "warning.main", fontSize: 18 }} />
                    <Typography variant="body2">{f.rating}</Typography>
                  </Stack>
                </Stack>

                <Typography variant="body2" color="text.secondary" mt={1}>
                  {f.desc}
                </Typography>

                <Stack direction="row" spacing={1} mt={2}>
                  <Chip
                    size="small"
                    icon={<RoomOutlined />}
                    label={f.area}
                    variant="outlined"
                  />
                  <Chip size="small" color="primary" label={f.tag} />
                </Stack>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    "&:focus-visible": {
                      outline: "3px solid rgba(79,70,229,.35)",
                      outlineOffset: 2,
                    },
                  }}
                  onClick={() => {
                    // hook up to contact action or route
                    console.log("Contact:", f.title);
                  }}
                >
                  Contact
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default FeaturedCards;
