export const calculateAdoptionReadiness = (answers, pointsMap, thresholds) => {
  const totalPoints = answers.reduce((acc, { response }) => {
    return acc + (pointsMap[response] || 0);
  }, 0);

  if (totalPoints >= thresholds.ready) {
    return 'ready';
  }
  if (totalPoints >= thresholds.notBad) {
    return 'notBad';
  }
  return 'notReady';
};
