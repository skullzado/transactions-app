import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import {
  Dashboard as DashboardIcon,
  Receipt as ReceiptIcon,
  Wallet as WalletIcon,
} from '@mui/icons-material';

type NavigationItem = {
  text: string;
  route: string;
  icon: JSX.Element;
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    text: 'Dashboard',
    route: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    text: 'Transactions',
    route: '/transactions',
    icon: <ReceiptIcon />,
  },
  {
    text: 'Wallets',
    route: '/wallets',
    icon: <WalletIcon />,
  },
];

const Navigation = () => {
  return (
    <Box
      component="nav"
      sx={{
        height: '100%',
        py: 2,
      }}
    >
      <List disablePadding>
        {NAVIGATION_ITEMS.map(({ text, route, icon }) => (
          <ListItem
            key={text}
            disablePadding
          >
            <ListItemButton
              component={NavLink}
              to={route}
              sx={{
                '&.active': {
                  backgroundColor: (theme) => theme.palette.primary.main,
                },
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Navigation;
