import AllParties from './AllParties';
import Cards from './Cards';
import Charts from './Charts';

const Main = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-1 flex-col gap-3">
        <Cards />
        <Charts />
      </div>
      {/* Charts and Listing */}
      <div className="w-[400px] h-[200px]">
        <AllParties />
      </div>
    </div>
  );
};

export default Main;
