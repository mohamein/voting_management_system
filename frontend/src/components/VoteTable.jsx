/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getAllVotes } from '@/lib/api/vote.api';
const VoteTable = () => {
  const [votes, setVotes] = useState([]);
  useEffect(() => {
    const fetchStation = async () => {
      try {
        const resp = await getAllVotes();
        setVotes(resp);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStation();
  }, []);

  console.log(votes);
  return (
    <Table className="w-full">
      <TableHeader className="bg-red-500">
        <TableRow>
          <TableHead className="text-white">Magalada:</TableHead>
          <TableHead className="text-white">Goobta Codka:</TableHead>
          <TableHead className="text-white">Muraaqibka:</TableHead>
          <TableHead className="text-white">Phone:</TableHead>
          <TableHead className="text-white">Kaah:</TableHead>
          <TableHead className="text-white">Waddani:</TableHead>
          <TableHead className="text-white">Kulmiye:</TableHead>
          <TableHead className="text-white">Ucid:</TableHead>
          <TableHead className="text-white">Hilaac:</TableHead>
          <TableHead className="text-white">Horseed:</TableHead>
          <TableHead className="text-white">Talo Wadaag:</TableHead>
          <TableHead className="text-white">Rajo:</TableHead>
          <TableHead className="text-white">Barwaaqo:</TableHead>
          <TableHead className="text-white">Shacabka:</TableHead>
          <TableHead className="text-white">Codka Ansaxay:</TableHead>
          <TableHead className="text-white">Codka Aan Ansixin:</TableHead>
          <TableHead className="text-white">Faahfaahin:</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {votes.party?.map((vote) => (
          <TableRow key={vote._id}>
            <TableCell>{vote.magalada}</TableCell>
            <TableCell>{vote.goobtaCodka}</TableCell>
            <TableCell>{vote.user.full_name}</TableCell>
            <TableCell>{vote.user.phone}</TableCell>
            <TableCell>{vote.kaah}</TableCell>
            <TableCell>{vote.waddani}</TableCell>
            <TableCell>{vote.kulmiye}</TableCell>
            <TableCell>{vote.ucid}</TableCell>
            <TableCell>{vote.hilaac}</TableCell>
            <TableCell>{vote.horseed}</TableCell>
            <TableCell>{vote.taloWadaag}</TableCell>
            <TableCell>{vote.rajo}</TableCell>
            <TableCell>{vote.barwaaqo}</TableCell>
            <TableCell>{vote.shacabka}</TableCell>
            <TableCell>{vote.Ansaxay}</TableCell>
            <TableCell>{vote.aanAnSixin}</TableCell>
            <TableCell>{vote.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default VoteTable;
