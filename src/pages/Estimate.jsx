import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Estimate = () => {
  const { t } = useLanguage();
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'transparent', minHeight: '80vh' }}>
      <Container maxWidth="xl" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ maxWidth: 'md', mx: 'auto', textAlign: 'center', mb: 4 }}>
          <Typography variant="h2" gutterBottom color="primary.main">{t('estimatePage.title')}</Typography>
          <Button 
            component="a" 
            href="/Estimate.pdf" 
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
              src="/Estimate.pdf"
              title="Estimate"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
        </Box>
      </Container>
    </Box>
  );
};

export default Estimate;
