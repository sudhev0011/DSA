function factorialRecurssive(n){
    if( n === 0) return 1;

    return   n * factorialRecurssive(n-1)
}

console.log(factorialRecurssive(4))