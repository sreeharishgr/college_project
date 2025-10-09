import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import {
  Search as SearchIcon,
  Star as StarIcon,
  CalendarToday as CalendarIcon,
  Security as SecurityIcon,
  SupportAgent as SupportIcon,
  EmojiEvents as TrophyIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';

// Keyframe animations
const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  100% { transform: translateY(-100px) rotate(360deg); }
`;

// Styled components
const GlobalStyles = styled(Box)`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: #f8f9fa;
  }
`;

const Header = styled(Box)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='20' cy='20' r='2' fill='rgba(255,255,255,0.1)'/%3E%3Ccircle cx='80' cy='40' r='1.5' fill='rgba(255,255,255,0.1)'/%3E%3Ccircle cx='40' cy='80' r='1' fill='rgba(255,255,255,0.1)'/%3E%3Ccircle cx='90' cy='80' r='2.5' fill='rgba(255,255,255,0.1)'/%3E%3Ccircle cx='10' cy='60' r='1.5' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E");
    animation: ${floatAnimation} 20s infinite linear;
  }
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const StyledContainer = styled(Container)`
  max-width: 1200px;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeaderTitle = styled(Typography)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeaderSubtitle = styled(Typography)`
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const MainContent = styled(Box)`
  padding: 4rem 0;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const Section = styled(Box)`
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionTitle = styled(Typography)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 2px;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const MissionContent = styled(Box)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const MissionParagraph = styled(Typography)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FeaturesGrid = styled(Grid)`
  margin-top: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(Box)`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const FeatureIcon = styled(Box)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
`;

const FeatureTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
`;

const FeatureDescription = styled(Typography)`
  color: #666;
  line-height: 1.6;
`;

const TeamGrid = styled(Grid)`
  margin-top: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled(Box)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
  &:hover {
    transform: translateY(-10px) scale(1.02);
  }
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const MemberPhoto = styled(Box)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  font-weight: 700;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
`;

const MemberName = styled(Typography)`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2c3e50;
`;

const MemberRole = styled(Typography)`
  color: #667eea;
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const MemberBio = styled(Typography)`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const ContactSection = styled(Box)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  text-align: center;
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const ContactParagraph = styled(Typography)`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

const ContactGrid = styled(Grid)`
  margin-top: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactItem = styled(Box)`
  padding: 2rem;
  background: #f8f9ff;
  border-radius: 16px;
  border: 2px solid #e6e9ff;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    border-color: #667eea;
    background: #f0f2ff;
  }
`;

const ContactIcon = styled(Box)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
`;

const ContactTitle = styled(Typography)`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2c3e50;
`;

const ContactMain = styled(Typography)`
  color: #667eea;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ContactSub = styled(Typography)`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
`;

const CTASection = styled(Box)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
  margin-top: 4rem;
`;

const CTATitle = styled(Typography)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTASubtitle = styled(Typography)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled(Box)`
  display: inline-block;
  background: white;
  color: #667eea;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0,0,0,0.3);
  }
`;

const AboutPage = () => {
  const sectionRefs = useRef([]);
  const featureRefs = useRef([]);
  const teamRefs = useRef([]);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const currentSections = sectionRefs.current;
    const currentFeatures = featureRefs.current;
    const currentTeamMembers = teamRefs.current;

    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });
    currentFeatures.forEach((feature) => {
      if (feature) observer.observe(feature);
    });
    currentTeamMembers.forEach((member) => {
      if (member) observer.observe(member);
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      currentFeatures.forEach((feature) => {
        if (feature) observer.unobserve(feature);
      });
      currentTeamMembers.forEach((member) => {
        if (member) observer.unobserve(member);
      });
    };
  }, []);

  const handleCTAClick = () => {
    alert('This would redirect to the main service search page!');
  };

  const handleContactClick = (type, value, event) => {
    if (type === 'email' || type === 'phone') {
      window.location.href = type === 'email' ? `mailto:${value}` : `tel:${value}`;
    }
  };

  const features = [
    {
      icon: <SearchIcon />,
      title: 'Smart Search',
      description: 'Find exactly what you need with our intelligent search system that matches you with the perfect service providers based on location, ratings, and availability.',
    },
    {
      icon: <StarIcon />,
      title: 'Verified Reviews',
      description: 'Make informed decisions with authentic reviews from real customers. Our verification system ensures you get honest feedback about service quality.',
    },
    {
      icon: <CalendarIcon />,
      title: 'Easy Booking',
      description: 'Schedule services at your convenience with our streamlined booking system. Real-time availability and instant confirmations make planning effortless.',
    },
    {
      icon: <SecurityIcon />,
      title: 'Trust & Safety',
      description: 'All service providers are background-checked and insured. Your safety and satisfaction are our top priorities in every interaction.',
    },
    {
      icon: <SupportIcon />,
      title: '24/7 Support',
      description: 'Our dedicated customer support team is always here to help. Get assistance with bookings, questions, or any issues that may arise.',
    },
    {
      icon: <TrophyIcon />,
      title: 'Quality Guarantee',
      description: "We stand behind every service booked through our platform. If you're not satisfied, we'll work to make it right or provide a full refund.",
    },
  ];

  const teamMembers = [
    {
      initials: 'SJ',
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Sarah founded ServiceFinder with a vision to revolutionize how people connect with local services. With 10+ years in tech and a passion for community building, she leads our mission to create meaningful connections.',
    },
    {
      initials: 'MC',
      name: 'Michael Chen',
      role: 'CTO',
      bio: "Michael brings 15 years of software engineering expertise to ServiceFinder. He's responsible for our platform's technical architecture and ensures we deliver a seamless user experience across all devices.",
    },
    {
      initials: 'ER',
      name: 'Emily Rodriguez',
      role: 'Head of Customer Success',
      bio: 'Emily leads our customer success initiatives, ensuring every user has an exceptional experience. Her background in hospitality and customer service helps us maintain the highest satisfaction standards.',
    },
    {
      initials: 'DK',
      name: 'David Kim',
      role: 'Head of Marketing',
      bio: 'David drives our marketing strategy and community outreach programs. His creative approach to digital marketing has helped thousands of service providers grow their businesses through our platform.',
    },
    {
      initials: 'LT',
      name: 'Lisa Thompson',
      role: 'Operations Manager',
      bio: 'Lisa ensures our day-to-day operations run smoothly. Her attention to detail and process optimization skills help us maintain quality standards while scaling our services.',
    },
    {
      initials: 'JP',
      name: 'James Parker',
      role: 'Lead Developer',
      bio: 'James leads our development team in building innovative features that make ServiceFinder the best platform for connecting with local services. His expertise in mobile and web development drives our technical excellence.',
    },
  ];

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email Us',
      main: 'hello@servicefinder.com',
      sub: 'We typically respond within 24 hours',
      type: 'email',
      value: 'hello@servicefinder.com',
    },
    {
      icon: <PhoneIcon />,
      title: 'Call Us',
      main: '(555) 123-4567',
      sub: 'Mon-Fri, 9AM-6PM PST',
      type: 'phone',
      value: '+1-555-123-4567',
    },
    {
      icon: <LocationIcon />,
      title: 'Visit Us',
      main: '123 Innovation Drive\nSan Francisco, CA 94105',
      sub: 'Open office hours by appointment',
      type: 'address',
    },
    {
      icon: <ChatIcon />,
      title: 'Live Chat',
      main: 'Available on our website',
      sub: 'Instant support during business hours',
      type: 'chat',
    },
  ];

  return (
    <>
      <GlobalStyles />
      <Header>
        <StyledContainer>
          <HeaderTitle variant="h1">About ServiceFinder</HeaderTitle>
          <HeaderSubtitle variant="subtitle1">
            Connecting communities with trusted local service providers since 2020
          </HeaderSubtitle>
        </StyledContainer>
      </Header>

      <MainContent>
        <StyledContainer>
          <Section ref={(el) => (sectionRefs.current[0] = el)}>
            <SectionTitle variant="h2">Our Mission</SectionTitle>
            <MissionContent>
              <MissionParagraph variant="body1">
                At ServiceFinder, we believe that finding reliable local services shouldn't be a hassle. Our mission is to bridge the gap between service seekers and trusted local professionals, creating a seamless experience that benefits both customers and service providers.
              </MissionParagraph>
              <MissionParagraph variant="body1">
                We're committed to building stronger communities by making it easier for neighbors to connect, support local businesses, and access quality services right in their area. Every connection made through our platform helps strengthen the local economy and fosters meaningful relationships.
              </MissionParagraph>
              <MissionParagraph variant="body1">
                Since our founding, we've helped thousands of customers find everything from home repairs to personal services, while supporting local entrepreneurs and small businesses in growing their customer base.
              </MissionParagraph>
            </MissionContent>
          </Section>

          <Section ref={(el) => (sectionRefs.current[1] = el)}>
            <SectionTitle variant="h2">What We Offer</SectionTitle>
            <FeaturesGrid container spacing={2}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <FeatureCard ref={(el) => (featureRefs.current[index] = el)}>
                    <FeatureIcon>{feature.icon}</FeatureIcon>
                    <FeatureTitle variant="h3">{feature.title}</FeatureTitle>
                    <FeatureDescription variant="body2">{feature.description}</FeatureDescription>
                  </FeatureCard>
                </Grid>
              ))}
            </FeaturesGrid>
          </Section>

          <Section ref={(el) => (sectionRefs.current[2] = el)}>
            <SectionTitle variant="h2">Meet Our Team</SectionTitle>
            <TeamGrid container spacing={2}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <TeamMember ref={(el) => (teamRefs.current[index] = el)}>
                    <MemberPhoto>{member.initials}</MemberPhoto>
                    <MemberName variant="h3">{member.name}</MemberName>
                    <MemberRole variant="subtitle1">{member.role}</MemberRole>
                    <MemberBio variant="body2">{member.bio}</MemberBio>
                  </TeamMember>
                </Grid>
              ))}
            </TeamGrid>
          </Section>

          <Section ref={(el) => (sectionRefs.current[3] = el)}>
            <SectionTitle variant="h2">Get In Touch</SectionTitle>
            <ContactSection>
              <ContactParagraph variant="body1">
                Have questions, suggestions, or need support? We'd love to hear from you!
              </ContactParagraph>
              <ContactGrid container spacing={2}>
                {contactInfo.map((contact, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <ContactItem onClick={(e) => handleContactClick(contact.type, contact.value, e)}>
                      <ContactIcon>{contact.icon}</ContactIcon>
                      <ContactTitle variant="h3">{contact.title}</ContactTitle>
                      <ContactMain
                        variant="body1"
                        component={contact.type === 'email' || contact.type === 'phone' ? Link : 'p'}
                        href={contact.type === 'email' ? `mailto:${contact.value}` : contact.type === 'phone' ? `tel:${contact.value}` : undefined}
                        sx={{ whiteSpace: 'pre-line' }}
                      >
                        {contact.main}
                      </ContactMain>
                      <ContactSub variant="body2">{contact.sub}</ContactSub>
                    </ContactItem>
                  </Grid>
                ))}
              </ContactGrid>
            </ContactSection>
          </Section>
        </StyledContainer>
      </MainContent>

      <CTASection>
        <StyledContainer>
          <CTATitle variant="h2">Ready to Get Started?</CTATitle>
          <CTASubtitle variant="subtitle1">
            Join thousands of satisfied customers who trust ServiceFinder for their local service needs
          </CTASubtitle>
          <CTAButton onClick={handleCTAClick}>Find Services Now</CTAButton>
        </StyledContainer>
      </CTASection>
    </>
  );
};

export default AboutPage;