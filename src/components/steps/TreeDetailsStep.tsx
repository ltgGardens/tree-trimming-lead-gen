import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useLeadStore } from '../../store/leadStore';

export const TreeDetailsStep: React.FC = () => {
  const { leadData, updateLeadData, setStep } = useLeadStore();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    updateLeadData({ treeImages: acceptedFiles });
  }, [updateLeadData]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: true
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Tell us about your tree</h2>
      
      <div className="space-y-4">
        <div {...getRootProps()} className="border-2 border-dashed p-6 rounded-lg text-center cursor-pointer">
          <input {...getInputProps()} />
          <p>Drag & drop tree photos here, or click to select files</p>
        </div>

        <select
          className="w-full p-3 border rounded-lg"
          value={leadData.treeHeight || ''}
          onChange={(e) => updateLeadData({ treeHeight: e.target.value as any })}
        >
          <option value="">Select tree height</option>
          <option value="small">Small (up to 20ft)</option>
          <option value="medium">Medium (20-40ft)</option>
          <option value="large">Large (40ft+)</option>
        </select>

        <input
          type="text"
          placeholder="Describe tree accessibility (e.g., backyard, front yard, near power lines)"
          className="w-full p-3 border rounded-lg"
          value={leadData.accessibility || ''}
          onChange={(e) => updateLeadData({ accessibility: e.target.value })}
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setStep(1)}
          className="w-full bg-gray-200 py-3 rounded-lg"
        >
          Back
        </button>
        <button
          onClick={() => setStep(3)}
          disabled={!leadData.treeHeight || !leadData.accessibility}
          className="w-full bg-blue-600 text-white py-3 rounded-lg disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};