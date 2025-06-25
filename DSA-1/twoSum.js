function twoSum(arr,target){
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        let test = arr[start] + arr[end];

        if(test === target){
            return [arr[start], arr[end]];
        }

        if(target > test){
            start++;
        }
        
        if(target < test){
            end--;
        }
    }

}


let arr = [2,4,6,7,8,12,14,15,16];

console.log(twoSum(arr,10))