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

  export() {
    return ({
      id: toString(this.id),
      size: this.isSelected ? 30 : 20,
    })
  }
}

class Link {
  constructor(node1Id, node2Id) {
    this.source = Math.min(node1Id, node2Id);
    this.target = Math.max(node1Id, node2Id);
  }

  export() {
    return ({
      source: toString(this.source),
      target: toString(this.target),
    })
  }
}

class Graph {
  initialNodeId = 0;
  selectedNodes = [];
  selectedLinks = [];
  nodes = [];
  links = [];

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

  _addLink(node1Id, node2Id) {
    const tmp = this.links.forEach((link) =>
      (link.source == Math.min(node1Id, node2Id) && link.target == Math.max(node1Id, node2Id))
    )
    if (tmp.length == 0) {
      this.links.push(new Link(node1Id, node2Id));
      console.log("Link added successfully!");
      return true;
    } else {
      console.log("Link already exists.");
      return false;
    }
  }

  _removeLink(node1Id, node2Id) {
    const tmp = this.links.forEach((link) =>
      (link.source == Math.min(node1Id, node2Id) && link.target == Math.max(node1Id, node2Id))
    )
    if (tmp.length > 0) {
      this.links = this.links.forEach((link) =>
        (link.source != Math.min(node1Id, node2Id) || link.target != Math.max(node1Id, node2Id))
      )
      console.log("Link removed successfully!");
      return true;
    } else {
      console.log('Link doesn\'t exist.');
      return false;
    }
  }

  addLinksBetweenSelectedNodes() {
    for (let i = 0; i < this.selectedNodes.length; i++) {
      for (let j = i + 1; j < this.selectedNodes.length; j++) {
        this._addLink(this.selectedNodes[i], this.selectedNodes[j])
      }
    }
    console.log('Links added successfully!');
  }

  removeLinksBetweenSelectedNodes() {
    for (let i = 0; i < this.selectedNodes.length; i++) {
      for (let j = i + 1; j < this.selectedNodes.length; j++) {
        this._removeLink(this.selectedNodes[i], this.selectedNodes[j]);
      }
    }
    console.log('Links removed successfully!');
  }

}