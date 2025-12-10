import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';

import { useLanguage } from '../context/LanguageContext';

const Procedures = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Procedures and Care Pathways | MyHealth Haven</title>
        <meta
          name="description"
          content="Explore the types of procedures supported by MyHealth Haven and how we help you evaluate if they are right for you."
        />
      </Helmet>

      {/* 1. Hero Centered */}
      <Box sx={{ py: { xs: 8, md: 12 }, textAlign: 'center', bgcolor: 'background.default' }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 6, lg: 10 } }}>
          <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
            <Typography variant="h1" gutterBottom>{t('proceduresPage.title')}</Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              {t('proceduresPage.subtitle')}
            </Typography>
            <Button variant="contained" size="large" component={Link} to="/contact" sx={{ mt: 4 }}>
              {t('proceduresPage.cta')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 2. Categories Grid */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'transparent' }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 6, lg: 10 } }}>
          <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
            <Typography variant="h2" gutterBottom>{t('proceduresPage.categoriesTitle')}</Typography>
            <Grid container spacing={3} sx={{ mt: 4 }}>
              {(t('proceduresPage.items') || []).map((proc, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <GlassCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom fontWeight="bold">{proc.title}</Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                        {proc.tags.map(tag => <Chip key={tag} label={tag} size="small" sx={{ mb: 1 }} />)}
                      </Stack>
                      <Typography variant="body2">{proc.body}</Typography>
                    </CardContent>
                    <Box sx={{ p: 2, pt: 0 }}>
                      <Button component={Link} to={`/procedures/${proc.slug}`} size="small" variant="outlined">
                        {t('proceduresPage.viewDetails')}
                      </Button>
                    </Box>

                  </GlassCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Procedures;
