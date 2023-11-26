export const generateQuestions = (questions) => {
  return questions.map((question) => ({
    label: question,
  }));
};
