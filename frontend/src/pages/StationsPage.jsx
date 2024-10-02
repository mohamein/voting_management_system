import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import StationTable from '@/components/StationTable';
const StationsPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <Button className="bg-red-500 text-white font-semibold w-36 px-6 py-2 rounded-sm hover:bg-red-600">
        <Link to="/createStation">Diwan Geli</Link>
      </Button>
      <div className="bg-white">
        <StationTable />
      </div>
    </div>
  );
};

export default StationsPage;
