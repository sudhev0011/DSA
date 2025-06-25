// function reverseStringInPlace(string){
//     let reverse =''
//     let stack = []
    
//     for(let char of string+" "){    //'MY NAME IS AISHU '
//         if(char !== " "){
//             stack.push(char)
//         } else {
//             while(stack.length > 0){
//                 reverse += stack.pop()
//             }
//             reverse += " "  // add space after each words in the senctance
//         }
//     }
//     return reverse.trim() ///trim space after aishu
// }

// console.log(reverseStringInPlace("MY NAME IS AISHU"))  //YM EMAN SI UHSIA




function Mergesort(arr) {
    if (arr.length < 2) return arr;

    let middle = Math.floor(arr.length / 2);
    let leftArray = arr.slice(0, middle);
    let rightArray = arr.slice(middle);

    return merge(Mergesort(leftArray), Mergesort(rightArray));
}

function merge(leftArray, rightArray) {
    let sortedArray = [];

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift());
        } else {
            sortedArray.push(rightArray.shift());
        }
    }

    return [...sortedArray, ...rightArray, ...leftArray];
}

function MergeSort(str) {
    // let charArray = str.split('');
    let result = Mergesort(str.split(''));
    return result.join('');
}

let str = 'sudhev';
console.log(MergeSort(str));  // Output: 'dehsuv'
