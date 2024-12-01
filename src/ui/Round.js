import { Box } from '@mui/system';
export const Round = ({ deg = 0, sxProps }) => {
  return (
    <>
      <Box
        sx={{
          zIndex: '-10',
          borderRadius: '50%',
          overflow: 'hidden',
          width: '400px',
          height: '400px',
          background: `linear-gradient(${deg}deg, rgba(172, 9, 9, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100% 100%)`,
          ...sxProps,
        }}
      ></Box>
    </>
  );
};
