import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../../redux/slices/counterSlice";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { Search as SearchIcon, RoomOutlined } from "@mui/icons-material";

// Swiper React
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => {
      const fetchCategories = async () => {
        try {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/category/getAllCategories`
          );
          setCategories(data);
        } catch (err) {
          console.error("Failed to fetch categories", err);
        }
      };
      fetchCategories();
    }, []);

     const handleSearch = () => {
    if (category) {
      navigate(`/services?category=${category}`);
    } else {
      navigate(`/services`);
    }
  };

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
              paddingX: 3,
              paddingY: 1,
              boxShadow: 3,
            }}
          >
            {/* <TextField
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
            /> */}
            <FormControl fullWidth size="small" sx={{ mb: 3 }}>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">All Categories</MenuItem>
                  {categories.map((cat) => (
                    <MenuItem key={cat.category_id} value={cat.category_id}>
                      {cat.categoryName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

            {/* <TextField
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
            /> */}

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
                 transition: "background 0.4s ease, transform 0.2s ease",
                  "&:hover": {
                    background:'#009973ff',
                    transform: "scale(1.03)"
                  },    
                background:
                  "linear-gradient(135deg, rgba(76,29,149,1) 0%, rgba(88,28,135,1) 40%, rgba(30,64,175,1) 100%)",
              }}
              onClick={handleSearch}
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
