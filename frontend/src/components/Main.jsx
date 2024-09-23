import AllParties from './AllParties';
import Cards from './Cards';
import PartiesGraph from './PartiesGraph';

const Main = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-1 flex-col w-full gap-3">
        <Cards />
        <PartiesGraph />
      </div>
      {/* Charts and Listing */}
      <div className="w-[400px] h-[200px]">
        <AllParties />
      </div>
    </div>
  );
};

export default Main;
