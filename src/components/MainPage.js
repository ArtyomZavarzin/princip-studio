import { Box, Container, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Border } from '../ui/Border';
import { Round } from '../ui/Round';
import { OrderBtn } from './OrderBtn';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ContentContainer } from '../ui/ContentContainer';
import Header from './Header';

const PageContainer = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  overflowY: 'scroll',
  height: '100vh',
  'scroll-snap-type': 'y mandatory',
  scrollBehavior: 'smooth',
}));

export const MainPage = ({ fromTemplate }) => {
  return (
    <PageContainer>
      <Box
        sx={{
          scrollSnapAlign: 'start',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header withLine={true} anim={!fromTemplate}></Header>
        <ContentContainer
          sx={{
            flexGrow: '1',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          <Grid
            container
            spacing={{ xs: 5, lg: 30 }}
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
              <Border height='18' />
            </Grid>
          </Grid>
          <OrderBtn />
        </ContentContainer>
      </Box>

      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          scrollSnapAlign: 'start',
        }}
      >
        <ContentContainer>
          <Typography
            variant='h3'
            sx={{
              textAlign: { xs: 'start', md: 'end' },
              width: { xs: '100%', md: '80%' },
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Princep studio - оптимальное решение для вашего бизнеса
          </Typography>
          <Grid
            container
            rowSpacing={{ xs: 12 }}
            columnSpacing={{ xs: 2, md: 5, xl: 30 }}
            mt={8}
            mb={8}
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
          scrollSnapAlign: 'start',
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
          className='round-animation'
          deg={180}
          sx={{
            position: 'absolute',
            top: 0,
            left: { xs: '-200px', sm: '-300px', md: '-400px' },
          }}
        />
        <Round
          className='round-animation'
          sx={{
            position: 'absolute',
            bottom: 0,
            right: { xs: '-200px', sm: '-300px', md: '-400px' },
          }}
        />
      </Box>
      <Box
        pt={{ sx: '40px', md: '160px' }}
        sx={{ position: 'relative', scrollSnapAlign: 'start' }}
      >
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
        </ContentContainer>
        <Round
          className='round-animation'
          deg={90}
          sx={{
            position: 'absolute',
            top: 160,
            left: { xs: '50%', md: '60%' },
          }}
          threshold='0.4'
        />
      </Box>
      <Box
        sx={{
          position: 'relative',
          scrollSnapAlign: 'start',
          overflow: 'hidden',
        }}
      >
        <ContentContainer>
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
        <Round
          className='round-animation'
          deg={180}
          sx={{
            position: 'absolute',
            bottom: { xs: -300 + 100, md: -400 + 100 },
            left: { xs: '-200px', sm: '-400px', lg: '20%' },
          }}
          threshold='0.2'
        />
        <Header></Header>
      </Box>
    </PageContainer>
  );
};
