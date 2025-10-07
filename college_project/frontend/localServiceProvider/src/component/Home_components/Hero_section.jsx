// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";    


// function Hero() {
//   return (
//     <Box
//       sx={{
//         py: { xs: 8, md: 12 },
//         background:
//           "linear-gradient(135deg, rgba(76,29,149,1) 0%, rgba(88,28,135,1) 40%, rgba(30,64,175,1) 100%)",
//         color: "white",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Stack spacing={3} alignItems="center" textAlign="center">
//           <Typography variant="h3" fontWeight={800} lineHeight={1.1}>
//             Find Local Services Near You
//           </Typography>
//           <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
//             Connect with trusted local professionals for all your needs
//           </Typography>

//           <Stack
//             spacing={2}
//             direction={{ xs: "column", sm: "row" }}
//             sx={{
//               width: "100%",
//               maxWidth: 900,
//               bgcolor: "white",
//               borderRadius: 3,
//               p: 1,
//               boxShadow: 3,
//             }}
//           >
//             <TextField
//               fullWidth
//               placeholder="What service do you need?"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SearchIcon color="action" />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <TextField
//               fullWidth
//               placeholder="Enter your location"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <RoomOutlined color="action" />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 px: 4,
//                 whiteSpace: "nowrap",
//                 alignSelf: { xs: "stretch", sm: "center" },
//               }}
//             >
//               Search Now
//             </Button>
//           </Stack>
//         </Stack>
//       </Container>
//     </Box>
//   );
// }

// export default Hero;




import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,incrementByAmount } from "../../redux/slices/counterSlice";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Search as SearchIcon, RoomOutlined } from "@mui/icons-material";

function Hero() {
  
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <Box
      component="header"
      role="banner"
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(135deg, rgba(76,29,149,1) 0%, rgba(88,28,135,1) 40%, rgba(30,64,175,1) 100%)",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography variant="h3" fontWeight={800} lineHeight={1.1}>
            Find Local Services Near You
          </Typography>
           <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Add 5
      </button>
    </div>

          <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
            Connect with trusted local professionals for all your needs
          </Typography>

          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            sx={{
              width: "100%",
              maxWidth: 900,
              bgcolor: "white",
              borderRadius: 2,
              // p: 1,
              paddingX:3,
              paddingY:1,
              boxShadow: 3,
            }}
          >
            <TextField
              fullWidth
              placeholder="What service do you need?"
              inputProps={{ "aria-label": "Service" }}
              autoComplete="off"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              placeholder="Enter your location"
              inputProps={{ "aria-label": "Location", inputMode: "text" }}
              autoComplete="postal-code"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RoomOutlined color="action" />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                whiteSpace: "nowrap",
                alignSelf: { xs: "stretch", sm: "center" },
                "&:focus-visible": {
                  outline: "3px solid rgba(255,255,255,0.6)",
                  outlineOffset: 2,
                },
                      background:
          "linear-gradient(135deg, rgba(76,29,149,1) 0%, rgba(88,28,135,1) 40%, rgba(30,64,175,1) 100%)",
              }}
              onClick={() => {
                // wire up navigation or search handler
              }}
            >
              Search Now
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
