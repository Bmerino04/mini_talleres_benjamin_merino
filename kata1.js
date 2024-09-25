// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
function narcissistic(number) {
    var arrayOfDigitals = number.toString().split('');
    var numberLength = arrayOfDigitals.length;
    var sum = 0;

    arrayOfDigitals.forEach(function(digit) {
        sum += Math.pow(digit, numberLength);
    });

    return sum === number;
}