import React from 'react';
import { Container, Typography, Box, Button, TextField, Stack } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ py: 12 }}>
      <Typography variant="h2" gutterBottom color="primary.main">Speak with a Health Navigator™</Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Schedule a confidential conversation to discuss your options.
      </Typography>
      
      <Box component="form" noValidate autoComplete="off" sx={{ mt: 4, maxWidth: 600 }}>
        <Stack spacing={3}>
            <TextField label="Name" variant="outlined" fullWidth />
            <TextField label="Email" variant="outlined" fullWidth />
            <TextField label="Phone (Optional)" variant="outlined" fullWidth />
            <TextField label="How can we help?" variant="outlined" multiline rows={4} fullWidth />
            <Button variant="contained" size="large" sx={{ alignSelf: 'start' }}>
                Request Consultation
            </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Contact;
