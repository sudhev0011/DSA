class maxHeap{

    constructor(){
        this.heap = [];
    }

    getParentIndex(index){
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index){
        return index * 2 + 1;
    }

    getRightChildIndex(index){
        return index * 2 + 2;
    }

    swap(index1, index2){

        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value){

        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index){

        let parentIndex = this.getParentIndex(index);

        while(index > 0 && this.heap[index] > this.heap[parentIndex]){
            this.swap(parentIndex, index);

            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }

    }

    extractMax(){

        if(this.heap.length === 0) return 0;
        if(this.heap.length === 1) return this.heap.pop();

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();

        this.heapifyDown(0);

        return max;
    }

    heapifyDown(index){

        let largest = index;

        let leftChildIndex = this.getLeftChildIndex(index);
        let rightChiildIndex = this.getRightChildIndex(index);

        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]){
            largest = leftChildIndex;
        }

        if(rightChiildIndex < this.heap.length && this.heap[rightChiildIndex] > this.heap[largest]){
            largest = rightChiildIndex;
        }

        if(index !== largest){
            this.swap(largest, index);
            this.heapifyDown(largest);
        }
    }

    heapsort(arr){

        let mh = new maxHeap();
        let sorted = [];

        for(let val of arr){
            mh.insert(val);
        }

        while(mh.heap.length > 0){
            sorted.push(mh.extractMax());
        }

        return sorted;
    }
}

let maxheap = new maxHeap();

let arr = [3,4,5,677,8,87,6,5,33,2,42,53,64,758,679,746];

console.log(maxheap.heapsort(arr));