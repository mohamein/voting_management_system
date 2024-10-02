import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AllParties = () => {
  return (
    <div className="justify-start space-y-3 w-full">
      <Button className="bg-red-500 text-white rounded-sm w-36 px-6 py-2 font-semibold hover:bg-red-600">
        <Link to="/createVote">Create Vote</Link>
      </Button>
      <div className="bg-white shadow-md rounded-md">
        Liiska Codadka Laso gudbiyey.
      </div>
    </div>
  );
};

export default AllParties;
