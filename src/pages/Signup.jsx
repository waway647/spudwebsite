import React, { useState } from 'react';
import SignupComponent1 from '../components/SignupComponent1';
import SignupComponent2 from '../components/SignupComponent2';

function Signup() {
  const [currentStep, setCurrentStep] = useState(1); // State to track the current step (1 or 2)

  // Function to move to the next step
  const handleNextStep = () => {
    setCurrentStep(2);
  };

  // Function to go back to the previous step
  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  return (
    <div>
      {currentStep === 1 ? (
        <SignupComponent1 onContinue={handleNextStep} />
      ) : (
        <SignupComponent2 onBack={handlePreviousStep}/>
      )}
    </div>
  );
}

export default Signup;