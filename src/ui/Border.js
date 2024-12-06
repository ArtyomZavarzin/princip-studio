import { Box } from '@mui/system';
export const Border = ({ height = 12, side = 'left', ...other }) => {
  return (
    <>
      <Box
        className='changeColorAnim'
        sx={{
          width: '100%',
          height: height + 'px',
          transform: `scaleX(${side === 'left' ? 1 : -1})`,

          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(45deg, transparent, #ffffff)',
          },
          ...other,
        }}
      >
        <Box
          className='changeColorAnim'
          sx={{ width: '100%', height: height + 'px' }}
        ></Box>
      </Box>
    </>
  );
};
