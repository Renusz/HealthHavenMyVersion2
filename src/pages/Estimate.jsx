import React from 'react';
import { Container, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import GlassCard from '../components/GlassCard';

import { useLanguage } from '../context/LanguageContext';

const Estimate = () => {
  const { t } = useLanguage();
  return (
    <Container maxWidth="md" sx={{ py: 12 }}>
      <Typography variant="h2" gutterBottom color="primary.main">{t('estimatePage.title')}</Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        {t('estimatePage.subtitle')}
      </Typography>
      
      <GlassCard sx={{ p: 4, mt: 4, maxWidth: 600 }}>
         <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="procedure-select-label">{t('estimatePage.selectLabel')}</InputLabel>
          <Select
            labelId="procedure-select-label"
            label={t('estimatePage.selectLabel')}
            defaultValue=""
          >
            <MenuItem value="knee-replacement">{t('estimatePage.procedures.knee')}</MenuItem>
            <MenuItem value="hip-replacement">{t('estimatePage.procedures.hip')}</MenuItem>
            <MenuItem value="gastric-sleeve">{t('estimatePage.procedures.sleeve')}</MenuItem>
            <MenuItem value="dental-implants">{t('estimatePage.procedures.dental')}</MenuItem>
            <MenuItem value="rhinoplasty">{t('estimatePage.procedures.rhino')}</MenuItem>
            <MenuItem value="mri">{t('estimatePage.procedures.mri')}</MenuItem>
          </Select>
        </FormControl>
        
        <Typography variant="caption" color="text.secondary">
            {t('estimatePage.disclaimer')}
        </Typography>
      </GlassCard>
    </Container>
  );
};

export default Estimate;
