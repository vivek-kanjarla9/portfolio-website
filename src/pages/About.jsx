import { Box, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const timelineItems = [
  {
    year: '2023 - Present',
    title: 'Senior Full Stack Developer',
    organization: 'Tech Solutions Inc.',
    description: 'Leading development of enterprise-level web applications using React and Node.js',
    icon: <WorkIcon />,
    type: 'work'
  },
  {
    year: '2021 - 2023',
    title: 'Full Stack Developer',
    organization: 'Digital Innovations Ltd',
    description: 'Developed and maintained multiple client projects using modern web technologies',
    icon: <WorkIcon />,
    type: 'work'
  },
  {
    year: '2020 - 2021',
    title: 'Junior Developer',
    organization: 'StartUp Hub',
    description: 'Worked on frontend development using React and Material-UI',
    icon: <WorkIcon />,
    type: 'work'
  },
  {
    year: '2018 - 2020',
    title: "Bachelor's in Computer Science",
    organization: 'Tech University',
    description: 'Focus on Software Engineering and Web Technologies',
    icon: <SchoolIcon />,
    type: 'education'
  }
];

const About = () => {
  return (
    <Box 
      component="main"
      sx={{ 
        py: 4,
        position: 'relative',
        zIndex: 0
      }}
    >
      <Typography variant="h2" sx={{ mb: 4 }}>
        Experience & Education
      </Typography>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            backgroundColor: 'background.paper',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(136, 146, 147, 0.1), rgba(204, 214, 216, 0.1))',
              pointerEvents: 'none',
            }
          }}
        >
          <Timeline position="alternate">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      bgcolor: item.type === 'work' ? '#474745' : '#889293',
                      p: 1
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
                    }}
                  >
                    <Typography variant="h6" component="h6" sx={{ color: '#474745' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: '#474745', fontWeight: 600 }}>
                      {item.organization}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#474745', display: 'block', mb: 1 }}>
                      {item.year}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#474745' }}>
                      {item.description}
                    </Typography>
                    <Typography variant="body2">
                      Email: <a href="mailto:kvivek6861@gmail.com">kvivek6861@gmail.com</a>
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Paper>
      </Box>
    </Box>
  );
};

export default About;
