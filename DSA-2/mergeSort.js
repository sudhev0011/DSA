function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }

    let middle = Math.floor(arr.length/2);
    let leftArray = arr.slice(0,middle);
    let rightArray = arr.slice(middle, arr.length);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}


function merge(leftArray, rightArray){

    let sortedArray = [];

    while(leftArray.length && rightArray.length){

        if(leftArray[0] <= rightArray[0]){
            sortedArray.push(leftArray.shift());
        }else{
            sortedArray.push(rightArray.shift());
        }
    }

    return [...sortedArray, ...leftArray, ...rightArray];
}


let arr = [3,5,7,8,24,6,7,9];

console.log(mergeSort(arr));