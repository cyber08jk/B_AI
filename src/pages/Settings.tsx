import React from 'react';
import { Bell, Shield, User, Lock } from 'lucide-react';

const Settings = () => {
  const settingsSections = [
    {
      title: 'Notification Preferences',
      icon: Bell,
      settings: [
        {
          name: 'Email Alerts',
          description: 'Receive email notifications for suspicious activities',
          enabled: true
        },
        {
          name: 'SMS Alerts',
          description: 'Get SMS alerts for high-risk transactions',
          enabled: true
        }
      ]
    },
    {
      title: 'Security Settings',
      icon: Shield,
      settings: [
        {
          name: 'Two-Factor Authentication',
          description: 'Require 2FA for all sensitive operations',
          enabled: true
        },
        {
          name: 'Biometric Login',
          description: 'Use fingerprint or face recognition',
          enabled: false
        }
      ]
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="space-y-6">
        {settingsSections.map((section) => (
          <div key={section.title} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <section.icon className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold">{section.title}</h2>
            </div>
            <div className="space-y-4">
              {section.settings.map((setting) => (
                <div key={setting.name} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{setting.name}</h3>
                    <p className="text-sm text-gray-500">{setting.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={setting.enabled}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;