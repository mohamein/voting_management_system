import { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const UcidPage = () => {
  const [vote, setVote] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const resp = await getUcid();
  //     setVote(resp.data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl text-gray-600 font-semibold">
        Codka Xisbiga Ucid
      </h2>
      <div className="bg-white shadow-md rounded-md">
        <Table>
          <TableHeader className="bg-red-600">
            <TableHead className="text-white">Magalada:</TableHead>
            <TableHead className="text-white">Goobta Codka:</TableHead>
            <TableHead className="text-white">Magaca:</TableHead>
            <TableHead className="text-white">Phone:</TableHead>
            <TableHead className="text-white">Tirada Codka</TableHead>
          </TableHeader>

          <TableBody>
            {vote?.ucid?.map((list) => (
              <TableRow key={list._id}>
                <TableCell>{list.magalada}</TableCell>
                <TableCell>{list.goobtaCodka}</TableCell>
                <TableCell>{list.user.full_name}</TableCell>
                <TableCell>{list.user.phone}</TableCell>
                <TableCell>{list.ucid}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UcidPage;
