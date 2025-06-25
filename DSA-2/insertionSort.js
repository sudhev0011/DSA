function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let insertElement = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > insertElement){
            arr[j+1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = insertElement;
    }
}




const arr = [7,3,4,6,7,3,42]
insertionSort(arr);
console.log(arr);