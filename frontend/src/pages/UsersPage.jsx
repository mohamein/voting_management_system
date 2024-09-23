import { useState } from 'react';
import UsersTable from '@/components/UsersTable';
import AddUser from '@/components/AddUser';
import { createUser } from '../api/user_creation';
const UsersPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    phone1: '',
    role: '',
    password: '',
  });

  const handleSubmit = async () => {
    const user = await createUser({
      full_name: form.fullName,
      username: form.username,
      email: form.email,
      phone: form.phone,
      phone1: form.phone1,
      role: form.role,
      password: form.password,
    });
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
