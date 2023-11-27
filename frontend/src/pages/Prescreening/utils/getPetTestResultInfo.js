import { melancholicData, sanguineData, cholericData, flegmaticData } from '../data/resultsData';

export const getPetTestResultInfo = (result) => {
  switch (result) {
    case 'melancholic':
      return { data: melancholicData, color: 'blue' };
    case 'sanguine':
      return { data: sanguineData, color: 'red' };
    case 'choleric':
      return { data: cholericData, color: 'green' };
    case 'flegmatic':
      return { data: flegmaticData, color: 'yellow' };
    default:
      return { data: [], color: 'transparent' };
  }
};
