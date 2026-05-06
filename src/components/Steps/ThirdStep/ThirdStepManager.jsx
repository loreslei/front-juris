import React, { useState } from 'react';
import ThirdStep1 from './ThirdStep1';
import ThirdStep2 from './ThirdStep2';
import ThirdStep3 from './ThirdStep3';

export default function ThirdStepManager() {
  // O estado inicial é a tela 1
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div>
      {/* Condicionalmente renderiza os componentes baseado no estado */}
      {currentStep === 1 && (
        <ThirdStep1 onNext={() => setCurrentStep(2)} />
      )}
      
      {currentStep === 2 && (
        <ThirdStep2 onSave={() => setCurrentStep(3)} />
      )}
      
      {currentStep === 3 && (
        <ThirdStep3 onAddMore={() => setCurrentStep(2)} />
      )}
    </div>
  );
}