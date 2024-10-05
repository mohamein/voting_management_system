import { User } from 'lucide-react';
import Notification from '@/components/Notification';
const Nav = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="border-b border-slate-300 py-4 px-6 mb-5 gap-2 flex items-center justify-between">
      <h2 className="text-lg text-gray-600 font-semibold uppercase">
        Admin Dashboard
      </h2>
      {/* User profile */}
      <div className="flex gap-4 items-center">
        <Notification />
        <User />
      </div>
    </div>
  );
};

export default Nav;
