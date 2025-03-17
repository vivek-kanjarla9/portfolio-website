import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textAlign: 'center',
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #474745 30%, #889293 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get in Touch
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 4, md: 8 }}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ height: '100%' }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 4,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 600,
                  }}
                >
                  Contact Information
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <EmailIcon sx={{ mr: 2, color: '#474745' }} />
                    <Typography variant="body2">
                      Email: <a href="mailto:kvivek6861@gmail.com">kvivek6861@gmail.com</a>
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <LocationOnIcon sx={{ mr: 2, color: '#474745' }} />
                    <Typography variant="body1">
                      Hyderabad, Telangana, India
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <LinkedInIcon sx={{ mr: 2, color: '#474745' }} />
                    <Typography variant="body2">
                      LinkedIn: <a href="https://www.linkedin.com/in/vivek-kanjarla/" target="_blank">https://www.linkedin.com/in/vivek-kanjarla/</a>
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Connect with me
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <motion.a
                      href="https://www.linkedin.com/in/vivek-kanjarla/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4 }}
                      style={{ color: '#474745' }}
                    >
                      <LinkedInIcon sx={{ fontSize: 32 }} />
                    </motion.a>
                    <motion.a
                      href="https://github.com/vivek-kanjarla"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4 }}
                      style={{ color: '#474745' }}
                    >
                      <GitHubIcon sx={{ fontSize: 32 }} />
                    </motion.a>
                    <motion.a
                      onClick={() => {
                        navigator.clipboard.writeText('kvivek6861@gmail.com');
                        alert('Email address copied to clipboard!');
                      }}
                      whileHover={{ y: -4 }}
                      style={{ color: '#474745' }}
                    >
                      <EmailIcon sx={{ fontSize: 32 }} />
                    </motion.a>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
