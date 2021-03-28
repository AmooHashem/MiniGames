import { MyGraph } from '../../Components/Graph2';

const HEALTHY = '#2fff00';
const PATIENT = '#cc3d3d';
const FRIEND = '#cccccc';

const myGraph1 = new MyGraph({ name: 'Graph-0', hoverOpacity: 0.3 });
myGraph1.addNewNode(PATIENT);
myGraph1.addNewNode(HEALTHY);
myGraph1.addNewNode(PATIENT);
myGraph1.addNewNode(HEALTHY);

myGraph1.addLink(0, 1, FRIEND, '', true);
myGraph1.addLink(2, 3, FRIEND, '', true);

myGraph1.addLink(0, 3, '', 8);
myGraph1.addLink(0, 1, '', 6);
myGraph1.addLink(2, 3, '', 8);
myGraph1.addLink(2, 1, '', 6);

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
