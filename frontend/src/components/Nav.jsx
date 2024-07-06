import { Search, User } from 'lucide-react';

const Nav = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="bg-white h-[15vh] p-4 mb-5 gap-2 flex items-center justify-between">
      {/* User profile */}
      <div className="flex items-center">
        <User size="40px" />
        <div className="flex flex-col">
          <h3 className="font-semibold text-slate-700 ">{user?.username}</h3>
          <span className="text-gray-300 text-sm font-medium uppercase">
            {user?.role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
