import React from 'react';
import { useLeadStore } from '../../store/leadStore';

export const ContactStep: React.FC = () => {
  const { leadData, updateLeadData, setStep, submitLead } = useLeadStore();

  const handleSubmit = async () => {
    await submitLead();
    // TODO: Show success message or redirect
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Your Contact Information</h2>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg"
          value={leadData.name || ''}
          onChange={(e) => updateLeadData({ name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border rounded-lg"
          value={leadData.email || ''}
          onChange={(e) => updateLeadData({ email: e.target.value })}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 border rounded-lg"
          value={leadData.phone || ''}
          onChange={(e) => updateLeadData({ phone: e.target.value })}
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setStep(3)}
          className="w-full bg-gray-200 py-3 rounded-lg"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!leadData.name || !leadData.email || !leadData.phone}
          className="w-full bg-green-600 text-white py-3 rounded-lg disabled:bg-gray-400"
        >
          Submit Request
        </button>
      </div>
    </div>
  );
};