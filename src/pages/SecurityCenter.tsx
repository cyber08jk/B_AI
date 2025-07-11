import React from 'react';
import { Shield, Lock, AlertTriangle, Fingerprint, Smartphone, Mail } from 'lucide-react';

const SecurityCenter = () => {
  const securityFeatures = [
    {
      title: 'Multi-Factor Authentication',
      description: 'Enable additional security layers with OTP, biometric, or hardware keys',
      icon: Lock,
      status: 'Enabled',
      color: 'text-green-600'
    },
    {
      title: 'Biometric Verification',
      description: 'Use fingerprint or face recognition for sensitive transactions',
      icon: Fingerprint,
      status: 'Available',
      color: 'text-blue-600'
    },
    {
      title: 'Device Authentication',
      description: 'Verify trusted devices and get alerts for new device logins',
      icon: Smartphone,
      status: 'Active',
      color: 'text-green-600'
    },
    {
      title: 'Email Notifications',
      description: 'Get instant alerts for suspicious activities',
      icon: Mail,
      status: 'Configured',
      color: 'text-green-600'
    }
  ];

  const fraudChecks = [
    'UPI Transaction Verification',
    'International Transaction Monitoring',
    'Unusual Amount Detection',
    'Location-based Authentication',
    'Pattern Recognition',
    'Behavioral Analysis'
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Security Center</h1>
        <div className="flex items-center gap-2 text-green-600">
          <Shield className="h-5 w-5" />
          <span>Security Status: Strong</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {securityFeatures.map((feature) => (
          <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <feature.icon className="h-6 w-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{feature.title}</h3>
                  <span className={`text-sm ${feature.color}`}>{feature.status}</span>
                </div>
                <p className="text-gray-600 mt-1">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Active Fraud Detection Checks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fraudChecks.map((check) => (
            <div key={check} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-green-600" />
              <span className="text-green-700">{check}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Security Events</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="font-medium text-yellow-700">New Device Login Detected</p>
                <p className="text-sm text-yellow-600">Location: Mumbai, India</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <Shield className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-green-700">Security Scan Completed</p>
                <p className="text-sm text-green-600">No threats detected</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Security Recommendations</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 border border-blue-200 rounded-lg">
              <Lock className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-700">Enable Biometric Authentication</p>
                <p className="text-sm text-blue-600">Enhance security with fingerprint login</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border border-blue-200 rounded-lg">
              <Smartphone className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-700">Review Trusted Devices</p>
                <p className="text-sm text-blue-600">Remove any unrecognized devices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityCenter;