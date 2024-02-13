export const calculatePetTemperament = (responses, temperamentMapping) => {
  const temperamentPoints = {
    choleric: 0,
    sanguine: 0,
    melancholic: 0,
    phlegmatic: 0,
  };

  responses.forEach(({ questionIndex, response }) => {
    const questionKey = `question${questionIndex + 1}`; // Adjust for 1-based index
    Object.keys(temperamentMapping).forEach((temperament) => {
      if (temperamentMapping[temperament].traits.includes(questionKey)) {
        temperamentPoints[temperament] += response === 'yes' ? 1 : 0;
      }
    });
  });

  let maxPoints = 0;
  let petTemperament = '';

  Object.keys(temperamentPoints).forEach((temperament) => {
    if (temperamentPoints[temperament] > maxPoints) {
      maxPoints = temperamentPoints[temperament];
      petTemperament = temperament;
    }
  });

  return petTemperament;
};
