const repeatString = function(string, num) {

    const temp = string;

    if (num === 0) {
        return "";
    } else if (num < 0) {
        return "ERROR";
    }

    for(let i = 1; i < num; i++) {
        string += temp;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
