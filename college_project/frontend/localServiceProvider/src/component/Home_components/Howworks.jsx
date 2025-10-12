// function HowItWorks() {
//   const steps = [
//     {
//       n: 1,
//       title: "Search & Browse",
//       desc:
//         "Enter service needs and location to find qualified professionals near you.",
//       icon: <SearchIcon />,
//     },
//     {
//       n: 2,
//       title: "Compare & Choose",
//       desc:
//         "Review profiles, ratings, and prices to select the best professional for the job.",
//       icon: <CheckCircleOutline />,
//     },
//     {
//       n: 3,
//       title: "Book & Relax",
//       desc:
//         "Contact the professional and schedule service with confidence.",
//       icon: <ScheduleOutlined />,
//     },
//   ];
//   return (
//     <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
//       <Stack spacing={1} alignItems="center" textAlign="center" mb={4}>
//         <Typography variant="h5" fontWeight={800}>
//           How It Works
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Find and hire local professionals in three simple steps
//         </Typography>
//       </Stack>

//       <Grid container spacing={3}>
//         {steps.map((s) => (
//           <Grid item xs={12} md={4} key={s.n}>
//             <Stack
//               spacing={2}
//               alignItems="center"
//               sx={{
//                 p: 3,
//                 borderRadius: 2,
//                 border: "1px solid",
//                 borderColor: "divider",
//                 textAlign: "center",
//                 height: "100%",
//               }}
//             >
//               <Chip
//                 label={s.n}
//                 color="primary"
//                 sx={{ borderRadius: "50%", width: 40, height: 40 }}
//               />
//               <Box
//                 sx={{
//                   width: 56,
//                   height: 56,
//                   borderRadius: "50%",
//                   bgcolor: "action.hover",
//                   display: "grid",
//                   placeItems: "center",
//                   color: "primary.main",
//                 }}
//               >
//                 {s.icon}
//               </Box>
//               <Typography variant="subtitle1" fontWeight={700}>
//                 {s.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {s.desc}
//               </Typography>
//             </Stack>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }
// export default HowItWorks;




import React from "react";
import {
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  Search as SearchIcon,
  CheckCircleOutline,
  ScheduleOutlined,
} from "@mui/icons-material";

function HowItWorks() {
  const steps = [
    {
      n: 1,
      title: "Search & Browse",
      desc:
        "Enter service needs and location to find qualified professionals near you.",
      icon: <SearchIcon aria-hidden />,
    },
    {
      n: 2,
      title: "Compare & Choose",
      desc:
        "Review profiles, ratings, and prices to select the best professional for the job.",
      icon: <CheckCircleOutline aria-hidden />,
    },
    {
      n: 3,
      title: "Book & Relax",
      desc:
        "Contact the professional and schedule service with confidence.",
      icon: <ScheduleOutlined aria-hidden />,
    },
  ];

  return (
    <Container
      component="section"
      aria-labelledby="how-it-works-heading"
      maxWidth="lg"
      sx={{ py: { xs: 6, md: 8 } }}
    >
      <Stack spacing={1} alignItems="center" textAlign="center" mb={4}>
        <Typography id="how-it-works-heading" variant="h5" fontWeight={800}>
          How It Works
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Find and hire local professionals in three simple steps
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {steps.map((s) => (
          <Grid item xs={12} md={4} lg={4} key={s.n}>
            <Stack
              spacing={2}
              alignItems="center"
            sx={{
  p: 3,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  textAlign: "center",
  height: "100%",
  width: "365px",
  boxShadow: 3,
  transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 300ms ease",
  willChange: "transform",

  "&:hover": {
    transform: "translateY(-15px)",
    boxShadow: 6,
  },
}}
            >
              <Chip
                label={s.n}
                color="primary"
                aria-label={`Step ${s.n}`}
                sx={{ borderRadius: "50%", width: 40, height: 40 }}
              />
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  bgcolor: "action.hover",
                  display: "grid",
                  placeItems: "center",
                  color: "primary.main",
                }}
              >
                {s.icon}
              </Box>

              <Typography variant="subtitle1" fontWeight={700}>
                {s.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {s.desc}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HowItWorks;
