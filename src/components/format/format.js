//format date yyyymmdd
export const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("");
};

export const lastYear = (date) => {
  let dateLastYear = date;
  dateLastYear.setMonth(dateLastYear.getMonth() - 12);
  return (dateLastYear = formatDate(dateLastYear));
};

export const dateCurrent = (date) => {
  return formatDate(date);
};

//returns format yyyy,mm,dd
export const convertDate = (value) => {
  let date = value;
  let newFormatDate = [
    date.slice(0, 4),
    " ",
    date.slice(4, 6),
    " ",
    date.slice(6, 8),
  ].join("");
  return newFormatDate;
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
