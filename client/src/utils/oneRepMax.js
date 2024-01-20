export const oneRepMax = (weight, reps) => {
  /* Epley Formula */
  return Math.round(weight * (1 + 0.0333 * reps), 0);
};
