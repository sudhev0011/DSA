function removeChar(char,str){
    if(str.length === 0){
        return '';
    }

    let first = str[0] === char ? '' : str[0];

    return first + removeChar(char,str.slice(1));
}

console.log(removeChar('l','hello'));
