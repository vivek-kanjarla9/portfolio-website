import { Box, Typography, Paper, Container, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import achievementItems from '../data/achievementsData';

const Achievements = () => {
  const getIcon = (type) => {
    switch(type) {
      case 'award':
        return <EmojiEventsIcon />;
      case 'contribution':
        return <CodeIcon />;
      case 'certificate':
        return <WorkspacePremiumIcon />;
      default:
        return <EmojiEventsIcon />;
    }
  };

  const getColor = (type) => {
    switch(type) {
      case 'award':
        return '#474745';
      case 'contribution':
        return '#889293';
      case 'certificate':
        return '#5B6364';
      default:
        return '#474745';
    }
  };

  return (
    <Box sx={{ minHeight: 'calc(100vh - 64px)' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            py: { xs: 4, md: 8 },
            backgroundColor: 'background.paper',
            borderRadius: 2,
            position: 'relative',
            my: 4,
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
              Achievements & Contributions
            </Typography>
            
            <Timeline position="alternate">
              {achievementItems.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        bgcolor: getColor(item.type),
                        p: 1,
                      }}
                    >
                      {getIcon(item.type)}
                    </TimelineDot>
                    {index < achievementItems.length - 1 && (
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
                        textAlign: index % 2 === 0 ? 'left' : 'right'
                      }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 2, 
                        justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' 
                      }}>
                        {index % 2 === 1 && (
                          <Box>
                            <Typography variant="h6" component="h6" sx={{ color: '#474745' }}>
                              {item.title}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ color: '#474745', fontWeight: 600 }}>
                              {item.organization}
                            </Typography>
                          </Box>
                        )}
                        
                        <Avatar
                          src={item.logo}
                          alt={item.organization}
                          sx={{
                            width: 40,
                            height: 40,
                            mx: 2,
                            border: '1px solid rgba(71,71,69,0.1)'
                          }}
                        />
                        
                        {index % 2 === 0 && (
                          <Box>
                            <Typography variant="h6" component="h6" sx={{ color: '#474745' }}>
                              {item.title}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ color: '#474745', fontWeight: 600 }}>
                              {item.organization}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      
                      <Typography variant="body1" sx={{ color: '#474745' }}>
                        {item.description}
                      </Typography>
                      
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          display: 'block', 
                          mt: 2, 
                          color: '#889293',
                          fontWeight: 'bold'
                        }}
                      >
                        {item.year}
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
  );
};

export default Achievements;
