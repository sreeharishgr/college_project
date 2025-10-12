// function Footer() {
//   return (
//     <Box sx={{ bgcolor: "grey.50", borderTop: "1px solid", borderColor: "divider" }}>
//       <Container maxWidth="lg" sx={{ py: 6 }}>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={3}>
//             <Typography variant="h6" fontWeight={800}>
//               LocalFind
//             </Typography>
//             <Typography variant="body2" color="text.secondary" mt={1}>
//               Connecting with trusted local service providers in your area.
//             </Typography>
//           </Grid>
//           <Grid item xs={6} md={3}>
//             <Typography variant="subtitle2" fontWeight={700} mb={1}>
//               Services
//             </Typography>
//             <List dense>
//               {["Home Repair", "Cleaning", "Landscaping", "Electrical"].map(
//                 (t) => (
//                   <ListItem key={t} disableGutters>
//                     <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={t} />
//                   </ListItem>
//                 )
//               )}
//             </List>
//           </Grid>
//           <Grid item xs={6} md={3}>
//             <Typography variant="subtitle2" fontWeight={700} mb={1}>
//               Company
//             </Typography>
//             <List dense>
//               {["About Us", "Contact", "Privacy Policy", "Terms of Service"].map((t) => (
//                 <ListItem key={t} disableGutters>
//                   <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={t} />
//                 </ListItem>
//               ))}
//             </List>
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <Typography variant="subtitle2" fontWeight={700} mb={1}>
//               Connect
//             </Typography>
//             <List dense>
//               {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((t) => (
//                 <ListItem key={t} disableGutters>
//                   <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={t} />
//                 </ListItem>
//               ))}
//             </List>
//           </Grid>
//         </Grid>
//         <Divider sx={{ my: 3 }} />
//         <Typography variant="caption" color="text.secondary">
//           © 2024 LocalFind. All rights reserved.
//         </Typography>
//       </Container>
//     </Box>
//   );
// }
// export default Footer;



import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const services = [
  { label: "Home Repair", href: "/services/home-repair" },
  { label: "Cleaning", href: "/services/cleaning" },
  { label: "Landscaping", href: "/services/landscaping" },
  { label: "Electrical", href: "/services/electrical" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const social = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

function Footer() {
  const year = new Date().getFullYear();

  const renderLinks = (items) => (
    <List dense aria-label="Footer links">
      {items.map((t) => (
        <ListItem key={t.label} disableGutters sx={{ py: 0.25 }}>
          <Link
            href={t.href}
            underline="none"
            color="text.secondary"
            sx={{
              "&:hover": { color: "blue" },
            }}
          >
            <ListItemText
              primaryTypographyProps={{ variant: "body2" }}
              primary={t.label}
            />
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "white", borderTop: "1px solid", borderColor: "divider" }}
    >
      <Container maxWidth='xl'  sx={{ py: { xs: 5, md: 6 }}}>
        <Grid container spacing={{ xs: 3, md: 4, lg:2 }} sx={{margin:'0 auto',display:'flex',justifyContent:'center'}}>
          <Grid size={{ xs: 12,sm:6,md:4,lg: 6}}>
            <Typography variant="h6" fontWeight={800}>
              LocalFind
            </Typography>
            <Typography variant="body2" mt={1}>
              Connecting with trusted local service providers in your area.
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 2, lg: 1.5 }}>
            <Typography variant="subtitle2" fontWeight={700} mb={1}>
              Services
            </Typography>
            {renderLinks(services)}
          </Grid>

          <Grid size={{ xs: 6, md: 2, lg: 1.5 }}>
            <Typography variant="subtitle2" fontWeight={700} mb={1}>
              Company
            </Typography>
            {renderLinks(company)}
          </Grid>

          <Grid size={{ xs: 6, md: 2, lg: 1.5 }}>
            <Typography variant="subtitle2" fontWeight={700} mb={1}>
              Connect
            </Typography>
            {renderLinks(social)}
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="caption"  fontSize="15px" m="auto" display="block" textAlign="center" color="text.secondary">
          © {year} LocalFind. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
