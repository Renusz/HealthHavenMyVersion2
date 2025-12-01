import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | MyHealth Haven</title>
      </Helmet>
      <Box sx={{ py: 12, textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h1" color="primary.main" sx={{ fontSize: '6rem', fontWeight: 900 }}>404</Typography>
          <Typography variant="h4" gutterBottom>Page Not Found</Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Typography>
          <Button variant="contained" size="large" component={Link} to="/" sx={{ mt: 2 }}>
            Go to Homepage
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
