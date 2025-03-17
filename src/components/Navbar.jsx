import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2 }}>
      <Typography 
        variant="h6" 
        component="div" 
        sx={{ 
          fontFamily: 'Montserrat',
          fontStyle: 'italic',
          color: 'primary.main',
          fontWeight: 'bold',
          letterSpacing: 1,
          mb: 2
        }}
      >
        VK
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            component={RouterLink} 
            to={item.path}
            sx={{ 
              textAlign: 'center',
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: 'rgba(71, 71, 69, 0.08)',
              },
            }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
      <Toolbar sx={{ height: '100%', justifyContent: 'space-between' }}>
        <Box
          component={RouterLink}
          to="/"
          sx={{ 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
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
        
        {isMobile ? (
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        ) : (
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
        )}
      </Toolbar>
      
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
