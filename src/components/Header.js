import { Box, Grid, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';
import { useNavigate } from 'react-router';
import { useSpring, animated } from 'react-spring';

const HeaderContainer = styled(Box)(({ theme, withLine }) => ({
  zIndex: '50',
  paddingTop: withLine ? '60px' : '24px',
  paddingBottom: '24px',
  paddingLeft: '16px',
  paddingRight: '16px',

  [theme.breakpoints.up('md')]: {
    paddingLeft: '100px',
    paddingRight: '100px',
  },

  '& .logo-line': {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      background: '#865EFF',
      top: '23%',
      right: '3%',
      height: '36%',
      width: '39%',
      cursor: 'pointer',
    },
  },

  '& svg': {
    height: '20px',
    width: 'auto',
    cursor: 'pointer',
  },
}));

const Header = ({ withLine = false, anim = false }) => {
  const navigate = useNavigate();
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 }, // Настройка длительности анимации
    delay: 400,
  });
  return (
    <animated.div style={anim ? animation : null}>
      <HeaderContainer withLine>
        <Grid
          container
          justifyContent={{ xs: 'center', sm: 'space-between' }}
          spacing={5}
          alignItems='center'
        >
          <Grid
            size={{ xs: 'auto' }}
            className={withLine ? 'logo-line' : ''}
            onClick={() => navigate('/main')}
          >
            <LogoSvg />
          </Grid>
          <Grid size={{ xs: 12, sm: 'auto' }}>
            <Grid
              container
              spacing={{ xs: 7, md: 14 }}
              justifyContent={{ xs: 'space-around', sm: 'start' }}
            >
              <Grid item>
                <Typography
                  onClick={() => navigate('/cases')}
                  sx={{ cursor: 'pointer' }}
                >
                  Проекты
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  onClick={() => navigate('/services')}
                  sx={{ cursor: 'pointer' }}
                >
                  Услуги
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  onClick={() => navigate('/contact')}
                  sx={{ cursor: 'pointer' }}
                >
                  Контакты
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </HeaderContainer>
    </animated.div>
  );
};

export default Header;
