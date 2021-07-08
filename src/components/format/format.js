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
  return dateLastYear = formatDate(dateLastYear)
}

export const dateCurrent = (date) => {
  return formatDate(date)
}

