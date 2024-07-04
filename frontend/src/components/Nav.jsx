import { Search, User } from 'lucide-react';

const Nav = () => {
  return (
    <div className="bg-white h-[15vh] p-4 mb-5 gap-2 flex items-center justify-between">
      {/* User profile */}
      <div className="flex items-center">
        <User size="40px" />
        <div className="flex flex-col">
          <h3 className="font-semibold text-slate-700 ">Mohamed Ismail</h3>
          <span className="text-gray-300 text-sm font-medium">Admin</span>
        </div>
      </div>

      {/* Input Search */}
      <div className="relative flex items-center border border-gray-200 ">
        <Search size="20px" className="text-gray-300 ml-1" />
        <input
          type="text"
          placeholder="Search here.."
          className="w-[350px] py-2  rounded-sm text-slate-700 font-semibold border-none outline-none"
        />
      </div>
    </div>
  );
};

export default Nav;
