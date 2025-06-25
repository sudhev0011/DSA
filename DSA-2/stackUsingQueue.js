class stackUsingQueue{

    constructor(){
        this.q1 = [];
        this.q2 = [];
    }

    push(element){

        this.q2.push(element);

        while(this.q1.length > 0){
            this.q2.push(this.q1.shift())
        }

        let temp = this.q1;
        this.q1 = this.q2;
        this.q2 = temp;
    }

    pop(){
        if(this.q1.length === 0){
            return null;
        }

        return this.q1.shift();
    }
}