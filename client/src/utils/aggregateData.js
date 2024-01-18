export const aggregateData = (workout) => {
  const data = {
    totalVolume: 0,
    totalSets: 0,
    maxWeight: 0,
  };
  workout.exercises.forEach((exercise) => {
    exercise.data.forEach((set) => {
      data.totalVolume += set.weight * set.reps;
      data.totalSets++;
      data.maxWeight = Math.max(data.maxWeight, set.weight);
    });
  });
  return data;
};
