import { Box, styled } from '@mui/system';

export const ContentContainer = styled(Box)(({ theme }) => ({
  marginLeft: '16px',
  marginRight: '16px',
  maxWidth: '100%',

  [theme.breakpoints.up('sm')]: {
    maxWidth: '1100px',
    marginLeft: '32px',
    marginRight: '32px',
  },

  [theme.breakpoints.up('md')]: {},

  [theme.breakpoints.up('lg')]: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1100px',
  },

  [theme.breakpoints.up('xl')]: {
    maxWidth: '1300px',
  },

  //   [theme.breakpoints.up('md')]: {
  //     marginTop: '-72px',
  //   },
}));
