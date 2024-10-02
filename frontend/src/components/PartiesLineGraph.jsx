import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin // Registering the zoom plugin
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Natiijada Dorashada Urarada - Line Chart',
    },
    zoom: {
      pan: {
        enabled: true,
        mode: 'x', // Allow panning on the x-axis only
      },
      zoom: {
        enabled: true,
        drag: false, // Allows zooming via scroll
        mode: 'x', // Only allow zooming along the x-axis
        speed: 0.1, // Control zoom speed
      },
    },
  },
};

const labels = ['Maroodijeex', 'Awdal', 'Togdheer', 'Saaxil', 'Sanaag', 'Sool'];

const data = {
  labels,
  datasets: [
    {
      label: 'BARWAAQO',
      data: [900, 850, 900, 800, 750, 650],
      borderColor: 'lightgreen',
      backgroundColor: 'rgba(144,238,144,0.5)',
      fill: true, // Optional: fills the area under the line
    },
    {
      label: 'REJO',
      data: [900, 800, 850, 700, 600, 500],
      borderColor: 'orange',
      backgroundColor: 'rgba(255,165,0,0.5)',
      fill: true,
    },
    {
      label: 'HORSEED',
      data: [2000, 1500, 1000, 900, 800, 700],
      borderColor: 'green',
      backgroundColor: 'rgba(0,128,0,0.5)',
      fill: true,
    },
    {
      label: 'TALO-WADAAG',
      data: [800, 600, 500, 600, 550, 250],
      borderColor: 'skyblue',
      backgroundColor: 'rgba(135,206,235,0.5)',
      fill: true,
    },
    {
      label: 'UCID',
      data: [900, 700, 600, 500, 750, 550],
      borderColor: 'pink',
      backgroundColor: 'rgba(255,192,203,0.5)',
      fill: true,
    },
    {
      label: 'KAAH',
      data: [3500, 3000, 2500, 1550, 2000, 850],
      borderColor: 'red',
      backgroundColor: 'rgba(255,0,0,0.5)',
      fill: true,
    },
    {
      label: 'HILAAC',
      data: [800, 500, 1000, 700, 650, 250],
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
      fill: true,
    },
    {
      label: 'SHACABKA',
      data: [900, 850, 900, 800, 750, 650],
      borderColor: 'purple',
      backgroundColor: 'rgba(128,0,128,0.5)',
      fill: true,
    },
    {
      label: 'WADDANI',
      data: [4000, 2500, 3000, 1500, 550, 500],
      borderColor: 'orange',
      backgroundColor: 'rgba(255,165,0,0.5)',
      fill: true,
    },
    {
      label: 'KULMIYE',
      data: [5000, 3000, 1500, 1000, 1000, 1000],
      borderColor: 'yellow',
      backgroundColor: 'rgba(255,255,0,0.5)',
      fill: true,
    },
  ],
};

const PartiesLineGraph = () => {
  // Function to reset the zoom level
  const resetZoom = () => {
    window.myChart.resetZoom();
  };

  return (
    <div className="w-[100%] h-[100%] bg-white shadow-md p-4">
      {/* Assigning the chart instance to window.myChart */}
      <Line data={data} options={options} ref={(ref) => (window.myChart = ref?.chartInstance)} />
      
      {/* Button to reset zoom */}
      <button onClick={resetZoom} className="mt-4 p-2 bg-blue-500 text-white rounded-md">Reset Zoom</button>
    </div>
  );
};

export default PartiesLineGraph;
