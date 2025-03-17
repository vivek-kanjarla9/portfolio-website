import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoIcon from '@mui/icons-material/Info';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import projects from '../data/projectsData';

const Projects = () => {
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
            Featured Projects
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(71, 71, 69, 0.05), rgba(136, 146, 147, 0.05))',
                      borderRadius: 2,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{
                        mb: 2,
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        fontWeight: 600,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: '#CCD6D8',
                            color: '#474745',
                            '&:hover': {
                              backgroundColor: '#B7C1C3',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, position: 'relative', zIndex: 1 }}>
                    <Button
                      component={RouterLink}
                      to={`/project/${project.id}`}
                      size="small"
                      startIcon={<InfoIcon />}
                      sx={{
                        color: '#474745',
                        '&:hover': {
                          color: '#2A2A29',
                        },
                      }}
                    >
                      View Details
                    </Button>
                    {project.source && (
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#474745',
                        '&:hover': {
                          color: '#2A2A29',
                        },
                      }}
                    >
                      Code
                    </Button>
                    )}
                    {project.live && project.live !== '#' && (
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#474745',
                          '&:hover': {
                            color: '#2A2A29',
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.videoLink && (
                      <Button
                        size="small"
                        startIcon={<PlayArrowIcon />}
                        href={project.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#FF0000',
                          '&:hover': {
                            color: '#CC0000',
                          },
                        }}
                      >
                        Video
                      </Button>
                    )}
                    {project.videoLink1 && (
                      <Button
                        size="small"
                        startIcon={<PlayArrowIcon />}
                        href={project.videoLink1}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#FF0000',
                          '&:hover': {
                            color: '#CC0000',
                          },
                        }}
                      >
                        Demo 1
                      </Button>
                    )}
                    {project.videoLink2 && (
                      <Button
                        size="small"
                        startIcon={<PlayArrowIcon />}
                        href={project.videoLink2}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#FF0000',
                          '&:hover': {
                            color: '#CC0000',
                          },
                        }}
                      >
                        Demo 2
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
