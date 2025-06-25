
function Heapify(index, arr, n){

    let leftIndex = index * 2 + 1;
    let rightIndex = index * 2 + 2;
    let largest = index;

    if(leftIndex < n && arr[leftIndex] > arr[largest]){
        largest = leftIndex;
    }

    if(rightIndex < n && arr[rightIndex] > arr[largest]){
        largest = rightIndex;
    }

    if(index !== largest){

        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        Heapify(largest,arr,n);
    }
}

function HeapSort(arr){

    let n = arr.length;

    for(let i = Math.floor(n/2)-1; i >= 0; i--){

        Heapify(i,arr,n);
    }

    for(let i = n-1; i > 0; i--){

        [arr[0], arr[i]] = [arr[i], arr[0]];
        Heapify(0,arr,i);
    }

    return arr;
}

let arr = [4,6,8,9,-7,6,5,4,4,-3,3,-4,-2,-7];

console.log(HeapSort(arr));