let inputArray = [0,1,2,3,4,5];

// function sumSquares(array){
//     let result = 0;

//     for(i=0; i<array.length; i++){
//         result += Math.pow(array[i], 2);
//     }

//     console.log(result);

// }

// sumSquares(inputArray);

sumOfSquares = inputArray.reduce((result, record) => {
    return result + Math.pow(record,2);
}, 0);

console.log(sumOfSquares);
