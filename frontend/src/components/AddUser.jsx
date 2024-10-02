/* eslint-disable react/prop-types */
import { createUser } from '@/lib/api/users.api';
import { Button } from './ui/button';
import { Input } from './ui/input';

const AddUser = ({ form, setForm, loading, setLoading }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userForm = {
        full_name: form.fullName,
        username: form.username,
        email: form.email,
        phone: form.phone,
        phone2: form.phone2,
        damiin: form.damiin,
        password: form.password,
      };
      await createUser(userForm);
      setLoading(false);
      setForm('');
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <div className="flex w-full ">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4 w-[400px]">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="fullName">FullName:</label>
            <Input
              type="text"
              name="fullName"
              placeholder="Enter Full Name here.."
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="username">Username:</label>
            <Input
              type="text"
              name="username"
              placeholder="Enter Full Name here.."
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
        </div>

        <div className="flex flex-col w-[400px]">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            placeholder="Enter Email Here..."
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-[400px]">
          <label htmlFor="phone">Phone</label>
          <Input
            type="text"
            name="phone"
            placeholder="Enter Phone Here..."
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-[400px]">
          <label htmlFor="phone2">Another Phone</label>
          <Input
            type="text"
            name="phone2"
            placeholder="Enter Another Phone Here..."
            value={form.phone2}
            onChange={(e) => setForm({ ...form, phone2: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-[400px]">
          <label htmlFor="damiin">Damiin</label>
          <Input
            type="text"
            name="damiin"
            placeholder="Enter Name Here..."
            value={form.damiin}
            onChange={(e) => setForm({ ...form, damiin: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-[400px]">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            placeholder="Enter Password Here..."
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <Button
          type="submit"
          disable={loading}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-sm w-full"
        >
          {loading ? 'Submitting..' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
