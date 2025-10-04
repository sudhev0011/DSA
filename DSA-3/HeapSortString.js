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
    
    if(largest !== index){
        [arr[largest], arr[index]] = [arr[index], arr[largest]];
        Heapify(largest, arr, n);
    }
}

function HeapSort(arr){
     
    let n = arr.length;
    arr = arr.split('')
    
    for(let i = Math.floor(n/2) - 1; i >= 0; i--){
        Heapify(i, arr, n);
    }
    
    for(let j = n-1; j > 0; j--){
        [arr[j], arr[0]] = [arr[0], arr[j]];
        Heapify(0, arr, j)
    }
    
    return arr.join('');
}


let arr = 'hdgfacbe';
console.log(HeapSort(arr))