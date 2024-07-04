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
        <TableRow>
          <TableCell>Maxamed Ismail</TableCell>
          <TableCell>maxamed_26june</TableCell>
          <TableCell>25263642846</TableCell>
          <TableCell>mohamed@test.com</TableCell>
          <TableCell>user</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Ahmed Jama</TableCell>
          <TableCell>ahmed_october</TableCell>
          <TableCell>25263642846</TableCell>
          <TableCell>ahmed@test.com</TableCell>
          <TableCell>user</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Faysal Khadar</TableCell>
          <TableCell>faysal_macalin_harun</TableCell>
          <TableCell>25263642846</TableCell>
          <TableCell>faysal@test.com</TableCell>
          <TableCell>user</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Nimco Ahmed</TableCell>
          <TableCell>nimco_jigjigayar</TableCell>
          <TableCell>25263642846</TableCell>
          <TableCell>nimco@test.com</TableCell>
          <TableCell>user</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default UsersTable;
