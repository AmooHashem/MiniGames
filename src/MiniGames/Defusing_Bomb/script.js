import shuffle from 'lodash.shuffle';

import { MyGraph } from '../../Components/Graph2';

const colors = shuffle([0, 1, 2, 3, 4]);

console.log(shuffle(colors))

const HEALTHY = '#2fff00';
const PATIENT = '#cc3d3d';
const FRIEND = '#cccccc';

const myGraph1 = new MyGraph({ name: 'Graph-0' });
myGraph1.addNewNode('green');
myGraph1.addNewNode();
myGraph1.addNewNode();
myGraph1.addNewNode();
myGraph1.addNewNode();
myGraph1.addNewNode();
myGraph1.addNewNode();
myGraph1.addNewNode();
myGraph1.addNewNode();
myGraph1.addNewNode();
myGraph1.addNewNode('', '', false);
myGraph1.addNewNode('', '', false);
myGraph1.addNewNode('', '', false);
myGraph1.addNewNode('', '', false);
myGraph1.addNewNode('', '', false);
myGraph1.addNewNode('', '', false);
myGraph1.addNewNode('', '', false);
myGraph1.addNewNode('', '', false);

// myGraph1.addNewNode();
// myGraph1.addNewNode();
// myGraph1.addNewNode();
// myGraph1.addNewNode();
// myGraph1.addNewNode();
// myGraph1.addNewNode();
// myGraph1.addNewNode();

myGraph1.addLink(0, 1, '', 5);
myGraph1.addLink(0, 10, 'purple',);
myGraph1.addLink(10, 7, 'purple');
myGraph1.addLink(0, 11, 'orange');
myGraph1.addLink(11, 7, 'orange');

myGraph1.addLink(1, 12, 'purple');
myGraph1.addLink(12, 7, 'purple');
myGraph1.addLink(1, 13, 'orange');
myGraph1.addLink(13, 7, 'orange');

myGraph1.addLink(0, 14, 'purple');
myGraph1.addLink(14, 8, 'purple');
myGraph1.addLink(0, 15, 'orange');
myGraph1.addLink(15, 8, 'orange');

myGraph1.addLink(1, 16, 'purple');
myGraph1.addLink(16, 8, 'purple');
myGraph1.addLink(1, 17, 'orange');
myGraph1.addLink(17, 8, 'orange');

myGraph1.answer = [
  [
    [2, 3],
  ],
  [
    [0, 1],
  ],
]

let graphs = [myGraph1];
export { graphs };
