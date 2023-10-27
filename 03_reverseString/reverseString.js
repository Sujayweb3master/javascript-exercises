const reverseString = function(str) {
    let n = str.length;
    let reverseStringValue = "";

    for (let i = n-1; i >= 0; i--) {
        console.log(str[i]);
        reverseStringValue += str[i];
        
    }
    return reverseStringValue; 
};

// Do not edit below this line
module.exports = reverseString;
