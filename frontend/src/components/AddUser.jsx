import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const AddUser = ({ form, setForm, handleSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-red-500 text-white hover:bg-red-600">
          Create User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fill out the form to create a user.</DialogTitle>
        </DialogHeader>

        <Card>
          <CardContent>
            <form className="space-y-3">
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="username">Full Name:</label>
                <Input
                  name="fullName"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Full Name...."
                  value={form.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="username">Username:</label>
                <Input
                  name="username"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Username Here...."
                  value={form.username}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="email">Email:</label>
                <Input
                  name="email"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Email Here...."
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="Phone">Phone:</label>
                <Input
                  name="phone"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Phone Here...."
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="Phone1">Phone:</label>
                <Input
                  name="phone1"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Phone 2 Here...."
                  value={form.phone1}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="role">Role:</label>
                <Input
                  name="role"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter User Role...."
                  value={form.role}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="password">Password:</label>
                <Input
                  name="password"
                  type="password"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter User Password...."
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
            </form>

            <div className="flex justify-end items-center mt-5">
              <Button
                onClick={handleSubmit}
                className="bg-red-500 hover:bg-red-600"
              >
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AddUser;
