import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(ArcElement, Title, Tooltip, Legend, zoomPlugin);

const options = {
  responsive: true,
  maintainAspectRatio: true,  // Ensure aspectRatio is maintained
  aspectRatio: 1.5,  // Adjust this value to change chart size (1 = square, >1 = wider, <1 = taller)
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Natiijada Dorashada Urarada - Pie Chart',
    },
    zoom: {
      pan: {
        enabled: true,
        mode: 'xy', // Pan in both directions
      },
      zoom: {
        enabled: true,
        drag: false,
        mode: 'xy', // Zoom in both x and y directions
        speed: 0.1, // Adjust zoom speed
      },
    },
  },
};

const data = {
  labels: [
    'BARWAAQO', 'REJO', 'HORSEED', 'TALO-WADAAG', 'UCID', 
    'KAAH', 'HILAAC', 'SHACABKA', 'WADDANI', 'KULMIYE'
  ],
  datasets: [
    {
      label: 'Votes',
      data: [900, 850, 900, 800, 750, 650, 2000, 1500, 4000, 5000],
      backgroundColor: [
        'lightgreen', 'orange', 'green', 'skyblue', 'pink', 
        'red', 'blue', 'purple', 'orange', 'yellow',
      ],
    },
  ],
};

const PartiesPieChart = () => {
  return (
    <div className="bg-white shadow-md p-4"> 
      <Pie data={data} options={options} />
    </div>
  );
};

export default PartiesPieChart;
