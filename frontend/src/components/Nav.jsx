import { User } from 'lucide-react';

const Nav = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="border-b border-slate-300 py-4 px-2 mb-5 gap-2 flex items-center justify-between">
      <h2 className="text-lg text-gray-600 font-semibold uppercase">
        Admin Dashboard
      </h2>
      {/* User profile */}
      <div className="flex items-center">
        <User size="40px" />
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-700 capitalize">
            {user?.username}
          </h3>
          <span className="text-gray-500 text-md font-medium">
            {user?.role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
