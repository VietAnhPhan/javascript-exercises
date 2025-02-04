const repeatString = function (str, num) {
    const baseStr = str;
    if (num == 0) {
        return '';
    }
    else if (num < 0) {
        return 'ERROR';
    }
    else if (str == '') {
        return '';
    }
    for (let i = 1; i < num; i++) {
        str += baseStr;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
