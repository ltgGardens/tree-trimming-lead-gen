import React from 'react';
import { useLeadStore } from '../../store/leadStore';

export const LocationStep: React.FC = () => {
  const { leadData, updateLeadData, setStep } = useLeadStore();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Where's the tree located?</h2>
        <input
          type="text"
          placeholder="Enter your address"
          className="w-full p-3 border rounded-lg"
          value={leadData.location || ''}
          onChange={(e) => updateLeadData({ location: e.target.value })}
        />
      </div>
      <button
        onClick={() => setStep(2)}
        disabled={!leadData.location}
        className="w-full bg-blue-600 text-white py-3 rounded-lg disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};