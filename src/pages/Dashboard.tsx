import React, { useEffect } from 'react';
import { 
  AlertTriangle, 
  ShieldCheck, 
  TrendingUp, 
  Users,
  IndianRupee 
} from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { toast } from 'react-hot-toast';
import { useTransactionStore } from '../store/transactionStore';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { transactions, recentAlerts } = useTransactionStore();

  useEffect(() => {
    // Show toast notification for new alerts
    const lastAlert = recentAlerts[0];
    if (lastAlert) {
      toast.error(`High Risk Transaction Detected: ${lastAlert.amount}`, {
        duration: 5000,
        position: 'top-right',
      });
    }
  }, [recentAlerts]);

  const stats = [
    {
      title: 'Fraud Alerts',
      value: recentAlerts.length.toString(),
      change: '+2',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      title: 'Secure Transactions',
      value: transactions.filter(t => t.status === 'Completed').length.toString(),
      change: '+15%',
      icon: ShieldCheck,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Total Volume',
      value: '₹24.5L',
      change: '+8%',
      icon: IndianRupee,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+12%',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Fraud Attempts',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(220, 38, 38)',
        tension: 0.4
      },
      {
        label: 'Prevented Fraud',
        data: [60, 55, 75, 78, 52, 50],
        borderColor: 'rgb(34, 197, 94)',
        tension: 0.4
      }
    ]
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard SECURITY STATUS</h1>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-600" />
          <span className="text-green-600">System Status: Active</span>
        </div>
      </div>S

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <p className="text-green-600 text-sm mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Fraud Detection Trends</h2>
        <Line data={chartData} options={{ responsive: true }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <div>
                  <p className="font-medium text-red-700">
                    High Risk Transaction: {alert.amount}
                  </p>
                  <p className="text-sm text-red-600">
                    Type: {alert.type} | Date: {alert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Security Recommendations</h2>
          <div className="space-y-4">
            <div className="p-4 border border-blue-200 rounded-lg">
              <h3 className="font-medium text-blue-800">Enable 2FA</h3>
              <p className="text-sm text-blue-600 mt-1">
                Strengthen account security with two-factor authentication
              </p>
            </div>
            <div className="p-4 border border-blue-200 rounded-lg">
              <h3 className="font-medium text-blue-800">Review Device Access</h3>
              <p className="text-sm text-blue-600 mt-1">
                Check and remove any unauthorized devices
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;