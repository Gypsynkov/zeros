module.exports = function zeros(expression) {
  var resultCount = 0;
  var isEveryOdd = true;
  expression.split('*').forEach((num, index, arr) => {
    if ( num.slice(0, -2) % 2 === 0) {
      isEveryOdd = false;
    }
  });
  if (isEveryOdd) {
    return 0;
  }
  expression.split('*').forEach((num) => {
    if (num.indexOf('!') === num.lastIndexOf('!')) {
      resultCount += factorialZerosCounter(num.slice(0, -1));
    } else {
      resultCount += doubleFactorialZerosCounter(num.slice(0, -2));
    }
  });
  return resultCount;
}
function factorialZerosCounter(n) {
  var result = 0;
  for (var i = 5; i <= n; i += 5) {
    var num = i;
    while (num % 5 === 0) {
      num /= 5;
      result++;
    }
  }
  return result;
}

function doubleFactorialZerosCounter(n) {
  return (n % 2 === 0) ? evenDoubleFactorialCounter(n) : oddDoubleFactorialZerosCounter(n);
}

function evenDoubleFactorialCounter(n) {
  console.log(n);
  var result = 0;
  for (var i = 10; i <= n; i += 10) {
    var num = i;
    while (num % 5 === 0) {
      num /= 10;
      result++;
    }
  }
  return result;
}

function oddDoubleFactorialZerosCounter(n) {
  console.log(n);
  var result = 0;
  for (var i = 5; i <= n; i += 10) {
    var num = i;
    while (num % 5 === 0) {
      num /= 5;
      result++;
    }
  }
  return result;
}
