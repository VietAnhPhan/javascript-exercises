const removeFromArray = function (arr = [], ...theElements) {

    for (let element of theElements) {
        arr = arr.filter(arrItem => arrItem !== element);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
