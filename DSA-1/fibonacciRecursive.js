// function fibRevursive(val, a=0, b=1, n=0){
//     if(n == val){
//         return 
//     }

//     console.log(a);

//     fibRevursive(val, b, a+b, n+1);
// }

// fibRevursive(10)

function fibRevursive(val, a=0, b=1){
    if(val == 0){
        return 
    }

    console.log(a);

    fibRevursive(val-1, b, a+b);
}

fibRevursive(10)