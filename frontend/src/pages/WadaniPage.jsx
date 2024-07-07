import { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getWaddani } from '@/api/presidentila_api';
const WadaniPage = () => {
  const [vote, setVote] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getWaddani();
      setVote(resp.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white shadow-md rounded-md">
        <Table>
          <TableHeader className="bg-slate-700">
            <TableHead className="text-white">Magalada:</TableHead>
            <TableHead className="text-white">Goobta Codka:</TableHead>
            <TableHead className="text-white">Magaca:</TableHead>
            <TableHead className="text-white">Phone:</TableHead>
            <TableHead className="text-white">Tirada Codka</TableHead>
          </TableHeader>

          <TableBody>
            {vote?.waddani?.map((list) => (
              <TableRow key={list._id}>
                <TableCell>{list.magalada}</TableCell>
                <TableCell>{list.goobtaCodka}</TableCell>
                <TableCell>{list.user.full_name}</TableCell>
                <TableCell>{list.user.phone}</TableCell>
                <TableCell>{list.waddani}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default WadaniPage;
