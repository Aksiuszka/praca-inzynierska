import MelancholicPet from '../../../shared/assets/images/results/petTest/Melancholic';
import CholericPet from '../../../shared/assets/images/results/petTest/Choleric';
import SanguinePet from '../../../shared/assets/images/results/petTest/Sanguine';
import FlegmaticPet from '../../../shared/assets/images/results/petTest/Flegmatic';

export const renderPetResultImg = (result) => {
  switch (result) {
    case 'melancholic':
      return <MelancholicPet />;
    case 'choleric':
      return <CholericPet />;
    case 'sanguine':
      return <SanguinePet />;
    case 'phlegmatic':
      return <FlegmaticPet />;
    default:
      return null;
  }
};
