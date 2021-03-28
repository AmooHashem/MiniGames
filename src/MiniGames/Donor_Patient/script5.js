import { MyGraph } from '../../Components/Graph2';

const myGraph1 = new MyGraph({ name: 'Graph-1', hoverOpacity: 0.3 });
myGraph1.addNewNode('blue');
myGraph1.addNewNode('blue');
myGraph1.addNewNode('blue');


myGraph1.addLink(0, 1);

let graphs = [myGraph1];
export { graphs };
