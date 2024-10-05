import VoteTable from '@/components/VoteTable';
const AllParties = () => {
  return (
    <div className="justify-start space-y-3 w-full">
      <h2 className="text-xl text-gray-600 font-semibold">
        Liiska Codadka Laso gudbiyey.
      </h2>

      <div className="bg-white shadow-md rounded-md w-full">
        <VoteTable />
      </div>
    </div>
  );
};

export default AllParties;
