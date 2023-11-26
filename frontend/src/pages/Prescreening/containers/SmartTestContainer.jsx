import { TestPageLayout } from '../../../shared/components/Layouts';
import { StepperForm } from '../components/StepperForm/StepperForm';

export const SmartTestContainer = () => {
  return (
    <TestPageLayout title='SmartTest'>
      <StepperForm category='smartTest' />
    </TestPageLayout>
  );
};
