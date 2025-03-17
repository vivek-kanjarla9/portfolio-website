import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Button, Chip, Grid, Paper, Divider, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReactMarkdown from 'react-markdown';
import projects from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find the project with the matching id
    const foundProject = projects.find(p => p.id === id);
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h1" align="center">
          Project not found
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            component={RouterLink} 
            to="/projects" 
            startIcon={<ArrowBackIcon />}
            sx={{ color: '#474745' }}
          >
            Back to Projects
          </Button>
        </Box>
      </Container>
    );
  }

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
        <Button 
          component={RouterLink} 
          to="/projects" 
          startIcon={<ArrowBackIcon />}
          sx={{ 
            mb: 4, 
            color: '#474745',
            '&:hover': {
              backgroundColor: 'rgba(71, 71, 69, 0.05)',
            }
          }}
        >
          Back to Projects
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #474745 30%, #889293 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {project.title}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
            {project.technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
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

          <Box sx={{ mb: 6 }}>
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: '100%',
                height: { xs: 250, sm: 350, md: 450 },
                objectFit: 'cover',
                borderRadius: 2,
                mb: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            />
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  backgroundColor: '#f8f9fa',
                  borderRadius: 2,
                  mb: 4
                }}
              >
                <Typography variant="h5" component="h2" sx={{ mb: 3, color: '#474745' }}>
                  Project Overview
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => (
                        <a 
                          {...props} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            color: '#4285F4', 
                            textDecoration: 'none',
                            fontWeight: 500,
                            borderBottom: '1px solid #4285F4'
                          }}
                        />
                      )
                    }}
                  >
                    {project.fullDescription || project.description}
                  </ReactMarkdown>
                </Box>

                {project.challenges && (
                  <>
                    <Typography variant="h5" component="h2" sx={{ mb: 3, color: '#474745' }}>
                      Challenges & Solutions
                    </Typography>
                    <Box sx={{ mb: 4 }}>
                      <ReactMarkdown
                        components={{
                          a: ({ node, ...props }) => (
                            <a 
                              {...props} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{ 
                                color: '#4285F4', 
                                textDecoration: 'none',
                                fontWeight: 500,
                                borderBottom: '1px solid #4285F4'
                              }}
                            />
                          )
                        }}
                      >
                        {project.challenges}
                      </ReactMarkdown>
                    </Box>
                  </>
                )}

                {project.implementation && (
                  <>
                    <Typography variant="h5" component="h2" sx={{ mb: 3, color: '#474745' }}>
                      Implementation Details
                    </Typography>
                    <Box sx={{ mb: 4 }}>
                      <ReactMarkdown
                        components={{
                          a: ({ node, ...props }) => (
                            <a 
                              {...props} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{ 
                                color: '#4285F4', 
                                textDecoration: 'none',
                                fontWeight: 500,
                                borderBottom: '1px solid #4285F4'
                              }}
                            />
                          )
                        }}
                      >
                        {project.implementation}
                      </ReactMarkdown>
                    </Box>
                  </>
                )}

                {project.results && (
                  <>
                    <Typography variant="h5" component="h2" sx={{ mb: 3, color: '#474745' }}>
                      Results & Impact
                    </Typography>
                    <Box>
                      <ReactMarkdown
                        components={{
                          a: ({ node, ...props }) => (
                            <a 
                              {...props} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{ 
                                color: '#4285F4', 
                                textDecoration: 'none',
                                fontWeight: 500,
                                borderBottom: '1px solid #4285F4'
                              }}
                            />
                          )
                        }}
                      >
                        {project.results}
                      </ReactMarkdown>
                    </Box>
                  </>
                )}
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  backgroundColor: '#f8f9fa',
                  borderRadius: 2,
                  mb: 4,
                  position: 'sticky',
                  top: 80
                }}
              >
                <Typography variant="h5" component="h2" sx={{ mb: 3, color: '#474745' }}>
                  Project Details
                </Typography>
                
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#474745' }}>
                  Timeline
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {project.timeline || "Not specified"}
                </Typography>
                
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#474745' }}>
                  Role
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {project.role || "Not specified"}
                </Typography>
                
                {project.teamSize && (
                  <>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#474745' }}>
                      Team Size
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 4 }}>
                      {project.teamSize}
                    </Typography>
                  </>
                )}
                
                {!project.teamSize && (
                  <Box sx={{ mb: 2 }}></Box>
                )}
                
                <Divider sx={{ mb: 4 }} />
                
                {((project.live && project.live !== '#') || project.driveLink || project.videoLink || project.videoLink1 || project.videoLink2) && (
                <>
                <Typography variant="h6" sx={{ mb: 2, color: '#474745' }}>
                  Links
                </Typography>
                
                <Stack direction="column" spacing={2}>
                  {project.live && project.live !== '#' && (
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<VisibilityIcon />}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textTransform: 'none',
                        borderRadius: 2,
                      }}
                    >
                      View Live
                    </Button>
                  )}
                  
                  {project.driveLink && (
                    <Button
                      variant="outlined"
                      startIcon={<InsertDriveFileIcon />}
                      href={project.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textTransform: 'none',
                        borderRadius: 2,
                        borderColor: '#4285F4',
                        color: '#4285F4',
                        '&:hover': {
                          borderColor: '#3367d6',
                          backgroundColor: 'rgba(66, 133, 244, 0.04)',
                        },
                      }}
                    >
                      {project.driveText || 'Google Drive'}
                    </Button>
                  )}
                  
                  {project.videoLink && (
                    <Button
                      variant="outlined"
                      startIcon={<PlayArrowIcon />}
                      href={project.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textTransform: 'none',
                        borderRadius: 2,
                        borderColor: '#FF0000',
                        color: '#FF0000',
                        '&:hover': {
                          borderColor: '#CC0000',
                          backgroundColor: 'rgba(255, 0, 0, 0.04)',
                        },
                      }}
                    >
                      {project.videoText || 'Watch Video'}
                    </Button>
                  )}
                  
                  {project.videoLink1 && (
                    <Button
                      variant="outlined"
                      startIcon={<PlayArrowIcon />}
                      href={project.videoLink1}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textTransform: 'none',
                        borderRadius: 2,
                        borderColor: '#FF0000',
                        color: '#FF0000',
                        '&:hover': {
                          borderColor: '#CC0000',
                          backgroundColor: 'rgba(255, 0, 0, 0.04)',
                        },
                      }}
                    >
                      {project.videoText1 || 'Demo Video 1'}
                    </Button>
                  )}
                  
                  {project.videoLink2 && (
                    <Button
                      variant="outlined"
                      startIcon={<PlayArrowIcon />}
                      href={project.videoLink2}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textTransform: 'none',
                        borderRadius: 2,
                        borderColor: '#FF0000',
                        color: '#FF0000',
                        '&:hover': {
                          borderColor: '#CC0000',
                          backgroundColor: 'rgba(255, 0, 0, 0.04)',
                        },
                      }}
                    >
                      {project.videoText2 || 'Demo Video 2'}
                    </Button>
                  )}
                </Stack>
                
                <Divider sx={{ my: 4 }} />
                </>
                )}
                
                {!((project.live && project.live !== '#') || project.driveLink || project.videoLink || project.videoLink1 || project.videoLink2) && (
                  <Divider sx={{ my: 4 }} />
                )}
                
                <Typography variant="h6" sx={{ mb: 2, color: '#474745' }}>
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {project.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: '#CCD6D8',
                        color: '#474745',
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProjectDetail;
