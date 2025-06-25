function ValidPara(strs){
    let stack = [];
    let valid = {
        "(" : ")",
        "[" : "]",
        "{" : "}",
    };
    
    
    for(let str of strs){
        if(valid[str]){
            stack.push(valid[str])
        }else{
            if(str !== stack.pop()){
                return false;
                
            }
        }
    }
    
    return stack.length === 0;
}

console.log(ValidPara("{{}}{}{}"))