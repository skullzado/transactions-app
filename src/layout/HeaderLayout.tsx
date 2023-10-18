import { Box } from '@mui/material';

const HeaderLayout = () => {
  return (
    <Box
      component="header"
      sx={{
        height: 64,
        display: 'flex',
        flexDirection: 'column',
        px: 2,
        borderBottom: 1,
        borderColor: (theme) => theme.palette.divider,
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        Header
      </Box>
    </Box>
  );
};
export default HeaderLayout;
