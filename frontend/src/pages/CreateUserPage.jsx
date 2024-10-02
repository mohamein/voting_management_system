/* eslint-disable no-unused-vars */
import AddUser from '@/components/AddUser';
import { createUser } from '@/lib/api/users.api';
import { useState } from 'react';

const CreateUserPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    phone2: '',
    damiin: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  console.log(form);
  return (
    <div className="flex flex-col gap-4 items-start ml-10">
      <div>
        <h3 className="text-xl text-gray-600 font-semibold">
          Diwaan gelinta muraaaqibka
        </h3>
        <p className="text-sm text-gray-500 font-medium">
          si aad u diwaan geliso muraaqib fadlan buuxi liiska diwan gelinta.
        </p>
      </div>

      <AddUser
        form={form}
        loading={loading}
        setLoading={setLoading}
        setForm={setForm}
      />
    </div>
  );
};

export default CreateUserPage;
