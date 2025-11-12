function flattenObject(obj, parentKey='', result={}){
    
    for(let key in obj){
        
        let newKey = parentKey ? `${parentKey}.${key}` : key;
        
        if(typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])){
            
            flattenObject(obj[key], newKey, result);
        }else{
            result[newKey] = obj[key]
        }
    }
    
    return result;
}

const user = {
  name: "Alice",
  address: {
    city: "New York",
    zip: {
      code: 10001,
      area: "Manhattan"
    }
  },
  contact: {
    email: "alice@example.com"
  }
};

console.log(flattenObject(user));
