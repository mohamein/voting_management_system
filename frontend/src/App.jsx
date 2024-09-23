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

import AllPartiesPage from './pages/AllPartiesPage';
import XisbiyadaPage from './pages/XisbiyadaPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="kulmiye" element={<KulmiyePage />} />
        <Route path="wadani" element={<WadaniPage />} />
        <Route path="ucid" element={<UcidPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="urur" element={<AllPartiesPage />} />
        <Route path="xisbi" element={<XisbiyadaPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
