const fibonacci = function (number) {
    number = parseInt(number);
    let init = 0, fibonaci1 = 1, fibonaciNext, quanity = 1;
    if (number == 0) return 0;
    if (number < 0) return "OOPS";
    // if (number == 1) return fibonaci1;

    while (quanity < number) {
        fibonaciNext = init + fibonaci1;
        init = fibonaci1;
        fibonaci1 = fibonaciNext;
        quanity++;
    }

    return fibonaci1;
};

// Do not edit below this line
module.exports = fibonacci;
