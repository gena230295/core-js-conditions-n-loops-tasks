/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (c > b && c > a) {
    return c;
  }
  if (b > a && b > c) {
    return b;
  }
  return a;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    queen.x + queen.y === king.x + king.y ||
    queen.x - queen.y === king.x - king.y
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  if (a === b || a === c || b === c) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const ten = 'X';
  let firstEl = '';
  const count = Math.floor(num / 10);
  for (let i = 0; i < count; i += 1) {
    firstEl += ten;
  }
  const twoCount = num - count * 10;
  let secondEl = '';
  let thirdEl = 'V';
  let s = 0;
  for (let i = 0; i < twoCount; i += 1) {
    if (twoCount <= 3) {
      secondEl += 'I';
    } else if (twoCount === 4) {
      secondEl += 'IV';
      break;
    } else if (twoCount > 4 && twoCount <= 8) {
      if (twoCount === s + 5) {
        break;
      }
      s += 1;
      thirdEl += 'I';
    } else {
      secondEl += 'IX';
      break;
    }
  }
  const finNum =
    twoCount > 4 && twoCount <= 8 ? firstEl + thirdEl : firstEl + secondEl;
  return finNum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        str += 'minus';
        break;
      case '.':
        str += 'point';
        break;
      case ',':
        str += 'point';
        break;
      case '0':
        str += 'zero';
        break;
      case '1':
        str += 'one';
        break;
      case '2':
        str += 'two';
        break;
      case '3':
        str += 'three';
        break;
      case '4':
        str += 'four';
        break;
      case '5':
        str += 'five';
        break;
      case '6':
        str += 'six';
        break;
      case '7':
        str += 'seven';
        break;
      case '8':
        str += 'eight';
        break;
      case '9':
        str += 'nine';
        break;
      default:
        return 'Something went wrong';
    }
    if (i + 2 <= numberStr.length) {
      str += ' ';
    }
  }
  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }
  if (str === newStr) {
    return true;
  }
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      newStr += i;
      break;
    }
  }
  if (newStr.length > 0) {
    return newStr;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = String(num);
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === String(digit)) {
      newStr += digit;
    }
  }
  if (newStr.length > 0) {
    return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let x = 2;
  let y = arr.length - 2;
  for (let i = 0; i < arr.length - 2; i += 1) {
    let sum1 = 0;
    let sum2 = 0;
    let ind = 0;
    for (let s = 0; s < arr.length - x; s += 1) {
      sum1 += arr[s];
    }
    for (let s = arr.length - 1; s > y; s -= 1) {
      sum2 += arr[s];
      ind = s - 1;
    }
    x += 1;
    y -= 1;
    if (sum1 === sum2) {
      return ind;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(/* size */) {
  throw new Error('Not implemented');
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const arr = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    const newArr = [];
    let x = 0;
    for (let s = matrix.length - 1; s >= 0; s -= 1) {
      newArr[x] = matrix[s][i];
      x += 1;
    }
    arr[i] = newArr;
  }
  const newMatrix = matrix;
  for (let i = 0; i < newMatrix.length; i += 1) {
    for (let s = 0; s < newMatrix[i].length; s += 1) {
      newMatrix[i][s] = arr[i][s];
    }
  }
  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const finArr = arr;
  if (arr.length < 2) {
    return arr;
  }
  const firstArr = [];
  const mediumArr = [];
  const secondArr = [];
  const randomEl = Math.floor(Math.random() * arr.length);
  const num = arr[randomEl];
  let firstNum = 0;
  let mediumNum = 0;
  let secondNum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < num) {
      firstArr[firstNum] = arr[i];
      firstNum += 1;
    }
    if (arr[i] === num) {
      mediumArr[mediumNum] = arr[i];
      mediumNum += 1;
    }
    if (arr[i] > num) {
      secondArr[secondNum] = arr[i];
      secondNum += 1;
    }
  }
  const newArr = [
    ...sortByAsc(firstArr),
    ...mediumArr,
    ...sortByAsc(secondArr),
  ];
  for (let i = 0; i < newArr.length; i += 1) {
    finArr[i] = newArr[i];
  }
  return finArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let allStr = str;
  let diff = 0;
  for (let s = 0; s < iterations; s += 1) {
    let padStart = '';
    let padEnd = '';
    for (let i = 0; i < allStr.length; i += 1) {
      if (i % 2 === 0) {
        padStart += allStr[i];
      } else {
        padEnd += allStr[i];
      }
    }
    diff += 1;
    allStr = padStart + padEnd;
    if (str === allStr) {
      break;
    }
  }
  const newIt = iterations % diff;
  for (let s = 0; s < newIt; s += 1) {
    let padStart = '';
    let padEnd = '';
    for (let i = 0; i < allStr.length; i += 1) {
      if (i % 2 === 0) {
        padStart += allStr[i];
      } else {
        padEnd += allStr[i];
      }
    }
    allStr = padStart + padEnd;
  }
  return allStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const str = `${number}`;
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    arr[i] = Number(str[i]);
  }
  let ind;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] > arr[i - 1]) {
      ind = i - 1;
      break;
    }
  }
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i <= ind; i += 1) {
    arr1[i] = arr[i];
  }
  for (let i = 0; i < arr.length - ind - 1; i += 1) {
    arr2[i] = arr[i + ind + 1];
  }
  for (let i = 0; i < arr2.length; i += 1) {
    for (let s = 0; s < arr2.length; s += 1) {
      if (arr2[s] > arr2[s + 1]) {
        [arr2[s], arr2[s + 1]] = [arr2[s + 1], arr2[s]];
      }
    }
  }
  for (let i = 0; i < arr2.length; i += 1) {
    if (arr1[arr1.length - 1] < arr2[i]) {
      [arr1[arr1.length - 1], arr2[i]] = [arr2[i], arr1[arr1.length - 1]];
      break;
    }
  }
  const finArr = [...arr1, ...arr2];
  let newStr = '';
  for (let i = 0; i < finArr.length; i += 1) {
    newStr += finArr[i];
  }
  const finNum = Number(newStr);
  if (finNum === 0) {
    return number;
  }
  return finNum;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
