import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const articleData = {
  "is-medical-travel-right-for-me": { title: "Is Medical Travel Right for Me?", summary: "A balanced guide to understanding benefits, risks, and non-obvious considerations." },
  "how-we-vet-hospitals": { title: "How We Vet Hospitals and Surgeons", summary: "Our standards for selecting partners and what they mean in everyday language." },
  "talking-to-your-us-doctor": { title: "Talking to Your U.S. Doctor About Care in Mexico", summary: "Suggested questions and ways to keep continuity of care front and center." }
};

const LibraryDetailStub = () => {
  const { slug } = useParams();
  const data = articleData[slug] || { title: "Article", summary: "" };

  return (
    <>
      <Helmet>
        <title>{data.title} | MyHealth Haven</title>
      </Helmet>
      <Box sx={{ py: 12 }}>
        <Container maxWidth="md">
          <Typography variant="overline" color="primary.main">Guide</Typography>
          <Typography variant="h1" gutterBottom>{data.title}</Typography>
          <Typography variant="h5" color="text.secondary" paragraph>{data.summary}</Typography>
          <Box sx={{ mt: 6, typography: 'body1', color: 'text.secondary' }}>
            <Typography paragraph>
              [Full article content will be populated here. This is a placeholder for the educational content.]
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Button variant="contained" size="large" component={Link} to="/contact">
              Discuss this topic with a Navigator
            </Button>
          </Box>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
             <Button component={Link} to="/library" variant="text">&larr; Back to Library</Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LibraryDetailStub;
