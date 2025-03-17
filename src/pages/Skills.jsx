import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import MemoryIcon from '@mui/icons-material/Memory';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ScienceIcon from '@mui/icons-material/Science';


const skillCategories = [
  {
    title: 'Languages',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    skills: ['Python', 'C++', 'Bash', 'MATLAB'],
    color: '#474745'
  },
  {
    title: 'Libraries/Tools',
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    skills: ['COMSOL', 'LTspice', 'TensorFlow', 'Keras', 'PyTorch', 'RoBERTa', 'spaCy', 'NLTK'],
    color: '#889293'
  },
  {
    title: 'ROS',
    icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
    skills: ['ros_control', 'gazebo_ros_control', 'tf2', 'cv_bridge', 'robot_localization', 'ORB-SLAM2'],
    color: '#5B6364'
  },
  {
    title: 'Sensors/Hardware',
    icon: <MemoryIcon sx={{ fontSize: 40 }} />,
    skills: ['Jetson Nano', 'Raspberry Pi', 'Arduino', 'STM32'],
    color: '#B7C1C3'
  }
];

const Skills = () => {
  return (
    <Box 
      sx={{ 
        minHeight: 'calc(100vh - 64px)',
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        backgroundColor: 'background.default'
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
              color: 'primary.dark',
            }}
          >
            Technical Skills
          </Typography>
        </motion.div>

        <Grid container spacing={3} justifyContent="center">
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ width: '100%', height: '100%' }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 6,
                    },
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '5px',
                      backgroundColor: category.color,
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        color: category.color,
                      }}
                    >
                      {category.icon}
                      <Typography
                        variant="h5"
                        sx={{
                          ml: 2,
                          fontWeight: 600,
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                          color: 'primary.dark',
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Box>
                    <Grid container spacing={1} sx={{ flexGrow: 1 }}>
                      {category.skills.map((skill, skillIndex) => (
                        <Grid item xs={6} key={skillIndex}>
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'primary.dark',
                              fontSize: { xs: '0.9rem', md: '1rem' },
                              py: 0.5,
                            }}
                          >
                            • {skill}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
