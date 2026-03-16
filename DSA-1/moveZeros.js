function MoveZeros(arr){
    let index = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            if(i !== index){
                [arr[i], arr[index]] = [arr[index], arr[i]]
            }
            index++;
        }
    }
    
    return arr;
}

function moveZerosToleft(arr){
    let n = arr.length - 1;
    let index = n;

    for(let i = n; i >= 0; i--){

        if(arr[i] !== 0){
            if(i !== index){

                [arr[i], arr[index]] = [arr[index], arr[i]]
            }
            index--
        }
    }

    return arr;
}




let arr = [0,0,5, 6, 0, 3, 0, 0, 2, 0, 9, 0, 1];

// console.log(MoveZeros(arr))
console.log(moveZerosToleft(arr))