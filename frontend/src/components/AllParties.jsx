import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const AllParties = () => {
  return (
    <div className="bg-white shadow-md rounded-md">
      <Table>
        <TableCaption>Liiska Xisbiyada Kale.</TableCaption>
        <TableHeader className="bg-slate-700">
          <TableRow>
            <TableHead className="w-[130px] text-white">
              Magac Xisbiga
            </TableHead>
            <TableHead className="text-white">% of Total Codka Guud</TableHead>
            <TableHead className="text-right text-white">Total Guud</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>KAAH</TableCell>
            <TableCell>16.06%</TableCell>
            <TableCell className="text-right">1,227,048</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>HORSEED</TableCell>
            <TableCell>15.48%</TableCell>
            <TableCell className="text-right">1,227,048</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>KULMIYE</TableCell>
            <TableCell>15.48%</TableCell>
            <TableCell className="text-right">1,227,048</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>UCID</TableCell>
            <TableCell>15.48%</TableCell>
            <TableCell className="text-right">1,227,048</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>WADDANI</TableCell>
            <TableCell>15.48%</TableCell>
            <TableCell className="text-right">1,227,048</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>BARWAAQO</TableCell>
            <TableCell>7.33%</TableCell>
            <TableCell className="text-right">1,227,048</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>HILAAC</TableCell>
            <TableCell>8.15%</TableCell>
            <TableCell className="text-right">1,227,048</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>RAJO</TableCell>
            <TableCell>6.52%</TableCell>
            <TableCell className="text-right">1,227,048</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default AllParties;
