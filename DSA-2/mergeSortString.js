function mergeSortString(str){

    if(str.length < 2) return str;

    let middle = Math.floor(str.length / 2);

    let left = mergeSortString( str.slice(0,middle) );
    let right = mergeSortString( str.slice(middle) );

    return merge(left, right);
}


function merge(left, right){

    let result = '';
    let i = 0, j = 0;

    while(i < left.length && j < right.length){

        if(left.charCodeAt(i) <= right.charCodeAt(j)){

            result += left[i];
            i++;
        }else{

            result += right[j];
            j++;
        }
    }

    result += left.slice(i) + right.slice(j);
    return result;
}


let str = 'sudhev';

console.log(mergeSortString(str));
