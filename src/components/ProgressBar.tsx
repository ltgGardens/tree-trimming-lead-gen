import React from 'react';
import { useLeadStore } from '../store/leadStore';

const steps = [
  'Location',
  'Tree Details',
  'Service Type',
  'Contact Info',
];

export const ProgressBar: React.FC = () => {
  const currentStep = useLeadStore((state) => state.currentStep);

  return (
    <div className="w-full py-4">
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex flex-col items-center ${
              index + 1 <= currentStep ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index + 1 <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
              } text-white mb-2`}
            >
              {index + 1}
            </div>
            <span className="text-sm">{step}</span>
          </div>
        ))}
      </div>
      <div className="relative pt-1">
        <div className="flex h-2 mb-4 overflow-hidden bg-gray-200 rounded">
          <div
            className="transition-all duration-500 bg-blue-600"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};