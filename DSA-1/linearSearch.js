function linearSearch(arr, n){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            return i;
        }
    }

    return -1;
}

console.log(linearSearch([8,4,2,5,7,9,12,23,35,5],7));
