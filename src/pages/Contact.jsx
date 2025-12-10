import React from 'react';
import { Container, Typography, Box, Button, TextField, Stack } from '@mui/material';
import GlassCard from '../components/GlassCard';

import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  return (
    <Container maxWidth="md" sx={{ py: 12 }}>
      <Typography variant="h2" gutterBottom color="primary.main">{t('contactPage.title')}</Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        {t('contactPage.subtitle')}
      </Typography>
      
      <GlassCard sx={{ mt: 4, maxWidth: 600, p: 4 }}>
        <Box component="form" noValidate autoComplete="off">
        <Stack spacing={3}>
            <TextField label={t('contactPage.formName')} variant="outlined" fullWidth />
            <TextField label={t('contactPage.formEmail')} variant="outlined" fullWidth />
            <TextField label={t('contactPage.formPhone')} variant="outlined" fullWidth />
            <TextField label={t('contactPage.formMessage')} variant="outlined" multiline rows={4} fullWidth />
            <Button variant="contained" size="large" sx={{ alignSelf: 'start' }}>
                {t('contactPage.submitButton')}
            </Button>
        </Stack>
        </Box>
      </GlassCard>
    </Container>
  );
};

export default Contact;
