const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (date === undefined) {
    return 'Unable to determine the time of year!'
  } else if (date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!')
  }

  let MonthNum = date.getMonth();
  let res;

  if (MonthNum == 0 || MonthNum == 1 || MonthNum == 11) {
    res = 'winter'
  } else if (MonthNum == 2 || MonthNum == 3 || MonthNum == 4) {
    res = 'spring'
  } else if (MonthNum == 5 || MonthNum == 6 || MonthNum == 7) {
    res = 'summer'
  } else if (MonthNum == 8 || MonthNum == 9 || MonthNum == 10) {
    res = 'autumn'
  } else {
    res = 'Invalid date!'
  }

  return res
}

module.exports = {
  getSeason
};
