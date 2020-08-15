// Converting a string to date obj
export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });

  // return date of format: YYYY/MM/DD
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
