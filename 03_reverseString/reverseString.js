const reverseString = function (string) {
    let emptyStr = '', stringArr = string.split('');

    for (let i = string.length - 1; i >= 0; i--) {
        emptyStr += stringArr[i];
    }
    return emptyStr;
};

// Do not edit below this line
module.exports = reverseString;
