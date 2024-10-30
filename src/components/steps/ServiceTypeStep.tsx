import React from 'react';
import { useLeadStore } from '../../store/leadStore';

export const ServiceTypeStep: React.FC = () => {
  const { leadData, updateLeadData, setStep } = useLeadStore();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">What service do you need?</h2>
      
      <div className="space-y-4">
        <select
          className="w-full p-3 border rounded-lg"
          value={leadData.serviceType || ''}
          onChange={(e) => updateLeadData({ serviceType: e.target.value as any })}
        >
          <option value="">Select service type</option>
          <option value="trimming">Tree Trimming</option>
          <option value="removal">Tree Removal</option>
          <option value="both">Both</option>
        </select>

        <select
          className="w-full p-3 border rounded-lg"
          value={leadData.urgency || ''}
          onChange={(e) => updateLeadData({ urgency: e.target.value as any })}
        >
          <option value="">How urgent is this?</option>
          <option value="low">Not urgent (within month)</option>
          <option value="medium">Somewhat urgent (within week)</option>
          <option value="high">Very urgent (ASAP)</option>
        </select>

        <textarea
          placeholder="Additional notes or requirements"
          className="w-full p-3 border rounded-lg"
          value={leadData.additionalNotes || ''}
          onChange={(e) => updateLeadData({ additionalNotes: e.target.value })}
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setStep(2)}
          className="w-full bg-gray-200 py-3 rounded-lg"
        >
          Back
        </button>
        <button
          onClick={() => setStep(4)}
          disabled={!leadData.serviceType || !leadData.urgency}
          className="w-full bg-blue-600 text-white py-3 rounded-lg disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};