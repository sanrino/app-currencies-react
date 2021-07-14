export const lastMonth = (date) => {
  let lastMonth = date;
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  return lastMonth;
};

// Returns an array of dates between the two dates
export function getDates(startDate, endDate) {
  const dates = [];
  let currentDate = startDate;
  const addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
}
