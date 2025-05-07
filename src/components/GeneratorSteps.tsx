import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSliders, faDatabase } from '@fortawesome/free-solid-svg-icons';

interface GeneratorStepsProps {
  currentStep: 'input' | 'settings' | 'result';
}

const GeneratorSteps: React.FC<GeneratorStepsProps> = ({ currentStep }) => {
  // Helper to determine if a step is active
  const isActive = (step: string): boolean => {
    if (step === 'input') return true;
    if (step === 'settings') return currentStep === 'settings' || currentStep === 'result';
    if (step === 'result') return currentStep === 'result';
    return false;
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-center">
        <div className="flex items-center w-full max-w-3xl mx-auto">
          {/* Step 1: Input Data */}
          <div className="flex items-center relative">
            <div className={`rounded-full transition duration-500 ease-in-out h-14 w-14 flex items-center justify-center border-2 ${isActive('input') ? 'bg-blue-600 border-blue-600 shadow-lg' : 'bg-white border-gray-300'}`}>
              <FontAwesomeIcon 
                icon={faUserPlus} 
                className={isActive('input') ? 'text-white' : 'text-gray-500'} 
              />
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-sm font-medium text-blue-600">
              <span className="hidden md:block">輸入資料</span>
              <span className="block md:hidden">步驟1</span>
            </div>
          </div>

          {/* Connecting Line 1-2 */}
          <div className={`flex-auto border-t-4 transition duration-500 ease-in-out ${isActive('settings') ? 'border-blue-600' : 'border-gray-300'} mx-2`}></div>
          
          {/* Step 2: Generation Settings */}
          <div className="flex items-center relative">
            <div className={`rounded-full transition duration-500 ease-in-out h-14 w-14 flex items-center justify-center border-2 ${isActive('settings') ? 'bg-blue-600 border-blue-600 shadow-lg' : 'bg-white border-gray-300'}`}>
              <FontAwesomeIcon 
                icon={faSliders} 
                className={isActive('settings') ? 'text-white' : 'text-gray-500'} 
              />
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-sm font-medium text-blue-600">
              <span className="hidden md:block">生成設定</span>
              <span className="block md:hidden">步驟2</span>
            </div>
          </div>
          
          {/* Connecting Line 2-3 */}
          <div className={`flex-auto border-t-4 transition duration-500 ease-in-out ${isActive('result') ? 'border-blue-600' : 'border-gray-300'} mx-2`}></div>
          
          {/* Step 3: Generate Content */}
          <div className="flex items-center relative">
            <div className={`rounded-full transition duration-500 ease-in-out h-14 w-14 flex items-center justify-center border-2 ${isActive('result') ? 'bg-blue-600 border-blue-600 shadow-lg' : 'bg-white border-gray-300'}`}>
              <FontAwesomeIcon 
                icon={faDatabase} 
                className={isActive('result') ? 'text-white' : 'text-gray-500'} 
              />
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-sm font-medium text-blue-600">
              <span className="hidden md:block">生成內容</span>
              <span className="block md:hidden">步驟3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratorSteps; 