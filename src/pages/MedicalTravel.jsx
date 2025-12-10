import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Card,
  CardContent,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FadeIn from '../components/FadeIn';
import GlassCard from '../components/GlassCard';


import { useLanguage } from '../context/LanguageContext';

const MedicalTravel = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Medical Travel with Guidance | MyHealth Haven</title>
        <meta
          name="description"
          content="Understand how travel, safety, and logistics work when you receive care in Mexico with MyHealth Haven."
        />
      </Helmet>

      {/* 1. Hero Split */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F4FAFF' }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 6, lg: 10 } }}>
          <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <FadeIn>
                  <Typography variant="h1" gutterBottom>{t('medicalTravelPage.title')}</Typography>
                  <Typography variant="h5" color="text.secondary" paragraph>
                    {t('medicalTravelPage.subtitle')}
                  </Typography>
                  <Button variant="contained" size="large" component={Link} to="/contact">
                    {t('medicalTravelPage.cta')}
                  </Button>
                </FadeIn>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                {/* Placeholder for Travel Image */}
                <Box sx={{ height: 300, bgcolor: 'grey.200', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <FlightTakeoffIcon sx={{ fontSize: 80, color: 'grey.400' }} />
                   <Typography variant="caption" sx={{ ml: 2, color: 'text.secondary' }}>[Travel Image Placeholder]</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 2. Locations Overview */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'transparent' }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 6, lg: 10 } }}>
          <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
            <FadeIn>
              <Typography variant="h2" gutterBottom>{t('medicalTravelPage.locationsTitle')}</Typography>
              <Typography variant="body1" paragraph sx={{ maxWidth: 800 }}>
                {t('medicalTravelPage.locationsDesc')}
              </Typography>
            </FadeIn>
              
              <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                   <FadeIn delay={100}>
                     <GlassCard sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LocationOnIcon color="primary" fontSize="large" />
                        <Typography variant="h6" sx={{ ml: 1 }}>{t('medicalTravelPage.cancunHub')}</Typography>
                     </GlassCard>
                   </FadeIn>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                   <FadeIn delay={200}>
                     <GlassCard sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h6" color="text.secondary">{t('medicalTravelPage.comingSoon')}</Typography>
                     </GlassCard>
                   </FadeIn>
                </Grid>
              </Grid>
          </Box>
        </Container>
      </Box>

      {/* 3. Travel Flow (Vertical Steps) */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'transparent' }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 6, lg: 10 } }}>
          <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
            <FadeIn>
              <Typography variant="h2" align="center" gutterBottom>{t('medicalTravelPage.timelineTitle')}</Typography>
            </FadeIn>
              <Stack spacing={4} sx={{ mt: 6, position: 'relative' }}>
                {/* Vertical Line */}
                <Box sx={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 2, bgcolor: 'primary.light', zIndex: 0, display: { xs: 'none', md: 'block' } }} />
                
                {(t('medicalTravelPage.timelineSteps') || []).map((step, i) => (
                  <FadeIn key={i} delay={i * 100}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                      <Box sx={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: '50%', 
                        bgcolor: 'primary.main', 
                        color: 'white', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        mr: 3
                      }}>
                        {i + 1}
                      </Box>
                      <GlassCard sx={{ flexGrow: 1, p: 2 }}>
                        <Typography variant="body1" fontWeight={500}>{step}</Typography>
                      </GlassCard>
                    </Box>
                  </FadeIn>
                ))}
              </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MedicalTravel;
