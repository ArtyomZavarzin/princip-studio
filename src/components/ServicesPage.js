import { Box, Container, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Border } from '../ui/Border';
import { OrderBtn } from './OrderBtn';
import { useEffect } from 'react';
import { ContentContainer } from '../ui/ContentContainer';

const PageContainer = styled(Box)(({}) => ({
  marginTop: '100px',
  overflow: 'hidden',
}));

export const ServicesPage = ({}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageContainer>
      <ContentContainer>
        <Typography variant='h3' mb={9}>
          Princep studio - лучшие в своем сегменте
        </Typography>
        <Grid container alignItems='center' spacing={10}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Border
              side='rigth'
              transform='translateX(-200px) scaleX(-1)'
              height={22}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontSize='1.5rem'>
              Мы являемся дизайн студией миддл сегмена, наши работы лучшие по
              соотношению цены, качества и вашего потраченного времени.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant='h2' fontWeight='500' mt={15}>
          Рарзаботка сайта с 0
        </Typography>
        <Grid container>
          <Grid size={{ md: 8 }}>
            <Typography mt={5} fontSize='1.2rem'>
              Разработка логотипа
              <br></br>
              <br></br>
              Анализируем поведение пользователей и бизнес-задачи, проектируем
              оптимальную структуру, навигацию по сайту и пользовательские
              пути.  На основе этого разрабатываем прототипы сайта и дизайн,
              оптимизированный для различных устройств. Предлагаемые решения: —
              Usability-исследования — Проектирование — A/B тестирование —
              Прототипирование
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Grid container mt={5} spacing={4}>
              <Grid size={{ xs: 12, md: 8 }}>
                <OrderBtn />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Grid container spacing={4}>
                  <Grid size={{ xs: 6 }}>
                    <Typography fontSize='1.2rem'>Стоимость</Typography>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Typography fontSize='1.2rem'>170 000 руб</Typography>
                    <Box
                      className='changeColorAnim'
                      sx={{
                        marginTop: '20px',
                        width: '100vw',
                        height: '12px',
                        // backgroundColor: '#865EFF',
                      }}
                    ></Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant='h2' fontWeight='500' mt={15}>
          Редизайн сайта
        </Typography>
        <Grid container>
          <Grid size={{ md: 8 }}>
            <Typography mt={5} fontSize='1.2rem'>
              Редизайн сайта
              <br></br>
              <br></br>У вас уже есть готовый сайт вместе с структурированной в
              нём информацией,
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Grid container mt={5} spacing={4}>
              <Grid size={{ xs: 12, md: 8 }}>
                <OrderBtn />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Grid container spacing={4}>
                  <Grid size={{ xs: 6 }}>
                    <Typography fontSize='1.2rem'>Стоимость</Typography>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Typography fontSize='1.2rem'>130 000 руб</Typography>
                    <Box
                      className='changeColorAnim'
                      sx={{
                        marginTop: '20px',
                        width: '100vw',
                        height: '12px',
                        // backgroundColor: '#865EFF',
                      }}
                    ></Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>
    </PageContainer>
  );
};
