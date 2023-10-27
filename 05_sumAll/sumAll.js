const sumAll = function(start, end) {
    let sum = 0;
    
    if (start > end) {
        start = start + end;
        end = start - end;
        start = start - end;
    } 

    if ((typeof(start) === "string") || (typeof(end) === "string") || (start < 0) || (end < 0) || (typeof(end) === "object")) {

        return "ERROR";

    } else {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
    };

// Do not edit below this line
module.exports = sumAll;
