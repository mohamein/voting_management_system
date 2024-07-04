import PartiesGraph from '@/components/PartiesGraph';

const AllParties = () => {
  return (
    <div className="justify-start space-y-3 w-full">
      <h2 className="text-2xl font-semibold text-slate-600">
        Natiijada Urarada:
      </h2>
      <div className="bg-white shadow-md rounded-md">
        <PartiesGraph />
      </div>
    </div>
  );
};

export default AllParties;
