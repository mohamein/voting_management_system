import { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getAllUsers } from '../api/user_creation';
import { Edit, Trash } from 'lucide-react';
const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        console.log(usersData);
        setUsers(usersData);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Table>
      <TableHeader className="bg-red-600">
        <TableRow>
          <TableHead className="text-white">Full Name:</TableHead>
          <TableHead className="text-white">Username:</TableHead>
          <TableHead className=" text-white">Email:</TableHead>
          <TableHead className=" text-white">Phone:</TableHead>
          <TableHead className=" text-white">Role:</TableHead>
          <TableHead className=" text-white"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.data?.users.map((user) => (
          <TableRow key={user._id}>
            <TableCell>{user.full_name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <button className="flex gap-2">
                <Edit className="text-red-300 w-[20px]" /> /
                <Trash className="text-green-300 w-[20px]" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
