import { Box, Grid, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';
import { useNavigate } from 'react-router';

const HeaderContainer = styled(Box)(({ theme }) => ({
  paddingTop: '24px',
  paddingBottom: '24px',
  paddingLeft: '16px',
  paddingRight: '16px',

  [theme.breakpoints.up('md')]: {
    paddingLeft: '50px',
    paddingRight: '50px',
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

const Header = ({ withLine = false }) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
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
            spacing={7}
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
  );
};

export default Header;
