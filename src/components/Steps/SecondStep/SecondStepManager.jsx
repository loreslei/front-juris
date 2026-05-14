import React, { useState } from 'react';
import SecondStep1 from './SecondStep1';
import SecondStep2 from './SecondStep2';
import SecondSetp3 from './SecondStep3';
import { useProcessoContext } from '@/context/ProcessoContext';

export default function SecondStepManager() {
  const { formData } = useProcessoContext();
  const [currentStep, setCurrentStep] = useState(formData.reclamantes.length > 0 ? 3 : 1);

  const handleAddMore = () => {
    setCurrentStep(2);
  };

  return (
    <div>
      {/* Condicionalmente renderiza os componentes baseado no estado */}
      {currentStep === 1 && (
        <SecondStep1 onNext={handleAddMore} />
      )}
      
      {currentStep === 2 && (
        <SecondStep2 
          onSave={() => setCurrentStep(3)} 
        />
      )}
      
      {currentStep === 3 && (
        <SecondSetp3 
          onAddMore={handleAddMore} 
        />
      )}
    </div>
  );
}