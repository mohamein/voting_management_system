import { useContext, useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  useNavigation,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import {
  HomePage,
  KulmiyePage,
  UcidPage,
  WadaniPage,
  Login,
  UsersPage,
} from './pages';

import AuthProvider from '@/context/AuthContext';
import AllParties from './pages/AllParties';
import { AuthContext } from './context/AuthContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="kulmiye" element={<KulmiyePage />} />
        <Route path="wadani" element={<WadaniPage />} />
        <Route path="ucid" element={<UcidPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="parties" element={<AllParties />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </>
  )
);
function App() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigation();
  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
  }, [user, navigate]);
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />;
      </AuthProvider>
    </>
  );
}

export default App;
