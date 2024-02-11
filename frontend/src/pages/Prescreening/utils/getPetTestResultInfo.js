import { melancholicData, sanguineData, cholericData, flegmaticData } from '../data/resultsData';

export const getPetTestResultInfo = (result) => {
  switch (result) {
    case 'melancholic':
      return { data: melancholicData, color: 'green' };
    case 'sanguine':
      return { data: sanguineData, color: 'red' };
    case 'choleric':
      return { data: cholericData, color: 'yellow' };
    case 'phlegmatic':
      return { data: flegmaticData, color: 'blue' };
    default:
      return { data: [], color: 'transparent' };
  }
};
