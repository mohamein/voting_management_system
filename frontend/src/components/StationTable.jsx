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
import { getAllStations } from '@/lib/api/places.api';
const StationTable = () => {
  const [stations, setStations] = useState([]);
  useEffect(() => {
    const fetchStation = async () => {
      try {
        const resp = await getAllStations();
        setStations(resp);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStation();
  }, []);
  return (
    <Table>
      <TableHeader className="bg-red-500">
        <TableRow>
          <TableHead className="text-white">Gobolka:</TableHead>
          <TableHead className="text-white">Degmada:</TableHead>
          <TableHead className="text-white">Magac Goobta:</TableHead>
          <TableHead className="text-white">LrGoobta:</TableHead>
          <TableHead className="text-white">LrGoobtaCodbixinta:</TableHead>
          <TableHead className="text-white">Muraaqibka:</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stations.stations?.map((station) => (
          <TableRow key={station.id}>
            <TableCell>{station.gobolka}</TableCell>
            <TableCell>{station.degmada}</TableCell>
            <TableCell>{station.magacGoobta}</TableCell>
            <TableCell>{station.LrGoobta}</TableCell>
            <TableCell>{station.LrGoobtaCodbixinta}</TableCell>
            <TableCell>{station.muraaqibka}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StationTable;
