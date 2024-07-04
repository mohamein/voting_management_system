import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
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
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />;
      </AuthProvider>
    </>
  );
}

export default App;
