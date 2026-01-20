import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Procedures = () => {
  const { t } = useLanguage();

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
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="h2" gutterBottom>{t('proceduresPage.title')}</Typography>
            <Button 
              component="a" 
              href="/Procedures.pdf" 
              download 
              variant="outlined" 
              startIcon={<FileDownloadIcon />}
              sx={{ mt: 2 }}
            >
              Download PDF
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1, width: '100%', height: '800px', bgcolor: 'background.paper', borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
            <iframe
              src="/Procedures.pdf"
              title="Procedures"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Procedures;
