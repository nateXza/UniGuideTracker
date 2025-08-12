import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface ProgressStepsProps {
  currentStep: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  const { t } = useTranslation();
  
  const steps = [
    { id: 1, name: t('progress.profile') },
    { id: 2, name: t('progress.assessment') },
    { id: 3, name: t('progress.results') }
  ];

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-medium ${
                  step.id <= currentStep
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-muted-foreground'
                }`}>
                  {step.id}
                </div>
                <div className={`text-sm mt-2 ${
                  step.id <= currentStep
                    ? 'text-muted-foreground'
                    : 'text-muted-foreground'
                }`}>
                  {step.name}
                </div>
              </div>
              
              {/* Line between circles (except after the last) */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 bg-gray-200 mx-2">
                  <div 
                    className="h-1 bg-primary-600"
                    style={{ 
                      width: step.id < currentStep ? '100%' : '0%'
                    }}
                  ></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
