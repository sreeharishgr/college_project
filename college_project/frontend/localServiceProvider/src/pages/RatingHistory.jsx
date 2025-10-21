import { React, useEffect, useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  MenuItem,
  Select,
  FormControl,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Pagination,
  Rating,
  CircularProgress,
} from "@mui/material";
import {
  Star,
  StarBorder,
  Dashboard as DashboardIcon,
  History,
  Notifications,
  Logout,
  Person,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import axios from "axios";

const RatingHistory = () => {
  const [ratings, setRatings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [page, setPage] = useState(0);
  const [providerName, setProviderName] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getRatings = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/rating/getAllRatings`,
        {
          params: {
            page,
            providerName: providerName || undefined,
          },
        }
      );
      setRatings(data.ratings);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Failed to fetch Rating list", err);
      setRatings([]);
      setTotalPages(1);
    }
    finally {
        setLoading(false);
      }
  };

  useEffect(() => {
    getRatings();
  }, [page]);

  const handleFilter = (name) => {
    // setProviderName(name);
    getRatings();
  };
  // const ratings = [
  //   { customer: "Aravindh", provider: "Aravindh", stars: 3 },
  //   { customer: "dafsd", provider: "Aravindh", stars: 0 },
  //   { customer: "dsfdsfsdf", provider: "Akash", stars: 2 },
  //   { customer: "", provider: "Akash", stars: 3 },
  //   { customer: "Aravindh", provider: "Akash", stars: 0 },
  //   { customer: "Aravindh", provider: "Akash", stars: 0 },
  //   { customer: "Aravindh", provider: "Akash", stars: 3 },
  //   { customer: "Aravindh", provider: "Akash", stars: 0 },
  //   { customer: "Aravindh", provider: "Akash", stars: 0 },
  //   { customer: "Aravindh", provider: "Akash", stars: 3 },
  //   { customer: "Aravindh", provider: "Akash", stars: 0 },
  // ];

  // const renderStars = (rating) => {
  //   return Array.from({ length: 5 }, (_, index) => {
  //     if (index < rating) {
  //       return <Star key={index} sx={{ color: "#ff6d00", fontSize: 24 }} />;
  //     }
  //     return <StarBorder key={index} sx={{ color: "#666", fontSize: 24 }} />;
  //   });
  // };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#e8eaf6" }}>
      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>

        {/* Content Area */}
        <Container maxWidth={false} sx={{ py: 4, px: 4 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#5c6bc0",
              fontWeight: 500,
              mb: 4,
            }}
          >
            Rating History
          </Typography>

          {/* Search Section */}
          <Paper sx={{ p: 3, mb: 3, borderRadius: 1 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <TextField
                placeholder="Search by provider"
                value={providerName}
                onChange={(e) => setProviderName(e.target.value)}
                variant="outlined"
                size="small"
                sx={{
                  width: 300,
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#fff",
                  },
                }}
              />
              <Button

                variant="contained"
                sx={{
                  bgcolor: "#5c6bc0",
                  textTransform: "none",
                  px: 4,
                  "&:hover": { bgcolor: "#4a5ab3" },
                }}
                onClick={handleFilter}
              >
                SEARCH
              </Button>
            </Box>
          </Paper>

          {/* Table */}
          {loading ? (
            <TableRow>
              <TableCell colSpan={4}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  py={5}
                >
                  <CircularProgress size={70} />
                </Box>
              </TableCell>
            </TableRow>
          ) : ratings.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4}>
                <Typography sx={{ textAlign: "center", py: 3, color: "#888" }}>
                  No ratings found
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            <Paper sx={{ borderRadius: 1 }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                      <TableCell sx={{ fontWeight: 600, color: "#333" }}>
                        Customer name
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: "#333" }}>
                        Attended Provider
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: "#333" }} >
                        Ratings
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: "#333" }}>
                        Created At
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ratings
                      // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:hover": { bgcolor: "#fafafa" },
                            borderBottom: "1px solid #e0e0e0",
                          }}
                        >
                          <TableCell sx={{ color: "#333" }}>
                            {row.user_name}
                          </TableCell>
                          <TableCell sx={{ color: "#333" }}>
                            {row.provider_name}
                          </TableCell>
                          <TableCell>
                            <Box sx={{ display: "flex", gap: 0.5 }}>
                              {/* {renderStars(row.star_count)} */}
                              <Rating
                                value={Math.round(row.star_count) || 0}
                                precision={1}
                                readOnly
                                size="small"
                                sx={{ mr: 1 }}
                              />
                            </Box>
                          </TableCell>
                          <TableCell sx={{ color: "#333" }}>
                            {row.created_at
                              ? (() => {
                                  const date = new Date(row.created_at);
                                  const day = String(date.getDate()).padStart(
                                    2,
                                    "0"
                                  );
                                  const month = date.toLocaleString("en-US", {
                                    month: "short",
                                  });
                                  const year = date.getFullYear();

                                  let hours = date.getHours();
                                  const minutes = String(
                                    date.getMinutes()
                                  ).padStart(2, "0");
                                  const ampm = hours >= 12 ? "PM" : "AM";
                                  hours = hours % 12;
                                  hours = hours ? hours : 12; // the hour '0' should be '12'

                                  return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
                                })()
                              : "-"}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>

              {/* Pagination */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  p: 2,
                  gap: 2,
                }}
              >
                <Pagination
                  count={totalPages}
                  defaultPage={page}
                  onChange={(_, newPage) => setPage(newPage)}
                  variant="outlined"
                  shape="rounded"
                  sx={{
                    "& .MuiPaginationItem-root.Mui-selected": {
                      bgcolor: "#4f46e5",
                      color: "#fff",
                    },
                  }}
                />
              </Box>
            </Paper>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default RatingHistory;
