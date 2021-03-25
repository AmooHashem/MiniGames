class Node {
  neighborsId = [];
  isSelected = false;

  constructor(id, rerender) {
    this.rerender = rerender;
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

  changeSelection() {
    this.isSelected = !this.isSelected;
    this.rerender();
  }

  export() {
    return ({
      id: this.id,
      isSelected: this.isSelected,
      changeSelection: this.changeSelection,
    })
  }
}



class Link {
  isSelected = false;

  constructor(node1Id, node2Id, rerender) {
    this.rerender = rerender;
    this.source = Math.min(node1Id, node2Id);
    this.target = Math.max(node1Id, node2Id);
  }

  changeSelection() {
    this.isSelected = !this.isSelected;
    this.rerender();
  }

  export() {
    return ({
      source: this.source,
      target: this.target,
      isSelected: this.isSelected,
      changeSelection: this.changeSelection.bind(this),
    })
  }
}

export class MyGraph {
  initialNodeId = 0;
  nodes = [];
  links = [];

  constructor(rerender) {
    this.rerender = rerender;
  }

  addNewNode() {
    const node = new Node(this.initialNodeId, this.rerender);
    this.initialNodeId++;
    this.nodes.push(node);
    console.log('New node added!');
    this.rerender();
    return true;
  }

  removeNode(nodeId) {
    this.nodes = this.nodes.filter((node) => node.id != nodeId);
    console.log('Node removed successfully.');
    this.rerender();
    return true;
  }

  addLink(node1Id, node2Id) {
    const tmp = this.links.forEach((link) =>
      (link.source == Math.min(node1Id, node2Id) && link.target == Math.max(node1Id, node2Id))
    ) || []
    if (tmp.length == 0) {
      this.links.push(new Link(node1Id, node2Id, this.rerender));
      console.log("Link added successfully!");
      this.rerender();
      return true;
    } else {
      console.log("Link already exists.");
      return false;
    }
  }

  removeLink(node1Id, node2Id) {
    const tmp = this.links.forEach((link) =>
      (link.source == Math.min(node1Id, node2Id) && link.target == Math.max(node1Id, node2Id))
    )
    if (tmp.length > 0) {
      this.links = this.links.forEach((link) =>
        (link.source != Math.min(node1Id, node2Id) || link.target != Math.max(node1Id, node2Id))
      )
      console.log("Link removed successfully!");
      this.rerender();
      return true;
    } else {
      console.log('Link doesn\'t exist.');
      return false;
    }
  }

  addLinksBetweenSelectedNodes() {
    const selectedNodes = this.nodes.filter((node) => node.isSelected).map((node) => node.id)
    for (let i = 0; i < selectedNodes.length; i++) {
      for (let j = i + 1; j < selectedNodes.length; j++) {
        this._addLink(selectedNodes[i], selectedNodes[j])
      }
    }
    this.rerender();
    console.log('Links added successfully!');
  }

  removeLinksBetweenSelectedNodes() {
    const selectedNodes = this.nodes.filter((node) => node.isSelected).map((node) => node.id)
    for (let i = 0; i < selectedNodes.length; i++) {
      for (let j = i + 1; j < selectedNodes.length; j++) {
        this._removeLink(selectedNodes[i], selectedNodes[j]);
      }
    }
    this.rerender();
    console.log('Links removed successfully!');
  }

  exportData() {
    let data = {
      nodes: [],
      links: []
    }
    this.nodes.forEach((node) => data.nodes.push(node.export()));
    this.links.forEach((link) => data.links.push(link.export()));
    return data;
  }

}