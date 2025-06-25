function recurssiveBinarySearch(arr,target){
    return search(arr, target, 0, arr.length)
}

function search(arr, target, leftIndex, rightIdx){
    if(leftIndex > rightIdx) return -1;
    
    let middleIndex = Math.floor((leftIndex+rightIdx)/2)

    if(target === arr[middleIndex]) return middleIndex;

    if(target > arr[middleIndex]){
        return search(arr,target,middleIndex+1,rightIdx)
    }else{
        return search(arr,target,leftIndex,middleIndex-1)
    }
}



console.log(recurssiveBinarySearch([-5,2,4,6,10], 10));
console.log(recurssiveBinarySearch([-5,2,4,6,10], 6));
console.log(recurssiveBinarySearch([-5,2,4,6,10], 20));
