class Graph {
  constructor() {
    this.AdjacencyList = {};
  }

  AddVertex(vertex) {
    if (!this.AdjacencyList[vertex]) {
      this.AdjacencyList[vertex] = [];
    }
  }

  AddEdge(vertex1, vertex2) {
    if (!this.AdjacencyList[vertex1]) {
      this.AddVertex(vertex1);
    }

    if (!this.AdjacencyList[vertex2]) {
      this.AddVertex(vertex2);
    }

    this.AdjacencyList[vertex1].push(vertex2);
    this.AdjacencyList[vertex2].push(vertex1);

    return this.AdjacencyList;
  }

  DeleteEdge(vertex1, vertex2) {
    this.AdjacencyList[vertex1] = this.AdjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );

    this.AdjacencyList[vertex2] = this.AdjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  DeleteVertex(vertex) {
    while (this.AdjacencyList[vertex].length) {
      let edge = this.AdjacencyList[vertex].pop();
      this.DeleteEdge(vertex, edge);
    }

    delete this.AdjacencyList[vertex];

    return this.AdjacencyList;
  }

  DFS(start) {
    let res = [];
    let visited = {};
    let List = this.AdjacencyList;

    function DFSHelper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      res.push(vertex);
      List[vertex].forEach((v) => {
        if (!visited[vertex]) return DFSHelper(v);
      });
    }

    DFSHelper(start);

    return res;
  }

  DFSIterative(start) {
    let stack = [start];
    let res = [];
    let visited = {};

    while (stack.length) {
      let vertex = stack.pop();

      if (!visited[vertex]) {
        visited[vertex] = true;
        res.push(vertex);

        this.AdjacencyList[vertex].forEach((neighbor) => {
          stack.push(neighbor);
        });
      }
    }

    return res;
  }

  BreadthFirstSearch(start) {
    let res = [];
    let visited = {};
    let queue = [start];
    visited[start] = true;
    while (queue.length) {
      let shift = queue.shift();
      // visited[shift] = true;
      res.push(shift);
      this.AdjacencyList[shift].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          res.push(v);
        }
      });
    }

    return res;
  }

  BreadthFirstSearchRecursive(start) {
    let res = [];
    let visited = {};
    let queue = [start];

    const BFSRecursive = (queue, res, visited) => {
      if (queue.length === 0) {
        return res;
      }

      let vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        res.push(vertex);

        this.AdjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            queue.push(neighbor);
          }
        });
      }

      return BFSRecursive(queue, res, visited);
    };

    return BFSRecursive(queue, res, visited);
  }
}

const graph = new Graph();

graph.AddVertex('A');
graph.AddVertex('B');
graph.AddVertex('C');
graph.AddVertex('D');
graph.AddEdge('A', 'B');
graph.AddEdge('B', 'C');
graph.AddEdge('C', 'D');
graph.AddEdge('D', 'A');

console.log('DFS:', graph.DFS('A'));
console.log('DFS Iterative:', graph.DFSIterative('A'));

console.log('BFS:', graph.BreadthFirstSearch('A'));
console.log('BFS Recursive:', graph.BreadthFirstSearchRecursive('A'));
