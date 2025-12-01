import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const procedureData = {
  "orthopedic": { title: "Orthopedic Surgery", summary: "Knee, Hip, and Spine procedures." },
  "bariatric": { title: "Bariatric & Metabolic", summary: "Weight loss surgery options." },
  "dental": { title: "Dental & Full-Mouth", summary: "Implants and reconstruction." },
  "cosmetic": { title: "Cosmetic & Reconstructive", summary: "Body contouring and facial procedures." },
  "fertility": { title: "Fertility & Women’s Health", summary: "IVF and gynecologic surgery." },
  "other": { title: "Other Medical Necessities", summary: "General surgery and more." }
};

const ProcedureDetailStub = () => {
  const { slug } = useParams();
  const data = procedureData[slug] || { title: "Procedure Details", summary: "Information about this procedure." };

  return (
    <>
      <Helmet>
        <title>{data.title} | MyHealth Haven</title>
      </Helmet>
      <Box sx={{ py: 12, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" color="text.secondary">Procedure Category</Typography>
          <Typography variant="h1" gutterBottom>{data.title}</Typography>
          <Typography variant="h5" color="text.secondary" paragraph>{data.summary}</Typography>
          <Box sx={{ mt: 4, p: 4, bgcolor: 'grey.50', borderRadius: 2 }}>
            <Typography variant="body1" paragraph>
              Detailed information about specific procedures, surgeons, and hospitals for {data.title} will be available here soon.
            </Typography>
            <Button variant="contained" size="large" component={Link} to="/contact">
              Speak with a Health Navigator™ about {data.title}
            </Button>
          </Box>
          <Box sx={{ mt: 4 }}>
             <Button component={Link} to="/procedures" variant="text">&larr; Back to Procedures</Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProcedureDetailStub;
