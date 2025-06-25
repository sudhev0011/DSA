class QuadratingProbing{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
        this.count = 0;
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
        let i = 1;
        while(this.table[index] !== undefined && this.table[index][0] !== key){
            index = (index + i*i) % this.size;
            i++;
        }

        this.table[index] = [key, value];
        this.count++;

        if(this.count/this.size > 0.7){
            this.rehash();
        }
    }

    get(key){
        let index = this.hash(key);
        let i = 1;
        while(this.table[index] !== undefined){
            if(this.table[index][0] === key){
                return this.table[index][1];
            }

            index = (index+i*i) % this.size;
            i++
        }
    }

    remove(key){
        let index = this.hash(key);
        
        while(this.table[index] !== undefined){
            if(this.table[index][0] === key){
                this.table[index] = undefined;
                this.count--;
                return
            }

            index = (index + i * i) % this.size;
            i++;
        }
    }

    rehash(){
        let oldTable = this.table;
        this.size = this.size * 2;
        this.table = new Array(this.size);
        for(let i = 0; i < oldTable.length; i++){
            let bucket = oldTable[i];
            if(bucket !== undefined){
                const [key, value] = bucket;
                this.set(key,value);
            }

        }
    }
}