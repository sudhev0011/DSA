function selectionSort(arr){

    let arrayLength = arr.length;

    for(let i = 0; i < arrayLength - 1; i++){

        let minElement = i;

        for(let j = i + 1; j < arrayLength; j++){

            if(arr[j] < arr[minElement]){
                minElement = j;
            }
        }

        if(minElement !== i){
            let temp = arr[i];
            arr[i] = arr[minElement];
            arr[minElement] = temp;
        }
    }

    return arr;
}


let arr = [5,3,2,7,9,5,4,2,5,7];

console.log(selectionSort(arr));