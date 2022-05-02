const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(Array.isArray(arr))) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  if (arr.length < 1) {

    return arr = []
  }


  let new_arr = [];
  let i = 0;

  while (arr[i] == '--discard-prev' || arr[i] == '--double-prev') {
    i += 1;
  }

  while (i < arr.length - 1) {

    if (arr[i] == '--discard-next' && arr[i + 2] == '--double-prev') {
      i = i + 3;
    }
    if (arr[i] == '--discard-next' && arr[i + 2] == '--discard-prev') {
      i = i + 3;
    }


    if (arr[i] == '--discard-prev') {
      new_arr.pop();
    }
    else if (arr[i] == '--double-prev') {
      new_arr.push(arr[i - 1])
    }
    else if (arr[i] == '--double-next') {
      new_arr.push(arr[i + 1])
    }
    else if (arr[i] == '--discard-next') {
      i += 1
    }
    else {
      new_arr.push(arr[i])
    }
    console.log(new_arr)
    i += 1
  }

  if (arr[i] !== '--discard-next' && arr[i] !== '--double-next') {
    new_arr.push(arr[i])
  }

  console.log(new_arr)
  return new_arr
}

module.exports = {
  transform
};
