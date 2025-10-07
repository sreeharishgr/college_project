import React, { useState } from 'react';
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
} from '@mui/material';
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
} from '@mui/icons-material';

const RatingHistory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const ratings = [
    { customer: 'Aravindh', provider: 'Aravindh', stars: 3 },
    { customer: 'dafsd', provider: 'Aravindh', stars: 0 },
    { customer: 'dsfdsfsdf', provider: 'Akash', stars: 2 },
    { customer: '', provider: 'Akash', stars: 3 },
    { customer: 'Aravindh', provider: 'Akash', stars: 0 },
    { customer: 'Aravindh', provider: 'Akash', stars: 0 },
    { customer: 'Aravindh', provider: 'Akash', stars: 3 },
    { customer: 'Aravindh', provider: 'Akash', stars: 0 },
    { customer: 'Aravindh', provider: 'Akash', stars: 0 },
    { customer: 'Aravindh', provider: 'Akash', stars: 3 },
    { customer: 'Aravindh', provider: 'Akash', stars: 0 },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => {
      if (index < rating) {
        return <Star key={index} sx={{ color: '#ff6d00', fontSize: 24 }} />;
      }
      return <StarBorder key={index} sx={{ color: '#666', fontSize: 24 }} />;
    });
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#e8eaf6' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            bgcolor: '#fff',
            borderRight: 'none',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography
            variant="h5"
            sx={{
              color: '#5c6bc0',
              fontWeight: 600,
              mb: 4,
            }}
          >
            Local Service Find
          </Typography>
        </Box>
        <List sx={{ px: 2 }}>
          <ListItem
            button
            sx={{
              borderRadius: 1,
              mb: 1,
              '&:hover': { bgcolor: '#f5f5f5' },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <DashboardIcon sx={{ color: '#666' }} />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{ fontSize: 15, color: '#333' }}
            />
          </ListItem>
          <ListItem
            button
            sx={{
              borderRadius: 1,
              mb: 1,
              '&:hover': { bgcolor: '#f5f5f5' },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <History sx={{ color: '#666' }} />
            </ListItemIcon>
            <ListItemText
              primary="Rating History"
              primaryTypographyProps={{ fontSize: 15, color: '#333' }}
            />
          </ListItem>
          <ListItem
            button
            sx={{
              borderRadius: 1,
              mb: 1,
              '&:hover': { bgcolor: '#f5f5f5' },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Notifications sx={{ color: '#666' }} />
            </ListItemIcon>
            <ListItemText
              primary="Notification"
              primaryTypographyProps={{ fontSize: 15, color: '#333' }}
            />
          </ListItem>
          <ListItem
            button
            sx={{
              borderRadius: 1,
              mb: 1,
              '&:hover': { bgcolor: '#f5f5f5' },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Logout sx={{ color: '#666' }} />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{ fontSize: 15, color: '#333' }}
            />
          </ListItem>
        </List>
        <Box
          sx={{
            mt: 'auto',
            p: 2,
            borderTop: '1px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Person sx={{ color: '#fff' }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Admin
          </Typography>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Header */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: '#fff',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <Toolbar sx={{ justifyContent: 'flex-end' }}>
            <Typography sx={{ color: '#333', fontSize: 15 }}>Home</Typography>
          </Toolbar>
        </AppBar>

        {/* Content Area */}
        <Container maxWidth={false} sx={{ py: 4, px: 4 }}>
          <Typography
            variant="h4"
            sx={{
              color: '#5c6bc0',
              fontWeight: 500,
              mb: 4,
            }}
          >
            Rating History
          </Typography>

          {/* Search Section */}
          <Paper sx={{ p: 3, mb: 3, borderRadius: 1 }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <TextField
                placeholder="Search by provider"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                variant="outlined"
                size="small"
                sx={{
                  width: 300,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: '#fff',
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#5c6bc0',
                  textTransform: 'none',
                  px: 4,
                  '&:hover': { bgcolor: '#4a5ab3' },
                }}
              >
                SEARCH
              </Button>
            </Box>
          </Paper>

          {/* Table */}
          <Paper sx={{ borderRadius: 1 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                    <TableCell sx={{ fontWeight: 600, color: '#333' }}>
                      Customer name
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#333' }}>
                      Attended Provider
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#333' }}>
                      Ratings
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ratings
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          '&:hover': { bgcolor: '#fafafa' },
                          borderBottom: '1px solid #e0e0e0',
                        }}
                      >
                        <TableCell sx={{ color: '#333' }}>
                          {row.customer}
                        </TableCell>
                        <TableCell sx={{ color: '#333' }}>
                          {row.provider}
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', gap: 0.5 }}>
                            {renderStars(row.stars)}
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Pagination */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                p: 2,
                gap: 2,
              }}
            >
              <Typography sx={{ fontSize: 14, color: '#666' }}>
                Rows per page:
              </Typography>
              <FormControl size="small">
                <Select
                  value={rowsPerPage}
                  onChange={(e) => setRowsPerPage(e.target.value)}
                  sx={{ fontSize: 14 }}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>
              <Typography sx={{ fontSize: 14, color: '#666' }}>
                1-5 of 13
              </Typography>
              <Box>
                <IconButton size="small" disabled={page === 0}>
                  <ChevronLeft />
                </IconButton>
                <IconButton
                  size="small"
                  disabled={page >= Math.ceil(ratings.length / rowsPerPage) - 1}
                  onClick={() => setPage(page + 1)}
                >
                  <ChevronRight />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default RatingHistory;
