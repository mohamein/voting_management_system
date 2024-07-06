import { LayoutDashboard, Users, Vote } from 'lucide-react';
import { Button } from './ui/button';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <div className="w-[250px] h-full bg-white p-5 ">
      <div className="flex flex-col justify-center space-y-4 w-full">
        <div className="flex justify-between items-center mb-5 border-b border-black pb-5">
          <h2 className="text-xl font-semibold">Logo Party</h2>
        </div>

        <nav>
          <ul className="flex flex-col space-y-5 border-b border-black pb-3">
            <h3 className="text-gray-400 text-sm font-bold">Main Menu</h3>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-2 bg-orange-400 text-white px-4 py-2'
                  : 'flex items-center gap-2 font-semibold text-slate-800'
              }
              to="/"
            >
              <LayoutDashboard />
              Dashboard
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-2 bg-orange-400 text-white  px-4 py-2 '
                  : 'flex items-center gap-2 font-semibold text-slate-800'
              }
              to="/kulmiye"
            >
              <img
                src="/kulmiye.jpg"
                className="w-[30px] h-[30px] object-cover rounded-full"
              />
              Kulmiye
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-2 bg-orange-400 text-white px-4 py-2 '
                  : 'flex items-center gap-2 font-semibold text-slate-800'
              }
              to="/wadani"
            >
              <img
                src="/waddani.png"
                className="w-[30px] h-[30px] object-cover rounded-full"
              />
              Waddani
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-2 bg-orange-400 text-white  px-4 py-2 '
                  : 'flex items-center gap-2 font-semibold text-slate-800'
              }
              to="/ucid"
            >
              <img
                src="/ucid.png"
                className="w-[30px] h-[30px] object-cover rounded-full"
              />
              Ucid
            </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-2 bg-orange-400 text-white  px-4 py-2 '
                  : 'flex items-center gap-2 font-semibold text-slate-800'
              }
              to="/users"
            >
              <Users />
              Users
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-2 bg-orange-400 text-white  px-4 py-2 '
                  : 'flex items-center gap-2 font-semibold text-slate-800'
              }
              to="/xisbi"
            >
              <Vote />
              Xisbiyada
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-2 bg-orange-400 text-white  px-4 py-2 '
                  : 'flex items-center gap-2 font-semibold text-slate-800'
              }
              to="/urur"
            >
              <Vote />
              Ururada
            </NavLink>
          </ul>
          <ul className="flex flex-col space-y-4 mt-5">
            <h3 className="text-gray-400 text-sm font-bold">Others</h3>

            <Button
              className="bg-orange-400 hover:bg-orange-500 font-semibold"
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
