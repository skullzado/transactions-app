import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Box
      component="main"
      sx={{
        height: '100%',
        p: 2,
      }}
    >
      <Outlet />
    </Box>
  );
};
export default MainLayout;
