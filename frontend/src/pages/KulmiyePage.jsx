import { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getKulmiye } from '@/api/presidentila_api';
const KulmiyePage = () => {
  const [vote, setVote] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getKulmiye();

      console.log(resp.data);
      setVote(resp.data);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="bg-white shadow-md rounded-md">
        <Table>
          <TableHeader>
            <TableHead>Magalada:</TableHead>
            <TableHead>Goobta Codka:</TableHead>
            <TableHead>Tirada Codka</TableHead>
          </TableHeader>

          <TableBody></TableBody>
        </Table>
      </div>
    </>
  );
};

export default KulmiyePage;
