const removeFromArray = function(arr, removeOne, removeTwo, removeThree, removeFour) {
    console.log(arr);
    // for (let i = 0; i < arr.length ; i++) {
        
    // if (arr[i] === removeOne || arr[i] === removeTwo || arr[i] === removeThree || arr[i] === removeFour)
    //     arr.splice(i, 1);
    // }    
    // console.log(arr);  
    // return arr;

    let i = 0;
    
    while(i < arr.length) {
        if (arr[i] === removeOne || arr[i] === removeTwo || arr[i] === removeThree || arr[i] === removeFour) {
            arr.splice(i, 1);
            i = 0;
            continue;
        }
        i++;
    }   
    
    return arr;
    
};

// Do not edit below this line
module.exports = removeFromArray;
