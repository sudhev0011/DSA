class HashTable{
    constructor(size){
       this.table = new Array(size);
       this.size = size; 
    }

    hash(key){
        let total = 0;

        for(let i = 0; i < key.length; i++){
            
            total += key.charCodeAt(i);
        }

        return total % this.size;
    }


    set(key, value){

        let index = this.hash(key);
        
        while(this.table[index] !== undefined && this.table[index][0] !== key){
            index = (index + 1) % this.size;
        }

        this.table[index] = [key, value]
    }
    
    get(key){

        let index = this.hash(key);

        while(this.table[index] !== undefined){
            if(this.table[index][0] === key){
                return this.table[index][1];
            }
            index = (index+1) % this.size;
        }

        return undefined;
    }
}
