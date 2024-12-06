import { Box, Container, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { useEffect } from 'react';
import { ContentContainer } from '../ui/ContentContainer';

const PageContainer = styled(Box)(({}) => ({
  marginTop: '100px',
  overflow: 'hidden',
}));

export const ContactPage = ({}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageContainer>
      <ContentContainer>
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant='h3' fontWeight='300'>
              Контакты
            </Typography>
            <Typography fontSize='1.7rem' mt={6}>
              Наш телеграм канал
            </Typography>
            <Typography fontSize='1.7rem' mt={9}>
              Наш инстаграм
            </Typography>
          </Grid>
        </Grid>
      </ContentContainer>
    </PageContainer>
  );
};
