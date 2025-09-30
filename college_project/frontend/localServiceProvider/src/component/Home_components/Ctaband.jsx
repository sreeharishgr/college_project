// import React from "react";  
// import { Box, Button, Container, Stack, Typography } from "@mui/material";
// // import { ThemeProvider } from "@mui/material/styles";
// // import theme from "../../theme";
// // import { ThemeContext } from "@emotion/react";




// function CtaBand() {
//   return (
//     <Box
//       sx={{
//         py: { xs: 6, md: 8 },
//         background:
//           "linear-gradient(135deg, rgba(76,29,149,1) 0%, rgba(88,28,135,1) 40%, rgba(30,64,175,1) 100%)",
//         color: "white",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Stack spacing={2} alignItems="center" textAlign="center">
//           <Typography variant="h5" fontWeight={800}>
//             Ready to Find Your Perfect Service Provider?
//           </Typography>
//           <Typography sx={{ opacity: 0.9, maxWidth: 600 }}>
//             Join thousands of satisfied customers who found their ideal local professionals through LocalFind.
//           </Typography>
//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//             <Button variant="contained" color="secondary">
//               Get Started Now
//             </Button>
//             <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>
//               List Your Business
//             </Button>
//           </Stack>
//         </Stack>
//       </Container>
//     </Box>
//   );
// }
// export default CtaBand;



import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function CtaBand() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        background:
          "linear-gradient(135deg, rgba(76,29,149,1) 0%, rgba(88,28,135,1) 40%, rgba(30,64,175,1) 100%)",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography
            component="h2"
            variant="h5"
            fontWeight={800}
            sx={{ letterSpacing: 0.2 }}
          >
            Ready to Find Your Perfect Service Provider?
          </Typography>

          <Typography sx={{ opacity: 0.95, maxWidth: 720 }}>
            Join thousands of satisfied customers who found their ideal local
            professionals through LocalFind.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 1 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                px: 3,
                "&:focus-visible": {
                  outline: "3px solid rgba(255,255,255,0.6)",
                  outlineOffset: 2,
                },
              }}
            >
              Get Started Now
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.8)",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.08)",
                },
                "&:focus-visible": {
                  outline: "3px solid rgba(255,255,255,0.6)",
                  outlineOffset: 2,
                },
              }}
            >
              List Your Business
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default CtaBand;
