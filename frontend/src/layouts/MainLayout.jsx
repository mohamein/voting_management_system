import { Outlet, useNavigate } from 'react-router-dom';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';

const MainLayout = () => {
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem('token'));
  if (!token) {
    navigate('/login');
  }

  return (
    <>
      <div className="flex h-full w-full bg-[#ededed]  gap-4">
        <Sidebar />

        <div className="flex flex-col gap-4 w-full">
          <Nav />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
