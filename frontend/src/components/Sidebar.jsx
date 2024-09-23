import { LayoutDashboard, Users, Vote } from 'lucide-react';
import { Button } from './ui/button';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();

    navigate('/login');
  };
  return (
    <div className="w-[250px] h-[100vh] bg-white p-5 ">
      <div className="flex flex-col justify-center space-y-4 w-full h-full">
        <div className="flex justify-between items-center mb-5 border-b border-slate-300 pb-5">
          <h2 className="text-2xl uppercase font-bold text-gray-600">
            <span className="text-red-500">Kaah</span> Party
          </h2>
        </div>

        <nav className="flex flex-col items-start justify-between h-full">
          <ul className="flex flex-col space-y-5 ">
            <h3 className="text-red-200 text-sm font-bold">Main Menu</h3>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-2 bg-red-700 text-white px-4 py-2'
                  : 'flex items-center gap-2 font-semibold text-red-600'
              }
              to="/"
            >
              <LayoutDashboard />
              Dashboard
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-2 bg-red-700 text-white px-4 py-2'
                  : 'flex items-center gap-2 font-semibold text-red-600'
              }
              to="/users"
            >
              <Users />
              Users
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-2 bg-red-700 text-white px-4 py-2'
                  : 'flex items-center gap-2 font-semibold text-red-600'
              }
              to="/xisbi"
            >
              <Vote />
              Xisbiyada
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-2 bg-red-700 text-white px-4 py-2'
                  : 'flex items-center gap-2 font-semibold text-red-600'
              }
              to="/urur"
            >
              <Vote />
              Ururada
            </NavLink>
          </ul>
          <ul className="flex flex-col mt-5">
            <Button
              className="bg-red-400 hover:bg-red-500 font-semibold"
              size="lg"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
