function mergeSortString(str){

    if(str.length < 2) return str;

    let middle = Math.floor(str.length / 2);

    let left =  str.slice(0,middle);
    let right =  str.slice(middle);

    return merge(mergeSortString(left), mergeSortString(right));
}


function merge(left, right){

    let result = '';
    let i = 0, j = 0;

    while(i < left.length && j < right.length){

        if(left[i] <= right[j]){

            result += left[i++];
        }else{

            result += right[j++];
        }
    }

    result += left.slice(i) + right.slice(j);
    return result;
}


let str = 'sudhev';

console.log(mergeSortString(str));
