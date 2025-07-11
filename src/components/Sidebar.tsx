import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  IndianRupee, 
  LineChart, 
  Shield, 
  Settings,
  AlertTriangle
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/transactions', icon: IndianRupee, label: 'Transactions' },
    { path: '/analytics', icon: LineChart, label: 'Analytics' },
    { path: '/security', icon: Shield, label: 'Security Center' },
    { path: '/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-8">
        <AlertTriangle className="h-8 w-8 text-red-600" />
        <h1 className="text-xl font-bold">CIPHERFORT AI</h1>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-red-50 text-red-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;