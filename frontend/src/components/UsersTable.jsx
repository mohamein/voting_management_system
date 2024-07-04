import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const UsersTable = () => {
  const userData = JSON.parse(localStorage.getItem('user'));
  console.log(userData);

  return (
    <Table>
      <TableHeader className="bg-slate-700">
        <TableRow>
          <TableHead className="text-white">Full Name:</TableHead>
          <TableHead className="text-white">Username:</TableHead>
          <TableHead className=" text-white">Email:</TableHead>
          <TableHead className=" text-white">Phone:</TableHead>
          <TableHead className=" text-white">Role:</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userData.map((list) => (
          <TableRow key={list.phone}>
            <TableCell>{list.fullName}</TableCell>
            <TableCell>{list.username}</TableCell>
            <TableCell>{list.email}</TableCell>
            <TableCell>{list.phone}</TableCell>
            <TableCell>{list.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
