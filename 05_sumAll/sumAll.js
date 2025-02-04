const sumAll = function (num1, num2) {
    let sumAll = num1 + num2, smallestNum, largestNum;
    if (num1 * num2 < 0 || !Number.isInteger(sumAll)) {
        return 'ERROR';
    }
    // if (num1 > num2) {
    //     smallestNum = num2;
    //     largestNum = num1;
    // }
    // else {
    //     smallestNum = num1;
    //     largestNum = num2;
    // }
    smallestNum = num1 < num2 ? num1 : num2;
    largestNum = num1 < num2 ? num2 : num1;


    for (let i = smallestNum + 1; i < largestNum; i++) {
        sumAll += i;
    }

    return sumAll;

};

// Do not edit below this line
module.exports = sumAll;
