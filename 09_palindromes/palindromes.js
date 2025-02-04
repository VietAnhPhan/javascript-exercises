const palindromes = function (str = '') {
    let arr = str.split(""), filteredArray = [], reversedArray = [], filterdString = '', reversedString = '';
    arr.forEach(char => {
        if (char != ' ' && char != '.' && char != ',' && char != '!') {
            filteredArray.push(char);
            reversedArray.push(char);
        }
    });
    reversedArray = reversedArray.reverse();
    reversedString = reversedArray.join("").toLowerCase();
    filterdString = filteredArray.join("").toLowerCase();
    if (filterdString == reversedString) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
