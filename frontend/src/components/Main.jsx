import { useState } from 'react';
import AllParties from './AllParties';
import Cards from './Cards';
import PartiesGraph from './PartiesGraph';
import PartiesLineGraph from './PartiesLineGraph';
import PartiesMap from './PartiesMap';
import PartiesPieChart from './partiesPieChart';  // Import the Pie Chart component
import PromotionComponent from './PromotionComponent';

const Main = () => {
  const [graphType, setGraphType] = useState('histogram');

  const handleGraphType = (event) => {
    setGraphType(event.target.value);
  };

  const renderGraph = () => {
    switch (graphType) {
      case 'histogram':
        return <PartiesGraph />;
      case 'map':
        return <PartiesMap />;
      case 'line':
        return <PartiesLineGraph />;
      case 'pie':
        return <PartiesPieChart />;  // Render Pie Chart when selected
      default:
        return <PartiesGraph />;
    }
  };

  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-1 flex-col w-full gap-3">
        <Cards />
        <div className="relative mb-10">
          <label className="mr-2">Select Graph Type:</label>
          <select
            className="shadow-lg px-4 py-2 focus:border-none focus:outline-none"
            onChange={handleGraphType}
            value={graphType}
          >
            <option value="histogram">Histogram</option>
            <option value="map">Map</option>
            <option value="line">Line Graph</option>
            <option value="pie">Pie Chart</option>  {/* New Pie Chart option */}
          </select>
        </div>

        {/* Render the selected graph */}
        {renderGraph()}
      </div>

      {/* Charts and Listing */}
      <div className="w-[400px] h-[200px]">
        <AllParties />
        <PromotionComponent />
      </div>
    </div>
  );
};

export default Main;
