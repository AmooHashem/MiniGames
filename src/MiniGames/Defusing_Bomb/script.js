import React, { MyGraph } from '../../Components/Graph';

const myGraph = new MyGraph();
myGraph.addNewNode();
myGraph.addNewNode();
myGraph.addNewNode();
myGraph.addNewNode();
myGraph.addLink(0, 1, 'purple');
myGraph.addLink(1, 2);
myGraph.addLink(2, 3);
myGraph.getNode(0).setColor('blue')

myGraph.addNewNode();
myGraph.addNewNode();
myGraph.addNewNode();
myGraph.addNewNode();


export { myGraph };