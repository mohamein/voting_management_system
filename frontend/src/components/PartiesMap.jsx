import { useEffect } from 'react';
import Regions from './maps/Regions';

const labels = ['Maroodijeex', 'Awdal', 'Togdheer', 'Saaxil', 'Sanaag', 'Sool'];

const data = {
  labels,
  datasets: [
    {
      label: 'BARWAAQO',
      data: [900, 850, 900, 800, 750, 650],
      backgroundColor: 'lightgreen',
    },
    {
      label: 'REJO',
      data: [900, 850, 900, 800, 750, 650],
      backgroundColor: 'orange',
    },
    {
      label: 'HORSEED',
      data: [2000, 1000, 900, 700, 650, 550],
      backgroundColor: 'green',
    },
    {
      label: 'TALO-WADAAG',
      data: [800, 500, 600, 600, 550, 250],
      backgroundColor: 'skyblue',
    },
    {
      label: 'UCID',
      data: [900, 700, 600, 500, 750, 550],
      backgroundColor: 'pink',
    },
    {
      label: 'KAAH',
      data: [3500, 2550, 2500, 1550, 2000, 850],
      backgroundColor: 'red',
    },
    {
      label: 'HILAAC',
      data: [800, 500, 1000, 700, 650, 250],
      backgroundColor: 'blue',
    },
    {
      label: 'SHACABKA',
      data: [900, 850, 900, 800, 750, 650],
      backgroundColor: 'purple',
    },
    {
      label: 'WADDANI',
      data: [4000, 2500, 3000, 1500, 550, 500],
      backgroundColor: 'orange',
    },
    {
      label: 'KULMIYE',
      data: [5000, 3000, 1500, 1000, 1000, 1000],
      backgroundColor: 'yellow',
    },
  ],
};

function PartiesMap() {
  const regions = [
    { id: 'path47640', name: 'Awdal' },
    { id: 'path47638', name: 'M/Jeex' },
    { id: 'path47630', name: 'Sahil' },
    { id: 'path47636', name: 'Togdheer' },
    { id: 'path47632', name: 'Sanaag' },
    { id: 'path47634', name: 'Sool' },
  ];

  useEffect(() => {
    const colorAssignments = {};

    regions.forEach((region, index) => {
      const regionVotes = {};

      // Aggregate votes for the current region
      data.datasets.forEach((party) => {
        regionVotes[party.label] = party.data[index];
      });


      // Find the party with the highest votes (and handle ties by alphabetical order)
      const sortedParties = Object.entries(regionVotes).sort(
        (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
      );

      console.log(sortedParties);
      // Get the winning party and its votes
      const winningParty = sortedParties[0];
      const partyName = winningParty[0];
      const partyVotes = winningParty[1];
      const color = data.datasets.find(
        (party) => party.label === partyName
      ).backgroundColor;

      // Assign colors and prepare tooltip data
      colorAssignments[region.id] = {
        regionName: region.name,
        partyName: partyName,
        color: color,
        votes: partyVotes,
      };

      // Directly manipulate the DOM
      const pathElement = document.getElementById(region.id);
      if (pathElement) {
        pathElement.style.fill = color; // Set the fill color for the SVG path

        // Add tooltip with the required information
        pathElement.setAttribute(
          'title',
          `GB: ${region.name}, ${partyName}: ${partyVotes.toLocaleString()}`
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-[100%] h-[66%] bg-white shadow-md p-4 relative opacity-80 ">
        <h4 className='font-bold text-center mt-6 mb-3'>Natiijada Dorashada Urarada</h4>
      <div className="flex flex-wrap justify-center">
        {data.datasets.map((party) => (
          <div
            key={party.label}
            className='flex items-center ml-2'
          >
            <div
              style={{
                width: '40px',
                height: '15px',
                backgroundColor: party.backgroundColor,
                marginRight: '5px',
              }}
            />
            <span className="text-sm"> {party.label}</span>
          </div>
        ))}
      </div>
      <Regions />
    </div>
  );
}

export default PartiesMap;
