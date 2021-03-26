const MAXIMUM_NUMBER_OF_NODES = 20;

class Node {
  neighborsId = [];
  isSelected = false;
  rerender = () => { }

  constructor(id, color) {
    this.color = color;
    this.id = id;
  }

  addNeighbor(nodeId) {
    if (this.neighborsId.includes(nodeId)) {
      console.log('This node has already this neighbor.');
      return;
    }
    this.neighborsId.push(nodeId);
    this.rerender();
  }

  removerNeighbor(nodeId) {
    if (!this.neighborsId.includes(nodeId)) {
      console.log('This node doesn\'t have this neighbor.');
      return;
    }
    this.neighbors = this.neighborsId.filter((neighbor) => {
      neighbor != nodeId
    });
    this.rerender();
  }

  setRerender(rerender) {
    this.rerender = rerender;
  }

  changeSelection() {
    this.isSelected = !this.isSelected;
    this.rerender();
  }

  setColor(color) {
    this.color = color;
    this.rerender();
  }

  getIsSelected() {
    console.lo
    return this.isSelected;
  }

  getColor() {
    return this.color;
  }

  export() {
    return ({
      id: this.id,
      isSelected: this.isSelected,
      changeSelection: this.changeSelection.bind(this),
      getIsSelected: this.getIsSelected.bind(this),
      getColor: this.getColor.bind(this),
      setRerender: this.setRerender.bind(this),
    })
  }
}



class Link {
  isSelected = false;
  rerender = () => { }

  constructor(node1Id, node2Id, color) {
    this.source = Math.min(node1Id, node2Id);
    this.target = Math.max(node1Id, node2Id);
    this.color = color;
  }

  setRerender(rerender) {
    this.rerender = rerender;
  }

  changeSelection() {
    this.isSelected = !this.isSelected;
    this.rerender();
  }

  setColor(color) {
    this.color = color;
    this.rerender();
    console.log("@#@$%$#$%^$#@#$%$#")
  }

  getIsSelected() {
    return this.isSelected;
  }

  getColor() {
    return this.color;
  }

  export() {
    return ({
      source: this.source,
      target: this.target,
      changeSelection: this.changeSelection.bind(this),
      getIsSelected: this.getIsSelected.bind(this),
      getColor: this.getColor.bind(this),
      setRerender: this.setRerender.bind(this),
    })
  }
}

export class MyGraph {
  initialNodeId = 0;
  nodes = [];
  links = [];

  addNewNode(color) {
    const node = new Node(this.initialNodeId, color);
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

  getNode(nodeId) {
    const tmp = this.nodes.filter((node) => node.id == nodeId);
    return tmp ? tmp[0] : {};
  }

  getLink(node1Id, node2Id) {
    const tmp = this.links.filter((link) => link.source == Math.min(node1Id, node2Id) && link.target == Math.max(node1Id, node2Id));
    return tmp ? tmp[0] : {};
  }


  addLink(node1Id, node2Id, color) {
    const tmp = this.links.forEach((link) =>
      (link.source == Math.min(node1Id, node2Id) && link.target == Math.max(node1Id, node2Id))
    ) || []
    if (tmp.length == 0) {
      this.links.push(new Link(node1Id, node2Id, color));
      console.log("Link added successfully!");
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
    console.log('Links added successfully!');
  }

  removeLinksBetweenSelectedNodes() {
    const selectedNodes = this.nodes.filter((node) => node.isSelected).map((node) => node.id)
    for (let i = 0; i < selectedNodes.length; i++) {
      for (let j = i + 1; j < selectedNodes.length; j++) {
        this._removeLink(selectedNodes[i], selectedNodes[j]);
      }
    }
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

  getNeighborsId(nodeId) {
    return this.links
      .filter((link) => link.source == nodeId || link.target == nodeId)
      .map((link) => {
        if (link.source == nodeId) return link.target;
        return link.source;
      })
  }


  maximumMatchingAnswer = [];


  dfs(nodeId, mark, parent, length) {
    if (mark[nodeId] === true) return;
    mark[nodeId] = true;

    if (length > this.maximumMatchingAnswer.length) {
      this.maximumMatchingAnswer = [];
      let tmpId = nodeId;
      while (tmpId != -1) {
        this.maximumMatchingAnswer.push(tmpId);
        tmpId = parent[tmpId];
      }
    }


    for (let i of this.getNeighborsId(nodeId)) {
      if (!mark[i]) {
        parent[i] = nodeId;
        this.dfs(i, mark, parent, length + 1);
      }
    }

    mark[nodeId] = false;
  }

  findMaximumMatching() {
    for (let i = 0; i < this.nodes.length; i++) {
      let mark = new Array(MAXIMUM_NUMBER_OF_NODES);
      let parent = new Array(MAXIMUM_NUMBER_OF_NODES);
      let id = this.nodes[i].id;
      parent[id] = -1;
      this.dfs(id, mark, parent, 1);
    }

    console.log(this.maximumMatchingAnswer)
  }

}