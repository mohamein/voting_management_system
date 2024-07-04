import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Card,
  CardContent,
 } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const AddUser = ({ form, setForm }) => {
  console.log(form);
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-orange-400 text-white hover:bg-orange-600">
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
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="username">Username:</label>
                <Input
                  name="username"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Username Here...."
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="email">Email:</label>
                <Input
                  name="email"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Email Here...."
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="Phone">Phone:</label>
                <Input
                  name="phone"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Phone Here...."
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="role">Role:</label>
                <Input
                  name="role"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter User Role...."
                />
              </div>
            </form>

            <div className="flex justify-end items-center mt-5">
              <Button className="bg-orange-400 hover:bg-orange-500">
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
