import { useState } from 'react';
import UsersTable from '@/components/UsersTable';
import AddUser from '@/components/AddUser';
import PartiesGraph from '@/components/PartiesGraph';
const UsersPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    role: '',
  });

  const handleSubmit = async () => {};
  return (
    <div className="flex flex-col justify-start space-y-4">
      {/* Dialog Form */}
      <div className="flex items-start">
        <AddUser form={form} setForm={setForm} handleSubmit={handleSubmit} />
      </div>
      {/* Users Table */}
      <div className="bg-white shadow-md rounded-md">
        <UsersTable />
      </div>

      <div className="bg-white shadow-md rounded-md">
        <PartiesGraph />
      </div>
    </div>
  );
};

export default UsersPage;
