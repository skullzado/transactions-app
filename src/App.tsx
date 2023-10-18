import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RootLayout } from './layout';
import { Dashboard, NotFound, Transactions, Wallets } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<RootLayout />}
      errorElement={<NotFound />}
    >
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
      <Route
        path="/transactions"
        element={<Transactions />}
      />
      <Route
        path="/wallets"
        element={<Wallets />}
      />
      <Route
        path="*"
        element={<Navigate to="dashboard" />}
      />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
