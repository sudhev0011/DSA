function bubbleSort(arr){

    let isSwapped;
    do{
        isSwapped = false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                arr[i] = arr[i] ^ arr[i+1]
                arr[i+1] = arr[i] ^ arr[i+1]
                arr[i] = arr[i] ^ arr[i+1]
                isSwapped = true;
            }
        }
    }while(isSwapped)
}

function BubbleSort(arr){

    for(let i = 0; i < arr.length - 1; i++){

        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                arr[j] = arr[j] ^ arr[j+1]
                arr[j+1] = arr[j] ^ arr[j+1]
                arr[j] = arr[j] ^ arr[j+1]
            }
        }
    }
}

function Largest(arr){

    let largest = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }

    return largest;
}

const arr = [7,3,4,1,5,7,45,34,23,65,23,12,45,65,43,2,4,6,7,3,42]
BubbleSort(arr);
console.log(arr);
console.log(Largest(arr));
