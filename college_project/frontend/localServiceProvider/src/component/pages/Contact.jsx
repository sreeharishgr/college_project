import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Alert,
  Collapse,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  CircularProgress,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Send as SendIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Chat as ChatIcon,
  LocationOn as LocationIcon,
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';
import { styled, keyframes } from '@mui/material/styles';

// Animations
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const float = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled Components
const HeaderBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
  color: 'white',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='25' cy='25' r='3' fill='rgba(255,255,255,0.1)'/><circle cx='75' cy='25' r='2' fill='rgba(255,255,255,0.1)'/></svg>")`,
    animation: `${float} 30s infinite linear`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0),
  },
}));

const HeaderIcon = styled('span')(({ theme }) => ({
  fontSize: '4rem',
  display: 'block',
  marginBottom: theme.spacing(2),
  animation: `${bounce} 2s infinite`,
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem',
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
//   height: '100%',
  borderRadius: '16px',
  boxShadow: '0 10px 25px rgba(74, 144, 226, 0.1)',
  border: '1px solid rgba(74, 144, 226, 0.1)',
  position: 'relative',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 35px rgba(74, 144, 226, 0.15)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  color: '#4a90e2',
  marginBottom: theme.spacing(2),
  display: 'block',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
  color: 'white',
  padding: theme.spacing(1.5, 2),
  borderRadius: '12px',
  fontSize: '1.1rem',
  fontWeight: 600,
  boxShadow: '0 4px 15px rgba(74, 144, 226, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #357abd 0%, #4a90e2 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(74, 144, 226, 0.4)',
  },
  '&:disabled': {
    opacity: 0.7,
  },
}));

const ContactSupport = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Contact Form Submission:', formData);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setLoading(false);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  const handleLiveChat = () => {
    alert('Live chat would open here! This feature connects you with our support team in real-time.');
  };

  const faqData = [
    {
      question: 'How do I book a service?',
      answer: 'Simply search for the service you need, select a provider, choose your preferred date and time, and confirm your booking.',
    },
    {
      question: 'What if I need to cancel my booking?',
      answer: 'You can cancel up to 24 hours before your appointment for a full refund. Check our cancellation policy for details.',
    },
    {
      question: 'How do I become a service provider?',
      answer: 'Visit our "Become a Provider" page to learn about requirements and start your application process.',
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Yes! We use industry-standard encryption and work with trusted payment processors to keep your information safe.',
    },
  ];

  return (
    <Box sx={{ bgcolor: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', }}>
      {/* Header */}
      <HeaderBox>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <HeaderIcon>💬</HeaderIcon>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Contact & Support
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              opacity: 0.9,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem' },
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            We're here to help! Get in touch with our friendly support team
          </Typography>
        </Container>
      </HeaderBox>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid size={{ xs:12,md:6,lg:6 }}>
            <StyledCard>
              <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                <Collapse in={showSuccess}>
                  <Alert 
                    severity="success" 
                    sx={{ mb: 3, borderRadius: '12px' }}
                    onClose={() => setShowSuccess(false)}
                  >
                    ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </Alert>
                </Collapse>

                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 1, color: '#2c3e50' }}>
                    📝 Send us a Message
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Fill out the form below and we'll respond as soon as possible
                  </Typography>
                </Box>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                    sx={{ mb: 3 }}
                    variant="outlined"
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                    sx={{ mb: 3 }}
                    variant="outlined"
                  />

                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    sx={{ mb: 3 }}
                    variant="outlined"
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message || `${1000 - formData.message.length} characters remaining`}
                    required
                    multiline
                    rows={4}
                    sx={{ mb: 3 }}
                    variant="outlined"
                    inputProps={{ maxLength: 1000 }}
                  />

                  <SubmitButton
                    type="submit"
                    fullWidth
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </SubmitButton>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Contact Information */}
          <Grid size={{xs:12,md:6,lg:6}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 1, color: '#2c3e50' }}>
                  📞 Get in Touch
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Multiple ways to reach our support team
                </Typography>
              </Box>

              {/* Email Card */}
              <StyledCard>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <IconWrapper>
                    <EmailIcon fontSize="inherit" />
                  </IconWrapper>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2, color: '#2c3e50' }}>
                    Email Support
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    Get help via email
                  </Typography>
                  <Link href="mailto:support@servicefinder.com" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                    support@servicefinder.com
                  </Link>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontSize: '0.9rem' }}>
                    Response time: Within 24 hours
                  </Typography>
                </CardContent>
              </StyledCard>

              {/* Phone Card */}
              <StyledCard>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <IconWrapper>
                    <PhoneIcon fontSize="inherit" />
                  </IconWrapper>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2, color: '#2c3e50' }}>
                    Phone Support
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    Speak with our team directly
                  </Typography>
                  <Link href="tel:+1-555-123-4567" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                    (555) 123-4567
                  </Link>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontSize: '0.9rem' }}>
                    Mon-Fri: 9AM-6PM PST<br />
                    Sat: 10AM-4PM PST
                  </Typography>
                </CardContent>
              </StyledCard>

              {/* Live Chat Card */}
              <StyledCard>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <IconWrapper>
                    <ChatIcon fontSize="inherit" />
                  </IconWrapper>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2, color: '#2c3e50' }}>
                    Live Chat
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    Instant help when you need it
                  </Typography>
                  <Link 
                    component="button" 
                    onClick={handleLiveChat}
                    sx={{ fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}
                  >
                    Start Live Chat
                  </Link>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontSize: '0.9rem' }}>
                    Available during business hours
                  </Typography>
                </CardContent>
              </StyledCard>

              {/* Location Card */}
              <StyledCard>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <IconWrapper>
                    <LocationIcon fontSize="inherit" />
                  </IconWrapper>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2, color: '#2c3e50' }}>
                    Visit Our Office
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    Come see us in person
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    123 Innovation Drive<br />
                    San Francisco, CA 94105
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontSize: '0.9rem' }}>
                    By appointment only
                  </Typography>
                </CardContent>
              </StyledCard>

              {/* FAQ Section */}
              <StyledCard>
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                      ❓ Quick Answers
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Common questions and solutions
                    </Typography>
                  </Box>

                  {faqData.map((faq, index) => (
                    <Accordion 
                      key={index}
                      sx={{ 
                        boxShadow: 'none',
                        '&:before': { display: 'none' },
                        mb: 1,
                      }}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography color="text.secondary">{faq.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </CardContent>
              </StyledCard>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSupport;
