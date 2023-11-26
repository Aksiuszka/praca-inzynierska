import { TestPageLayout } from '../../../shared/components/Layouts';
import { StepperForm } from '../components/StepperForm/StepperForm';

export const PetTestContainer = () => {
  return (
    <TestPageLayout title='PetTest'>
      <StepperForm category='petTest' />
    </TestPageLayout>
  );
};
