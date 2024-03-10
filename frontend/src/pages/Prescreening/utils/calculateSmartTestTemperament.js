/* eslint-disable no-plusplus */
import { SMART_TEST_QUESTION } from '../constants/smartTest';
const getTemperamentByIndex = (index) => {
  switch (index) {
    case 0:
      return 'sanguine';
    case 1:
      return 'choleric';
    case 2:
      return 'melancholic';
    case 3:
      return 'flegmatic';
    default:
      return '';
  }
};

export const calculateSmartTestResult = (userResponses) => {
  const temperamentPoints = {
    melancholic: 0,
    phlegmatic: 0,
    sanguine: 0,
    choleric: 0,
  };

  userResponses.forEach((response, index) => {
    const questionNumber = index + 1;
    const selectedTrait = response.response;

    SMART_TEST_QUESTION[index][questionNumber].forEach((trait, i) => {
      if (trait === selectedTrait) {
        temperamentPoints[getTemperamentByIndex(i)]++;
      }
    });
  });

  const dominantTemperament = Object.keys(temperamentPoints).reduce((a, b) =>
    temperamentPoints[a] > temperamentPoints[b] ? a : b,
  );

  return dominantTemperament;
};
