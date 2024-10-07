import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
const UploadTable = () => {
  return (
    <Table>
      <TableHeader className="bg-red-500 hover:bg-red-600">
        <TableRow>
          <TableHead className="text-white">Sawirka:</TableHead>
          <TableHead className="text-white">Muraaqibka:</TableHead>
          <TableHead className="text-white">Magalada:</TableHead>
          <TableHead className="text-white">Goobta:</TableHead>
          <TableHead className="text-white">LrGoobta:</TableHead>
          <TableHead className="text-white">Faafahin:</TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  );
};

export default UploadTable;
