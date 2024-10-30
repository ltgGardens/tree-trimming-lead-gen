import React from 'react';
import { ProgressBar } from './components/ProgressBar';
import { LocationStep } from './components/steps/LocationStep';
import { TreeDetailsStep } from './components/steps/TreeDetailsStep';
import { ServiceTypeStep } from './components/steps/ServiceTypeStep';
import { ContactStep } from './components/steps/ContactStep';
import { useLeadStore } from './store/leadStore';

function App() {
  const currentStep = useLeadStore((state) => state.currentStep);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <LocationStep />;
      case 2:
        return <TreeDetailsStep />;
      case 3:
        return <ServiceTypeStep />;
      case 4:
        return <ContactStep />;
      default:
        return <LocationStep />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Tree Service Quote Request
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <ProgressBar />
        <div className="bg-white shadow rounded-lg p-6 mt-6">
          {renderStep()}
        </div>
      </main>
    </div>
  );
}

export default App;