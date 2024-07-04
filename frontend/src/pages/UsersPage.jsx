import { useState } from 'react';
import UsersTable from '@/components/UsersTable';
import AddUser from '@/components/AddUser';
const UsersPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    role: '',
  });

  const handleSubmit = async () => {
    const user = localStorage.setItem(
      'user',
      JSON.stringify([
        {
          fullName: form.fullName,
          username: form.username,
          email: form.email,
          phone: form.phone,
          role: form.role,
        },
      ])
    );
    return user;
  };
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
    </div>
  );
};

export default UsersPage;
