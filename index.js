const addDays = require("date-fns/addDays");
const getDateAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 8, 22), days);
  return `${newDate.getDate()}- ${newDate.getMonth()+1}-${newDate.getFullYear()}`;
};
console.log(getDateAfterXDays(10));
module.exports = getDateAfterXDays;
