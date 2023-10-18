import { Box, Typography } from '@mui/material';
import Navigation from '../components/Navigation';

const SidebarLayout = () => {
  return (
    <Box
      component="aside"
      sx={{
        width: 300,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRight: 1,
        borderColor: (theme) => theme.palette.divider,
      }}
    >
      <Box
        sx={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          px: 2,
          borderBottom: 1,
          borderColor: (theme) => theme.palette.divider,
        }}
      >
        <Typography variant="body1">App</Typography>
      </Box>
      <Navigation />
    </Box>
  );
};
export default SidebarLayout;
