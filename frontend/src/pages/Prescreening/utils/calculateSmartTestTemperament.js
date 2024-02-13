/* eslint-disable no-plusplus */
import { SMART_TEST_QUESTION } from '../constants/smartTest';
// Helper function to get temperament by index
const getTemperamentByIndex = (index) => {
  switch (index) {
    case 0:
      return 'melancholic';
    case 1:
      return 'phlegmatic';
    case 2:
      return 'sanguine';
    case 3:
      return 'choleric';
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

  // Iterate through each user response
  userResponses.forEach((response, index) => {
    const questionNumber = index + 1; // Questions start from 1
    const selectedTrait = response.response;

    // Assign points based on the selected trait for each question
    SMART_TEST_QUESTION[index][questionNumber].forEach((trait, i) => {
      if (trait === selectedTrait) {
        // Assign points based on the index in the trait array
        temperamentPoints[getTemperamentByIndex(i)]++;
      }
    });
  });

  // Determine the dominant temperament
  const dominantTemperament = Object.keys(temperamentPoints).reduce((a, b) =>
    temperamentPoints[a] > temperamentPoints[b] ? a : b,
  );

  return dominantTemperament;
};
