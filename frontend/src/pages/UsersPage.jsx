import { Button } from '@/components/ui/button';
import UsersTable from '@/components/UsersTable';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  return (
    <div className="flex flex-col justify-start space-y-4">
      {/* Dialog Form */}
      <Button className="bg-red-500 text-white font-semibold text-md px-6 py-2 w-36 rounded-sm hover:bg-red-600">
        <Link to="/create">Create User</Link>
      </Button>
      {/* Users Table */}
      <div className="bg-white shadow-md rounded-md">
        <UsersTable />
      </div>
    </div>
  );
};

export default UsersPage;
