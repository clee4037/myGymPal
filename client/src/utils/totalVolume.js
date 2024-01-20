export const totalVolume = (data) => {
  return data.reduce((total, set) => (total += set.weight * set.reps), 0);
};
