class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    insertVertex(vertex){

        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2){

        if(! this.adjacencyList[vertex1]){
            this.insertVertex(vertex1);
        }

        if(!this.adjacencyList[vertex2]){
            this.insertVertex(vertex2);
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }



    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + '->' + [...this.adjacencyList[vertex]]);
        }
    }

    removeEdge(vertex1, vertex2){

        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex){
        if(! this.adjacencyList[vertex]) return;

        for(let adjacentVertex of this.adjacencyList[vertex]){

            this.removeEdge(adjacentVertex,vertex);
        }

        delete this.adjacencyList[vertex];
    }

    hasEdge(vertex1, vertex2){

        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1);
    }

    bfs(start){

        let queue = [start];
        let visited = new Set();
        visited.add(start);

        while(queue.length > 0){

            let vertex = queue.shift();

            console.log(vertex)

            for(let adjacentVertex of this.adjacencyList[vertex]){

                if(! visited.has(adjacentVertex)){
                    visited.add(adjacentVertex);
                    queue.push(adjacentVertex)
                }
            }

        }
    }


    dfs(start, visited = new Set()){

        if(! visited.has(start)){

            console.log(start);
            visited.add(start);

            for(let adjacentVertex of this.adjacencyList[start]){

                if(! visited.has(adjacentVertex)){
                    this.dfs(adjacentVertex, visited);
                }
            }
        }
    }
}


const gph = new Graph();

gph.insertVertex('A');
gph.insertVertex('B');
gph.insertVertex('C');

gph.addEdge('A','B')
console.log(gph.hasEdge('A', 'B'));

gph.removeEdge('A', 'B');

gph.removeVertex('B');
gph.display();

