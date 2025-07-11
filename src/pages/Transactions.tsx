import React from 'react';
import { IndianRupee, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { useTransactionStore } from '../store/transactionStore';

const Transactions = () => {
  const { transactions } = useTransactionStore();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return { icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100' };
      case 'Pending':
        return { icon: Clock, color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
      case 'Flagged':
        return { icon: AlertTriangle, color: 'text-red-600', bgColor: 'bg-red-100' };
      default:
        return { icon: CheckCircle, color: 'text-gray-600', bgColor: 'bg-gray-100' };
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Transaction Monitor</h1>
        <div className="flex items-center gap-2">
          <IndianRupee className="h-5 w-5 text-blue-600" />
          <span className="text-blue-600">Today's Volume: ₹1.75L</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Risk Score
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction) => {
                const { icon: StatusIcon, color, bgColor } = getStatusIcon(transaction.status);
                return (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      #{transaction.id.toString().padStart(6, '0')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {transaction.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {transaction.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <StatusIcon className={`h-4 w-4 ${color}`} />
                        <span className={color}>{transaction.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs ${bgColor} ${color}`}>
                        {transaction.riskScore}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;