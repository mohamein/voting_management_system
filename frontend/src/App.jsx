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
  AllPartiesPage,
  CreateUserPage,
  StationsPage,
  CreateStation,
} from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="kulmiye" element={<KulmiyePage />} />
        <Route path="wadani" element={<WadaniPage />} />
        <Route path="ucid" element={<UcidPage />} />
        <Route path="muraaqib" element={<UsersPage />} />
        <Route path="create" element={<CreateUserPage />} />
        <Route path="urur" element={<AllPartiesPage />} />
        <Route path="xarumaha" element={<StationsPage />} />
        <Route path="createStation" element={<CreateStation />} />
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
