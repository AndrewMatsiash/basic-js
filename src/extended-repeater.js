const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(string, options = { 'repeatTimes': 1, 'separator': '+', 'addition': '', 'additionRepeatTimes': 1, 'additionSeparator': '|', }) {
  string = String(string);
  let default_options = { 'repeatTimes': 1, 'separator': '+', 'addition': '', 'additionRepeatTimes': 1, 'additionSeparator': '|', }
  for (let key in default_options) {

    if (!(key in options)) {
      options[key] = default_options[key]
    }

  }
  let string_to_repeat = string + options['addition'] + (options['additionSeparator'] + options['addition']).repeat(options['additionRepeatTimes'] - 1)

  string = string_to_repeat + (options['separator'] + string_to_repeat).repeat(options['repeatTimes'] - 1)


  return string
}

module.exports = {
  repeater
};
