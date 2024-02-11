/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
// import { useState } from 'react';
import { TestPageLayout } from '../../../shared/components/Layouts';
import { StepperForm } from '../components/StepperForm/StepperForm';

export const SmartTestContainer = () => {
  return (
    <TestPageLayout title='SmartTest'>
      <StepperForm category='smartTest' />
    </TestPageLayout>
  );
};
