import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Natiijada Dorashada Urarada',
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
      backgroundColor: 'lightgreen',
    },
    {
      label: 'REJO',
      data: [900, 850, 900, 800, 750, 650],
      backgroundColor: 'orange',
    },
    {
      label: 'HORSEED',
      backgroundColor: 'green',
      data: [2000, 1000, 900, 700, 650, 550],
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
const PartiesGraph = () => {
  return (
    <div className="w-[100%] h-[100%] bg-white shadow-md p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default PartiesGraph;
