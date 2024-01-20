export const convertDateMMDDYYYY = (oldDate) => {
  const newDate = new Date(oldDate);
  return newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
