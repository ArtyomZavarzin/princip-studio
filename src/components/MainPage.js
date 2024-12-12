import {
  Box,
  Container,
  maxWidth,
  styled,
  useMediaQuery,
  useTheme,
  width,
} from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Border } from '../ui/Border';
import { Round } from '../ui/Round';
import { OrderBtn } from './OrderBtn';
import ReactPageScroller, { SectionContainer } from 'react-page-scroller';
import { ContentContainer } from '../ui/ContentContainer';
import Header from './Header';
import { Animated } from '../ui/Animated';

const PageContainer = styled(Box)(({ theme }) => ({
  // overflow: 'hidden',
  // overflowY: 'scroll',
  height: 'var(--app-height)',
  minHeight: '-webkit-fill-available',
  'scroll-snap-type': 'y mandatory',
  scrollBehavior: 'smooth',
}));

export const MainPage = ({ fromTemplate }) => {
  const theme = useTheme();
  const lessThanMid = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <PageContainer>
      <ReactPageScroller>
        <SectionContainer height={100}>
          <Box
            sx={{
              scrollSnapAlign: 'start',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 'var(--app-height)',
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
                  <Animated>
                    <Typography
                      variant={'h3'}
                      className='textChangeAnim'
                      sx={{ fontSize: { xs: '2em', md: '3em' } }}
                    >
                      Сайты и брендинг для B2B, B2C продуктов by PRINCEP STUDIO
                    </Typography>
                  </Animated>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  <Animated from='right'>
                    <Border height='18' />
                  </Animated>
                </Grid>
              </Grid>
              <Animated>
                <OrderBtn />
              </Animated>
            </ContentContainer>
          </Box>
        </SectionContainer>
        <SectionContainer height={100}>
          <Box
            sx={{
              minHeight: 'var(--app-height)',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              scrollSnapAlign: 'start',
              paddingTop: '20px',
              paddingBottom: '20px',
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
                  fontSize: { xs: '2em', md: '3em' },
                }}
              >
                Princep studio - оптимальное решение для вашего бизнеса
              </Typography>
              <Grid
                container
                rowSpacing={{ xs: 1, md: 12 }}
                columnSpacing={{ xs: 2, md: 5, xl: 30 }}
                mt={{ xs: 3, md: 8 }}
                mb={8}
              >
                <Grid size={{ xs: 8, lg: 6 }}>
                  <Animated>
                    <Typography fontSize='1.5rem'>
                      Быстро, четко и без лишних вопросов.
                    </Typography>
                  </Animated>
                </Grid>
                <Grid
                  size={{ xs: 4, lg: 6 }}
                  display='flex'
                  alignItems='center'
                  justifyContent='end'
                >
                  <Animated
                    from='right'
                    sx={{ width: '100%', maxWidth: '27em' }}
                  >
                    <Border />
                  </Animated>
                </Grid>
                <Grid
                  size={{ xs: 4, lg: 6 }}
                  display='flex'
                  alignItems='center'
                >
                  <Animated sx={{ width: '100%', maxWidth: '27em' }}>
                    <Border side='right' />
                  </Animated>
                </Grid>
                <Grid size={{ xs: 8, lg: 6 }}>
                  <Animated from='right'>
                    <Typography fontSize='1.5rem' align='end'>
                      Создадим качественную концепцию
                    </Typography>
                  </Animated>
                </Grid>
                <Grid size={{ xs: 8, lg: 6 }}>
                  <Animated>
                    <Typography fontSize='1.5rem'>
                      Потратим минимум вашего времени.
                    </Typography>
                  </Animated>
                </Grid>
                <Grid
                  size={{ xs: 4, lg: 6 }}
                  display='flex'
                  alignItems='center'
                  justifyContent='end'
                >
                  <Animated
                    from='right'
                    sx={{ width: '100%', maxWidth: '27em' }}
                  >
                    <Border />
                  </Animated>
                </Grid>
              </Grid>
            </ContentContainer>
          </Box>
        </SectionContainer>
        <Box
          sx={{
            scrollSnapAlign: 'start',
            width: '100%',
            minHeight: { xs: 'var(--app-height)' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ position: 'relative', width: '100%' }}>
            <ContentContainer
              sx={{
                minHeight: { xs: 'var(--app-height)', md: '800px' },
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Grid
                container
                spacing={4}
                alignItems='center'
                sx={{ width: '100%' }}
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography
                    variant='h2'
                    textAlign='center'
                    fontWeight={400}
                    sx={{ fontSize: { xs: '3em', md: '3.75rem' } }}
                  >
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
                left: { xs: '-250px', sm: '-300px', md: '-400px' },
              }}
            />
            <Round
              className='round-animation'
              sx={{
                position: 'absolute',
                bottom: 0,
                right: { xs: '-250px', sm: '-300px', md: '-400px' },
              }}
            />
          </Box>
        </Box>

        <Box
          pt={{ sx: '40px', md: '160px' }}
          sx={{ position: 'relative', scrollSnapAlign: 'start' }}
        >
          <ContentContainer>
            <Animated>
              <Grid container>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography
                    fontSize='1.7rem'
                    fontWeight='bold'
                    mt={{ xs: 2, md: 0 }}
                  >
                    B2B сайт - особая философия
                  </Typography>
                  <Typography fontSize='1.5rem' mt={{ xs: 2, md: 4 }}>
                    Визуал и ощущения с которым сталкивается ваш потенциальный
                    потребитель или партнёр должен вызывать особенные эмоции
                    <br />
                    <br />
                    При всей серьёзности b2b сегмента, для заказчика вы должны
                    восприниматься актуальной и современной компанией
                  </Typography>
                </Grid>
              </Grid>
            </Animated>
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
            display: 'flex',
            flexDirection: 'column',
            height: 'var(--app-height)',
          }}
        >
          <ContentContainer
            // height={{ xs: 'var(--app-height)' }}
            sx={{ flexGrow: 1 }}
          >
            <Animated from='right'>
              <Grid
                container
                justifyContent='end'
                sx={{ mt: { xs: 2, md: '200px' }, pb: { xs: 2, md: '200px' } }}
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontSize='1.7rem' fontWeight='bold'>
                    B2С сайт - юзер экспириенс
                  </Typography>
                  <Typography fontSize='1.5rem' mt={{ xs: 2, md: 4 }}>
                    Философия вашего бренда должная отражаться в каждом
                    эелементе вашего сайта, ваши покупатели хотят притронутся к
                    глубокому миру вашего продукта.
                    <br />
                    <br />
                    При переносе вашей философии в сайт, важно следить за
                    удобством пользования того, что создали
                  </Typography>

                  <Box
                    sx={{
                      display: { xs: 'none', md: 'flex' },
                      justifyContent: 'center',
                      mt: { md: '100px' },
                      // mb: '100px',
                    }}
                  >
                    <OrderBtn />
                  </Box>
                </Grid>
              </Grid>
            </Animated>
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
          {!lessThanMid && <Header></Header>}
        </Box>
        {lessThanMid && (
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              height: 'var(--app-height)',
            }}
          >
            <Box
              sx={{
                display: { xs: 'flex' },
                flexGrow: '1',
                alignItems: 'center',
                justifyContent: 'center',
                mt: { md: '100px' },
                mb: '100px',
              }}
            >
              <OrderBtn />
            </Box>
            <Header></Header>
          </Box>
        )}
      </ReactPageScroller>
    </PageContainer>
  );
};
