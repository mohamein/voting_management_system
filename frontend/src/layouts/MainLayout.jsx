import { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import { AuthContext } from '@/context/AuthContext';
const MainLayout = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <div className="flex h-full w-full bg-[#ededed]  gap-4">
          <Sidebar />

          <div className="flex flex-col gap-4 w-full">
            <Nav />
            <Outlet />
          </div>
        </div>
      ) : (
        <p>User not logged in</p>
      )}
    </>
  );
};

export default MainLayout;
