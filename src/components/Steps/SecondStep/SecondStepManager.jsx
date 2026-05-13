import React, { useState } from 'react';
import SecondStep1 from './SecondStep1';
import SecondStep2 from './SecondStep2';
import SecondSetp3 from './SecondSetp3';

export default function SecondStepManager() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div>
      {/* Condicionalmente renderiza os componentes baseado no estado */}
      {currentStep === 1 && (
        <SecondStep1 onNext={() => setCurrentStep(2)} />
      )}
      
      {currentStep === 2 && (
        <SecondStep2 onSave={() => setCurrentStep(3)} />
      )}
      
      {currentStep === 3 && (
        <SecondSetp3 onAddMore={() => setCurrentStep(2)} />
      )}
    </div>
  );
}