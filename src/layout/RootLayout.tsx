import { Box } from '@mui/material';
import SidebarLayout from './SidebarLayout';
import HeaderLayout from './HeaderLayout';
import MainLayout from './MainLayout';

const RootLayout = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
      }}
    >
      <SidebarLayout />
      <Box
        sx={{
          width: 'calc(100% - 300px)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <HeaderLayout />
        <MainLayout />
      </Box>
    </Box>
  );
};

export default RootLayout;
