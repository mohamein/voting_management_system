import { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getAllVotes } from '@/api/presidentila_api';
import { Edit, Trash } from 'lucide-react';
const PresidentialTable = () => {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const fetchVotes = async () => {
      const resp = await getAllVotes();
      setVotes(resp.data);
    };

    fetchVotes();
  }, []);

  return (
    <Table>
      <TableHeader className="bg-red-600">
        <TableRow>
          <TableHead className="text-white">Magalada:</TableHead>
          <TableHead className="text-white">Goobta:</TableHead>
          <TableHead className="text-white">Name:</TableHead>
          <TableHead className="text-white">Phone:</TableHead>
          <TableHead className=" text-white">Kulmiye:</TableHead>
          <TableHead className=" text-white">waddani:</TableHead>
          <TableHead className=" text-white">Ucid:</TableHead>
          <TableHead className=" text-white">Lumay:</TableHead>
          <TableHead className=" text-white">Khaldamay:</TableHead>
          <TableHead className=" text-white"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {votes?.data?.map((vote) => (
          <TableRow key={vote._id}>
            <TableCell>{vote.magalada}</TableCell>
            <TableCell>{vote.goobtaCodka}</TableCell>
            <TableCell>{vote.user.full_name}</TableCell>
            <TableCell>{vote.user.phone}</TableCell>
            <TableCell>{vote.kulmiye}</TableCell>
            <TableCell>{vote.waddani}</TableCell>
            <TableCell>{vote.ucid}</TableCell>
            <TableCell>{vote.Ansaxay}</TableCell>
            <TableCell>{vote.aanAnSixin}</TableCell>
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

export default PresidentialTable;
