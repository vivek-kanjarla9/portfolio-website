import { Box, Typography, Grid, Paper, Avatar, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const timelineItems = [
  {
    year: '08 2024 - Present',
    title: 'Junior Research Fellow',
    organization: 'Mahindra University',
    logo: '/logos/mahindra-university.png',
    description: 'Conducting research in automated control systems and AI applications',
    icon: <WorkIcon />,
    type: 'work'
  },
  {
    year: '02 2024 - 06 2024',
    title: 'Exchange Semester by Research',
    organization: 'Ecole Centrale de Lille',
    logo: '/logos/ecole-centrale-lille.png',
    description: 'Focused on advanced research in automation and control systems',
    icon: <SchoolIcon />,
    type: 'education'
  },
  {
    year: 'July 11 - 25, 2022',
    title: 'SICSS',
    organization: 'IIIT Hyderabad',
    logo: '/logos/iiithyd.png',
    description: 'Completed a two-week Summer Institute for Computational Social Science, applying computational methods to social science research through hands-on projects and collaborative learning.',
    icon: <SchoolIcon />,
    type: 'education'
  },
  {
    year: '2020 - 2024',
    title: 'Bachelors of Technology in Artificial Intelligence',
    organization: 'Mahindra University',
    logo: '/logos/mahindra-university.png',
    description: 'Specialized in AI and machine learning with a focus on intelligent systems and automation',
    icon: <SchoolIcon />,
    type: 'education'
  }
];

const Home = () => {
  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline-section');
    timelineSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ minHeight: 'calc(100vh - 64px)' }}> 
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)', 
          display: 'flex',
          alignItems: 'center',
          pt: { xs: 2, md: 0 },
          pb: { xs: 4, md: 0 },
          px: { xs: 2, md: 4 }
        }}
      >
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={{ xs: 4, md: 8 }} 
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box>
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                      background: 'linear-gradient(45deg, #474745 30%, #889293 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Hi, I'm Vivek Kanjarla
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'primary.main',
                      mb: 3,
                      fontWeight: 'medium',
                      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Automated Control Systems Developer
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mb: 4,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.8,
                    }}
                  >
                    Passionate about creating innovative solutions at the intersection of computer control systems and automation. 
                    Specializing in developing intelligent systems that bridge the gap between software and hardware control.
                    </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                    <Button
                      component={RouterLink}
                      to="/projects"
                      variant="contained"
                      sx={{
                        backgroundColor: '#474745',
                        '&:hover': {
                          backgroundColor: '#2A2A29',
                        },
                      }}
                    >
                      View Projects
                    </Button>
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="outlined"
                      sx={{
                        borderColor: '#474745',
                        color: '#474745',
                        '&:hover': {
                          borderColor: '#2A2A29',
                          backgroundColor: 'rgba(42, 42, 41, 0.04)',
                        },
                      }}
                    >
                      Contact Me
                    </Button>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 3 }}>
                    <motion.a
                      href="https://www.linkedin.com/in/vivek-kanjarla/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      style={{ color: '#474745' }}
                    >
                      <LinkedInIcon fontSize="large" />
                    </motion.a>
                    <motion.a
                      href="mailto:kvivek6861@gmail.com"
                      whileHover={{ y: -5 }}
                      style={{ color: '#474745' }}
                    >
                      <EmailIcon fontSize="large" />
                    </motion.a>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <Box
                      component="img"
                      src="/images/profile.jpg"
                      alt="Vivek Kanjarla"
                      sx={{
                        width: { xs: 200, sm: 250, md: 300 },
                        height: { xs: 200, sm: 250, md: 300 },
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '4px solid #474745',
                        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        }
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Scroll Down Indicator */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: -2,
          mb: 2
        }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <KeyboardArrowDownIcon
            onClick={scrollToTimeline}
            sx={{
              fontSize: 40,
              color: '#474745',
              cursor: 'pointer',
              '&:hover': {
                color: '#2A2A29',
              },
            }}
          />
        </motion.div>
      </Box>

      {/* Timeline Section */}
      <Box>
        <Container maxWidth="lg">
          <Box
            id="timeline-section"
            sx={{
              py: { xs: 4, md: 8 },
              backgroundColor: 'background.paper',
              borderRadius: 2,
              position: 'relative',
              mb: 4,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, rgba(136, 146, 147, 0.1), rgba(204, 214, 216, 0.1))',
                borderRadius: 2,
                pointerEvents: 'none',
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h4" 
                component="h1"
                sx={{ 
                  mb: 6, 
                  textAlign: 'center',
                  color: '#474745',
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
                }}
              >
                Experience & Education
              </Typography>
              <Timeline position="alternate">
                {timelineItems.map((item, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot
                        sx={{
                          bgcolor: item.type === 'work' ? '#474745' : '#889293',
                          p: 1,
                        }}
                      >
                        {item.icon}
                      </TimelineDot>
                      {index < timelineItems.length - 1 && (
                        <TimelineConnector sx={{ bgcolor: '#B7C1C3' }} />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper
                        component={motion.div}
                        whileHover={{ y: -4 }}
                        elevation={0}
                        sx={{
                          p: 3,
                          backgroundColor: '#CCD6D8',
                          transition: 'background-color 0.3s ease-in-out',
                          '&:hover': {
                            backgroundColor: '#B7C1C3',
                          },
                          textAlign: 'right'
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'flex-end' }}>
                          <Box>
                            <Typography variant="h6" component="h6" sx={{ color: '#474745' }}>
                              {item.title}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ color: '#474745', fontWeight: 600 }}>
                              {item.organization}
                            </Typography>
                          </Box>
                          <Box
                            component="img"
                            src={item.logo}
                            alt={item.organization}
                            sx={{
                              width: 40,
                              height: 40,
                              ml: 2,
                              borderRadius: '50%',
                              objectFit: 'cover',
                              border: '1px solid rgba(71,71,69,0.1)'
                            }}
                          />
                        </Box>
                        <Typography variant="caption" sx={{ color: '#474745', display: 'block', mb: 1 }}>
                          {item.year}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#474745' }}>
                          {item.description}
                        </Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
