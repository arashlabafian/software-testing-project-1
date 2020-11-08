module.exports.secondDegreeEquation = function secondDegreeEquation(a, b, c) {
  var delt = Math.pow(b, 2) - 4 * a * c;
  if (delt === 0) {
    var res = (-1 * b) / (2 * a);
    return res;
  } else if (delt > 0) {
    var res = [];

    var answer1 = (-b + Math.sqrt(delt)) / (2 * a);
    var answer2 = (-b - Math.sqrt(delt)) / (2 * a);

    res = [...res, answer1, answer2];
    return res;
  } else {
    return 'answer not found';
  }
};

module.exports.primeNums = function primeNums(number) {
  var res = [];
  for (let i = 2; i <= number - 1; i++) {
    var answer = true;

    for (let i = 2; i < i; i++) {
      if (i % i === 0) {
        answer = false;
        break;
      }
    }
    if (answer) {
      res = [...res, i];
    }
  }
  return res;
};

module.exports.subStrIndex = function subStrIndex(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (j === str2.length - 1) {
        return i;
      } else if (str1[i + j] !== str2[j]) {
        break;
      }
    }
  }
  return -1;
};
