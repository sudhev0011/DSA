// let str = 'malayalam';

// function checkPalindrome(str){

//     let i = 0;
//     let j = str.length - 1;

//     while(i < j){
        
//         if(str[i] !== str[j]) return false;

//         i++;
//         j--;
//     }

//     return true;
// }



// recurson

// let str = '';

// function checkPalindrome(str){

//     if(str.trim().length <= 0) return false;

//     if(str.length == 1) return true;

//     if(str[0] !== str[str.length - 1]) return false;

//     return checkPalindrome(str.slice(1, -1));
// }


// console.log(checkPalindrome(str))


let str = 'eybe';

function checkPalindrome(str, start=0, end=str.length-1){

    if(start == end) return true;

    if(str[start] !== str[end]) return false;

    return checkPalindrome(str, start+1, end-1);
}

console.log(checkPalindrome(str))