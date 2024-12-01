import { Box } from '@mui/system';
export const Border = ({ height = 12, side = 'left', ...other }) => {
  return (
    <>
      <Box
        className='changeColorAnim'
        sx={{
          width: '100%',
          height: height + 'px',
          background: `linear-gradient(${
            side === 'left' ? '' : '-'
          }45deg, #865EFF, transparent)`,
          ...other,
        }}
      ></Box>
    </>
  );
};
