import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

// eslint-disable-next-line react/prop-types
const LoginCard = ({
  handleSubmit,
  username,
  password,
  setUsername,
  setPassword,
}) => {
  return (
    <div className="bg-white w-[350px] rounded-md shadow-md">
      <Card>
        <CardHeader>
          <CardTitle>Login To Continue...</CardTitle>
          <CardDescription>Your simple voting recorder app</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-3">
            <div className="w-[300px] rounded-md flex flex-col gap-2">
              <label htmlFor="username">Username:</label>
              <Input
                name="username"
                type="text"
                className="bg-transparent w-full h-full focus:outline-none "
                placeholder="Enter Your Username...."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="w-[300px] rounded-md flex flex-col gap-2">
              <label htmlFor="username">Password:</label>
              <Input
                name="username"
                type="password"
                className="bg-transparent w-full h-full focus:outline-none "
                placeholder="Enter Your Username...."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>

          <div className="flex justify-end items-center mt-5">
            <Button
              onClick={handleSubmit}
              className="bg-orange-400 hover:bg-orange-500"
            >
              Sign In
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginCard;
