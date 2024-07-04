import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const UsersTable = () => {
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
        <TableRow>
          <TableCell>Mohamed Ismail Ibrahim</TableCell>
          <TableCell>maxamed 26june</TableCell>
          <TableCell>maxamed12@test.com</TableCell>
          <TableCell>+252633144082</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mohamed Ismail Ibrahim</TableCell>
          <TableCell>maxamed 26june</TableCell>
          <TableCell>maxamed12@test.com</TableCell>
          <TableCell>+252633144082</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mohamed Ismail Ibrahim</TableCell>
          <TableCell>maxamed 26june</TableCell>
          <TableCell>maxamed12@test.com</TableCell>
          <TableCell>+252633144082</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mohamed Ismail Ibrahim</TableCell>
          <TableCell>maxamed 26june</TableCell>
          <TableCell>maxamed12@test.com</TableCell>
          <TableCell>+252633144082</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default UsersTable;
