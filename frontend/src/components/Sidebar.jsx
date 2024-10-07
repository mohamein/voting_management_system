import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Vote,
  LogOut,
  Home,
  ImageDownIcon,
} from 'lucide-react';
import { Button } from './ui/button';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State for sidebar visibility
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex ${
        isOpen ? 'w-[250px]' : 'w-[60px]'
      } h-[100vh] bg-red-700 transition-width duration-300`}
    >
      <div className="flex flex-col justify-between h-full p-5">
        <div className="flex justify-between items-center mb-5 border-b border-slate-300 pb-5">
          <h2
            className={`text-2xl text-white uppercase font-bold mr-3  transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Kaah<span className="text-red-300">Party</span>
          </h2>
          <Button
            onClick={toggleSidebar}
            className={`focus:outline-none z-50 w-10 h-10 flex items-center justify-center rounded-full ${
              isOpen
                ? 'text-red-500 bg-white hover:bg-slate-200'
                : 'bg-red-500 text-white hover:bg-red-600'
            }  transition-colors duration-300 `}
          >
            {isOpen ? '<<' : '>>'}
          </Button>
        </div>

        <nav className="flex flex-col items-start justify-between h-full">
          <ul className="flex flex-col space-y-5">
            <h3
              className={`text-red-200 text-sm font-bold transition-opacity duration-300 ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Main Menu
            </h3>

            <NavLink
              className={({ isActive }) =>
                isActive && isOpen
                  ? 'flex items-center gap-2 bg-white text-red-700 px-4 py-2'
                  : isActive && !isOpen
                  ? ' text-white  py-2'
                  : 'flex items-center gap-2 font-semibold text-white'
              }
              to="/"
            >
              <LayoutDashboard />
              {isOpen && 'Dashboard'}
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive && isOpen
                  ? 'flex items-center gap-2 bg-white text-red-700 px-4 py-2'
                  : isActive && !isOpen
                  ? ' text-white  py-2'
                  : 'flex items-center gap-2 font-semibold text-white'
              }
              to="/muraaqib"
            >
              <Users />
              {isOpen && 'Muraaqib'}
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive && isOpen
                  ? 'flex items-center gap-2 bg-white text-red-700 px-4 py-2'
                  : isActive && !isOpen
                  ? ' text-white  py-2'
                  : 'flex items-center gap-2 font-semibold text-white'
              }
              to="/xarumaha"
            >
              <Home />
              {isOpen && 'Xarumaha'}
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive && isOpen
                  ? 'flex items-center gap-2 bg-white text-red-700 px-4 py-2'
                  : isActive && !isOpen
                  ? ' text-white  py-2'
                  : 'flex items-center gap-2 font-semibold text-white'
              }
              to="/urur"
            >
              <Vote />
              {isOpen && 'Codadka'}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive && isOpen
                  ? 'flex items-center gap-2 bg-white text-red-700 px-4 py-2'
                  : isActive && !isOpen
                  ? ' text-white  py-2'
                  : 'flex items-center gap-2 font-semibold text-white'
              }
              to="/upload"
            >
              <ImageDownIcon />
              {isOpen && 'Sawirada Formka'}
            </NavLink>
          </ul>

          <ul className="flex  mt-5">
            <Button
              className={` ${
                isOpen
                  ? 'bg-white text-red-700 hover:bg-red-500 font-semibold'
                  : 'bg-non p-0 m-0'
              } `}
              size="lg"
              onClick={handleLogout}
            >
              <LogOut />
              {isOpen ? 'Logout' : ''}
            </Button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
