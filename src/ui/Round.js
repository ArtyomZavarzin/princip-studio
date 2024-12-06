import { Box, styled } from '@mui/system';

const RoundContent = styled(Box)(({ theme, deg = 0 }) => ({
  zIndex: '-10',
  overflow: 'hidden',
  // background: `linear-gradient(${deg}deg, rgba(172, 9, 9, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100% 100%)`,
  // background: `linear-gradient(${deg}deg, rgba(172, 9, 9, 1), #641e39, #98749b, #ddf810, #8f4ff4)`,
  width: '600px',
  height: '600px',
  // animation: 'gradient2, 10s, easy, infinite',
  // backgroundSize: '500% 500%',

  [theme.breakpoints.up('md')]: {
    width: '800px',
    height: '800px',
  },

  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: `linear-gradient(${deg}deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100% 100%)`,
  },
}));

export const Round = ({ deg = 0, ...other }) => {
  return (
    <>
      <RoundContent deg={deg} {...other}>
        <Box
          className='changeColorAnimRound'
          sx={{ width: '100%', height: '100%', borderRadius: '50%' }}
        ></Box>
      </RoundContent>
    </>
  );
};
