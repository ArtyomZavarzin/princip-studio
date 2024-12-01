import { Box, Container, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Border } from '../ui/Border';
import { Round } from '../ui/Round';
import { OrderBtn } from './OrderBtn';
import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const PageContainer = styled(Box)(({ theme }) => ({
  marginTop: '60px',
  overflow: 'hidden',

  [theme.breakpoints.up('md')]: {
    marginTop: '240px',
  },
}));

export const MainPage = ({}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {}, []);
  return (
    <PageContainer>
      <Container maxWidth={'lg'}>
        <Grid
          container
          spacing={5}
          alignItems='center'
          justifyContent='space-between'
          mb={4}
          className='anim_cont_1'
        >
          <Grid size={{ md: 7 }}>
            <Typography variant='h3' className='anim_1'>
              Сайты и брендинг для B2B, B2C продуктов by PRINCEP STUDIO
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Border />
          </Grid>
        </Grid>
        <OrderBtn />
      </Container>
      <Box mt={'320px'}>
        <Container>
          <Typography
            variant='h3'
            sx={{ textAlign: { xs: 'start', md: 'end' } }}
          >
            Princep studio - оптимальное решение для вашего бизнеса
          </Typography>
          <Grid container spacing={8} mt={8}>
            <Grid size={{ xs: 8, md: 6 }}>
              <Typography fontSize='1.5rem'>
                Быстро, четко и без лишних вопросов.
              </Typography>
            </Grid>
            <Grid size={{ xs: 4, md: 6 }} display='flex' alignItems='center'>
              <Border />
            </Grid>
            <Grid size={{ xs: 4, md: 6 }} display='flex' alignItems='center'>
              <Border side='right' />
            </Grid>
            <Grid size={{ xs: 8, md: 6 }}>
              <Typography fontSize='1.5rem'>
                Создадим качественную концепцию
              </Typography>
            </Grid>
            <Grid size={{ xs: 8, md: 6 }}>
              <Typography fontSize='1.5rem'>
                Потратим минимум вашего времени.
              </Typography>
            </Grid>
            <Grid size={{ xs: 4, md: 6 }} display='flex' alignItems='center'>
              <Border />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box mt={'160px'} sx={{ position: 'relative' }}>
        <Container>
          <Grid
            container
            spacing={4}
            alignItems='center'
            sx={{ minHeight: '400px' }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant='h3' textAlign='center'>
                Наши сайты для:
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{ color: '#6D6D6D', fontSize: '1.5rem' }}
                textAlign='center'
              >
                логистики
              </Typography>
              <Typography
                sx={{ color: '#6D6D6D', fontSize: '1.8rem' }}
                textAlign='center'
              >
                промышленности
              </Typography>
              <Typography variant='h3' textAlign='center'>
                производств
              </Typography>
              <Typography
                sx={{ color: '#6D6D6D', fontSize: '1.8rem' }}
                textAlign='center'
              >
                e - commerce
              </Typography>
              <Typography
                sx={{ color: '#6D6D6D', fontSize: '1.5rem' }}
                textAlign='center'
              >
                общепита
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Round
          deg={180}
          sxProps={{
            position: 'absolute',
            top: 0,
            left: { xs: '-300px', md: '-200px' },
          }}
        />
        <Round
          sxProps={{
            position: 'absolute',
            top: 0,
            right: { xs: '-300px', md: '-200px' },
          }}
        />
      </Box>

      <Box mt={'160px'} sx={{ position: 'relative' }}>
        <Container>
          <Grid container>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography fontSize='1.7rem' fontWeight='bold'>
                B2B сайт - особая философия
              </Typography>
              <Typography fontSize='1.5rem' mt={4}>
                Визуал и ощущения с которым сталкивается ваш потенциальный
                потребитель или партнёр должен вызывать особенные эмоции
                <br />
                <br />
                При всей серьёзности b2b сегмента, для заказчика вы должны
                восприниматься актуальной и современной компанией
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent='end'
            sx={{ mt: { xs: '100px', md: '200px' } }}
          >
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography fontSize='1.7rem' fontWeight='bold'>
                B2С сайт - юзер экспириенс
              </Typography>
              <Typography fontSize='1.5rem' mt={4}>
                Философия вашего бренда должная отражаться в каждом эелементе
                вашего сайта, ваши покупатели хотят притронутся к глубокому миру
                вашего продукта.
                <br />
                <br />
                При переносе вашей философии в сайт, важно следить за удобством
                пользования того, что создали
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: '100px',
                  mb: '100px',
                }}
              >
                <OrderBtn />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Round
          deg={90}
          sxProps={{ position: 'absolute', top: 20, left: '60%' }}
        />
        <Round
          deg={180}
          sxProps={{
            position: 'absolute',
            bottom: -200,
            left: { xs: '-300px', md: '20%' },
          }}
        />
      </Box>
    </PageContainer>
  );
};
