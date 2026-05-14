import React, { useState } from 'react';
import ThirdStep1 from './ThirdStep1';
import ThirdStep2 from './ThirdStep2';
import ThirdStep3 from './ThirdStep3';
import { useProcessoContext } from '@/context/ProcessoContext';

export default function ThirdStepManager() {
  const { formData } = useProcessoContext();
  const [currentStep, setCurrentStep] = useState(formData.reclamados.length > 0 ? 3 : 1);

  const handleAddMore = () => {
    setCurrentStep(2);
  };

  return (
    <div>
      {/* Condicionalmente renderiza os componentes baseado no estado */}
      {currentStep === 1 && (
        <ThirdStep1 onNext={handleAddMore} />
      )}
      
      {currentStep === 2 && (
        <ThirdStep2 
          onSave={() => setCurrentStep(3)} 
        />
      )}
      
      {currentStep === 3 && (
        <ThirdStep3 
          onAddMore={handleAddMore} 
        />
      )}
    </div>
  );
}