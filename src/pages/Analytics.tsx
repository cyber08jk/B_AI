import React from 'react';
import { LineChart, PieChart, BarChart, TrendingUp } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
} from 'chart.js';
import { Line, Pie, Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const Analytics = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Transaction Volume',
        data: [650000, 590000, 800000, 810000, 560000, 550000],
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4
      }
    ]
  };

  const pieData = {
    labels: ['UPI', 'NEFT', 'RTGS', 'IMPS'],
    datasets: [
      {
        data: [300, 150, 100, 200],
        backgroundColor: [
          'rgb(59, 130, 246)',
          'rgb(34, 197, 94)',
          'rgb(239, 68, 68)',
          'rgb(168, 85, 247)'
        ]
      }
    ]
  };

  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Fraud Attempts',
        data: [12, 19, 15, 17, 14, 8, 10],
        backgroundColor: 'rgba(239, 68, 68, 0.5)'
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          <span className="text-blue-600">Data Updated: Live</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Transaction Volume Trends</h2>
          <div className="h-[300px]">
            <Line data={lineData} options={chartOptions} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Transaction Types Distribution</h2>
          <div className="h-[300px]">
            <Pie data={pieData} options={chartOptions} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Weekly Fraud Attempt Pattern</h2>
        <div className="h-[300px]">
          <Bar data={barData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;