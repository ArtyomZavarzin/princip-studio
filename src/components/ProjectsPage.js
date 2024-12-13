import { Box, Container, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import case1 from '../assets/case1.png';
import { ReactComponent as Case2 } from '../assets/case2.svg';
import { ReactComponent as Case3 } from '../assets/case3.svg';
import case4 from '../assets/case4.png';
import { ReactComponent as Case5 } from '../assets/case5.svg';
import { ReactComponent as Case6 } from '../assets/case6.svg';
import { OrderBtn } from './OrderBtn';
import { useEffect } from 'react';
import { ContentContainer } from '../ui/ContentContainer';

const PageContainer = styled(Box)(({}) => ({
  marginTop: '100px',
  overflow: 'hidden',
}));

export const ProjectsPage = ({}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageContainer>
      <ContentContainer>
        <Grid container>
          <Grid size={{ md: 6 }}>
            <Typography variant='h3' fontWeight='300'>
              Кейсы
            </Typography>
            <Typography fontSize='1.7rem' mt={4}>
              Мы избирательны в своих проектах
            </Typography>
            <Typography fontSize='1.5rem' mt={4}>
              Нам важно создать качественный продукт, который мы можем полностью
              понять и выявить нужные потребности для нашего клиента
            </Typography>
          </Grid>
        </Grid>

        <Grid container mt={15} spacing={8}>
          <Grid size={{ xs: 5 }} display={{ xs: 'none', md: 'block' }}></Grid>
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <img
              src={case1}
              style={{ width: '60%', height: 'auto', cursor: 'pointer' }}
              alt='case 1'
              onClick={() =>
                window.open('https://properly-nutrition.com', '_blank').focus()
              }
            />
          </Grid>

          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Case2 style={{ width: '60%', height: 'auto' }} />
          </Grid>
          <Grid size={{ xs: 12 }} display={{ xs: 'none', md: 'block' }}></Grid>

          <Grid size={{ xs: 5 }} display={{ xs: 'none', md: 'block' }}></Grid>
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Case3 style={{ width: '60%', height: 'auto' }} />
          </Grid>

          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <img
              src={case4}
              style={{ width: '60%', height: 'auto', cursor: 'pointer' }}
              alt='case 1'
              onClick={() => window.open('https://tgkn.ru', '_blank').focus()}
            />
          </Grid>
          <Grid size={{ xs: 12 }} display={{ xs: 'none', md: 'block' }}></Grid>

          <Grid size={{ xs: 5 }} display={{ xs: 'none', md: 'block' }}></Grid>
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Case5 style={{ width: '60%', height: 'auto' }} />
          </Grid>

          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box
              sx={{
                background: 'blue',
                width: '60%',
                padding: '14px',
                cursor: 'pointer',
              }}
              onClick={() =>
                window.open('https://swoove.com', '_blank').focus()
              }
            >
              <Case6 style={{ width: '100%', height: 'auto' }} />
            </Box>
          </Grid>
          <Grid size={{ xs: 12 }} display={{ xs: 'none', md: 'block' }}></Grid>
        </Grid>
        <Box mt={16} mb={6} display='flex' justifyContent='center'>
          <OrderBtn large={true} />
        </Box>
      </ContentContainer>
    </PageContainer>
  );
};
