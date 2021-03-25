class Node {
  neighborsId = [];
  isSelected = false;

  constructor(id) {
    this.id = id;
  }

  addNeighbor(nodeId) {
    if (this.neighborsId.includes(nodeId)) {
      console.log('This node has already this neighbor.');
      return;
    }
    this.neighborsId.push(nodeId);
  }

  removerNeighbor(nodeId) {
    if (!this.neighborsId.includes(nodeId)) {
      console.log('This node doesn\'t have this neighbor.');
      return;
    }
    this.neighbors = this.neighborsId.filter((neighbor) => {
      neighbor != nodeId
    });
  }
}

class Graph {
  initialNodeId = 0;
  selectedNodes = [];
  selectedEdges = [];
  nodes = [];
  edges = [];

  addNewNode() {
    const node = new Node(this.initialNodeId);
    this.initialNodeId++;
    this.nodes.push(node);
    console.log('New node added!');
    return true;
  }

  removeNode(nodeId) {
    this.nodes = this.nodes.filter((node) => node.id != nodeId);
    console.log('Node removed successfully.');
    return true;
  }

  selectNode(nodeId) {
    if (!this.selectedNodes.includes(nodeId)) {
      this.selectedNodes.push(nodeId);
      console.log('Node selected successfully.');
      return true;
    }
    else {
      console.log('This node is already selected.');
      return false;
    }
  }

  unselectNode(nodeId) {
    if (this.selectedNodes.includes(nodeId)) {
      let i = this.selectedNodes.indexOf(nodeId);
      this.selectedNodes.splice(i, 1);
      console.log('Node unselected successfully.');
      return true;
    } else {
      console.log('This node isn\'t already selected.');
      return false;
    }
  }

  addEdgesBetweenSelectedNodes() {
    for (let i = 0; i < this.selectedNodes.length; i++) {
      for (let j = i + 1; j < this.selectedNodes.length; j++) {
        let minVal = Math.min(this.selectedNodes[i], this.selectedNodes[j]);
        let maxVal = Math.max(this.selectedNodes[i], this.selectedNodes[j]);
        if (!this.selectedEdges.includes([minVal, maxVal])) {
          this.selectedEdges.push([minVal, maxVal]);
        }
      }
    }
    console.log('Edges added successfully!');
  }

  removeEdgesBetweenSelectedNodes() {
    for (let i = 0; i < this.selectedNodes.length; i++) {
      for (let j = i + 1; j < this.selectedNodes.length; j++) {
        let minVal = Math.min(this.selectedNodes[i], this.selectedNodes[j]);
        let maxVal = Math.max(this.selectedNodes[i], this.selectedNodes[j]);
        this.selectedEdges = this.selectedEdges.filter((edge) => edge !== [minVal, maxVal]);
      }
    }
    console.log('Edges removed successfully!');
  }
}

class TarkibiatGraph extends Graph {

}

