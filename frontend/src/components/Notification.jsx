import { Bell } from 'lucide-react';

const Notification = () => {
  return (
    <div className="flex items-center gap-2 relative">
      <Bell />

      <div className="absolute top-[-7px] right-0 bg-red-500 h-4 w-4 rounded-full flex items-center justify-center">
        <span className="text-sm text-white">0</span>
      </div>
    </div>
  );
};

export default Notification;
