import React, { MyGraph } from '../../Components/Graph';

const myGraph = new MyGraph();
myGraph.addNewNode();
myGraph.addNewNode('white');
myGraph.addNewNode();
myGraph.addLink(0, 1);
myGraph.addLink(1, 2);


export { myGraph };