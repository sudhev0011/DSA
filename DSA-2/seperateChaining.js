class Node{
    constructor(key,value){
        this.key = key
        this.value = value;
        this.next = null;
    }
}


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
        let node = new Node(key,value);
        if(this.table[index] === undefined){

            this.table[index] = node;
        }else{
            let curr = this.table[index];

            while(curr.next){
                curr = curr.next;
            }

            curr.next = node;
        }
    }

    get(key){
        let index = this.hash(key);

        let curr = this.table[index];

        while(curr){
            if(curr.key === key){
                return curr.value;
            }

            curr = curr.next;
        }

        return undefined;
    }

    print(){

        for(let i = 0; i < this.table.length; i++){

            let curr = this.table[i];

            while(curr){
                console.log(curr.value);
                curr = curr.next;
            }
        }
    }

}


let ht = new HashTable(10);

ht.set('name', 'sudhev');
ht.set('mane', 'saidev');
ht.set('name', 'suresh');
ht.set('name', 'bindu');
ht.set('name', 'lakshmi');

ht.set('age', 23);

// console.log(ht.get('name'));
// console.log(ht.get('mane'));

ht.print();