import CholericSmartTest from '../../../shared/assets/images/results/smartTest/Choleric';
import FlegmaticSmartTest from '../../../shared/assets/images/results/smartTest/Flegmatic';
import MelancholicSmartTest from '../../../shared/assets/images/results/smartTest/Melancholic';
import SanguineSmartTest from '../../../shared/assets/images/results/smartTest/Sanguine';

export const renderSmartTestResultImg = (result) => {
  switch (result) {
    case 'melancholic':
      return <MelancholicSmartTest />;
    case 'choleric':
      return <CholericSmartTest />;
    case 'sanguine':
      return <SanguineSmartTest />;
    case 'phlegmatic':
      return <FlegmaticSmartTest />;
    default:
      return null;
  }
};
