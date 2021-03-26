import React, { MyGraph } from '../../Components/Graph';

const myGraph1 = new MyGraph();
myGraph1.addNewNode('blue');
myGraph1.addNewNode('blue');
myGraph1.addNewNode('red');
myGraph1.addNewNode('red');
myGraph1.addNewNode('red');
myGraph1.addNewNode('red');
myGraph1.addNewNode('red');
myGraph1.addNewNode('red');

myGraph1.addLink(0, 1);
myGraph1.addLink(1, 2);
myGraph1.addLink(2, 3);
myGraph1.addLink(4, 1);
myGraph1.addLink(4, 5);
myGraph1.addLink(5, 6);
myGraph1.addLink(6, 7);

export { myGraph1 };

myGraph1.findMaximumMatching();