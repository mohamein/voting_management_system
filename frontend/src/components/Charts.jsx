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
      text: 'Codka Doorashooyinka Dalka',
    },
  },
};

const labels = ['Maroodijeex', 'Awdal', 'Togdheer', 'Saaxil', 'Sanaag', 'Sool'];

const data = {
  labels,
  datasets: [
    {
      label: 'Kulmiye',
      data: [5000, 3000, 1500, 1000, 1000, 1000],
      backgroundColor: 'yellow',
    },
    {
      label: 'Waddani',
      data: [4000, 2500, 3000, 1500, 550, 500],
      backgroundColor: 'orange',
    },
    {
      label: 'Ucid',
      data: [2000, 1000, 800, 500, 350, 250],
      backgroundColor: 'green',
    },
  ],
};
const Charts = () => {
  return (
    <div className="w-[100%] h-[100%] bg-white shadow-md p-4">
      <Bar data={data} options={options} />;
    </div>
  );
};

export default Charts;
