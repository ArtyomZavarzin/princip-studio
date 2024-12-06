import { Box, Container, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Border } from '../ui/Border';
import { Round } from '../ui/Round';
import { OrderBtn } from './OrderBtn';
import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ContentContainer } from '../ui/ContentContainer';

gsap.registerPlugin(ScrollTrigger);

const PageContainer = styled(Box)(({ theme }) => ({
  marginTop: '-136px',
  overflow: 'hidden',

  [theme.breakpoints.up('md')]: {
    marginTop: '-72px',
  },
}));

export const MainPage = ({}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {}, []);
  return (
    <PageContainer>
      <ContentContainer
        // maxWidth={'1600px'}
        sx={{
          minHeight: '100vh',
          display: 'flex',
          // alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Grid
          container
          spacing={5}
          alignItems='center'
          justifyContent='space-between'
          mb={4}
          className='anim_cont_1'
        >
          <Grid size={{ md: 7 }}>
            <Typography variant='h3' className='textChangeAnim'>
              Сайты и брендинг для B2B, B2C продуктов by PRINCEP STUDIO
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Border />
          </Grid>
        </Grid>
        <OrderBtn />
      </ContentContainer>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          // alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <ContentContainer>
          <Typography
            variant='h3'
            sx={{ textAlign: { xs: 'start', md: 'end' } }}
          >
            Princep studio - оптимальное решение для вашего бизнеса
          </Typography>
          <Grid
            container
            rowSpacing={{ xs: 12 }}
            columnSpacing={{ xs: 2, md: 5, xl: 30 }}
            mt={8}
          >
            <Grid size={{ xs: 8, lg: 6 }}>
              <Typography fontSize='1.5rem'>
                Быстро, четко и без лишних вопросов.
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 4, lg: 6 }}
              display='flex'
              alignItems='center'
              justifyContent='end'
            >
              <Border maxWidth='27em' />
            </Grid>
            <Grid size={{ xs: 4, lg: 6 }} display='flex' alignItems='center'>
              <Border maxWidth='27em' side='right' />
            </Grid>
            <Grid size={{ xs: 8, lg: 6 }}>
              <Typography fontSize='1.5rem' align='end'>
                Создадим качественную концепцию
              </Typography>
            </Grid>
            <Grid size={{ xs: 8, lg: 6 }}>
              <Typography fontSize='1.5rem'>
                Потратим минимум вашего времени.
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 4, lg: 6 }}
              display='flex'
              alignItems='center'
              justifyContent='end'
            >
              <Border maxWidth='27em' />
            </Grid>
          </Grid>
        </ContentContainer>
      </Box>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <ContentContainer
          sx={{
            minHeight: '800px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems='center'
            sx={{ width: '100%' }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant='h2' textAlign='center' fontWeight={400}>
                Наши сайты для:
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{ color: '#6D6D6D', fontSize: '2rem' }}
                textAlign='center'
              >
                логистики
              </Typography>
              <Typography
                sx={{ color: '#6D6D6D', fontSize: '2.4rem' }}
                textAlign='center'
              >
                промышленности
              </Typography>
              <Typography variant='h2' textAlign='center' fontWeight={400}>
                производств
              </Typography>
              <Typography
                sx={{ color: '#6D6D6D', fontSize: '2.4rem' }}
                textAlign='center'
              >
                e - commerce
              </Typography>
              <Typography
                sx={{ color: '#6D6D6D', fontSize: '2rem' }}
                textAlign='center'
              >
                общепита
              </Typography>
            </Grid>
          </Grid>
        </ContentContainer>
        <Round
          deg={180}
          sx={{
            position: 'absolute',
            top: 0,
            left: { xs: '-300px', md: '-400px' },
          }}
        />
        <Round
          sx={{
            position: 'absolute',
            bottom: 0,
            right: { xs: '-300px', md: '-400px' },
          }}
        />
      </Box>

      <Box mt={'160px'} sx={{ position: 'relative' }}>
        <ContentContainer>
          <Grid container>
            <Grid size={{ xs: 12, md: 6 }}>
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
            sx={{ mt: { xs: '100px', md: '500px' }, pb: '200px' }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
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
        </ContentContainer>
        <Round deg={90} sx={{ position: 'absolute', top: 0, left: '60%' }} />
        <Round
          deg={180}
          sx={{
            position: 'absolute',
            bottom: { xs: -300, md: -400 },
            left: { xs: '-400px', lg: '20%' },
          }}
        />
      </Box>
    </PageContainer>
  );
};
