import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'background.paper',
        boxShadow: 1,
        height: '64px' // Fixed height for navbar
      }}
    >
      <Toolbar sx={{ height: '100%' }}>
        <Box
          component={RouterLink}
          to="/"
          sx={{ 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            mr: 4
          }}
        >
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontFamily: 'Montserrat',
              fontStyle: 'italic',
              color: 'primary.main',
              fontWeight: 'bold',
              letterSpacing: 1
            }}
          >
            VK
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              component={RouterLink}
              to={item.path}
              sx={{
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(71, 71, 69, 0.08)',
                },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
