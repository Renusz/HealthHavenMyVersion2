import React, { useMemo } from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Chip } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FadeIn from '../components/FadeIn';

const Procedures = () => {
  const { t } = useLanguage();

  const sortedCategories = useMemo(() => {
    const items = t('proceduresPage.items') || [];
    return [...items].sort((a, b) => a.title.localeCompare(b.title));
  }, [t]);

  return (
    <>
      <Helmet>
        <title>Procedures and Care Pathways | MyHealth Haven</title>
        <meta
          name="description"
          content="Explore the types of procedures supported by MyHealth Haven."
        />
      </Helmet>

      <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: 'background.default', minHeight: '80vh' }}>
        <Container maxWidth="xl" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ mb: 8, textAlign: 'center', maxWidth: 'md', mx: 'auto' }}>
            <FadeIn>
            <Typography variant="h2" gutterBottom>{t('proceduresPage.title')}</Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
               {t('proceduresPage.subtitle')}
            </Typography>
            <Button 
              component="a" 
              href="/Procedures.pdf" 
              download
              target="_blank"
              variant="contained" 
              size="large"
              startIcon={<FileDownloadIcon />}
              sx={{ mt: 2 }}
            >
              Download Detailed PDF
            </Button>
            </FadeIn>
          </Box>

          <Grid container spacing={3}>
            {sortedCategories.map((category, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <FadeIn delay={index * 50}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary.main">
                        {category.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {category.body}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {category.tags.map((tag, i) => (
                          <Chip key={i} label={tag} size="small" variant="outlined" />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </FadeIn>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Procedures;
