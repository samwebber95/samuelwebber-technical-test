// take in a number
// return 'fizz' if number multiple of 3
// return 'buzz' if number multiple of 5
// return 'fizzbuzz' if number multiple of 3 and 5
// return number else

// if statement structure

function fizzbuzz(num) {
  if ((num % 3 === 0) & (num % 5 === 0)) {
    return "fizzbuzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else {
    return num;
  }
}

module.exports = { fizzbuzz };
