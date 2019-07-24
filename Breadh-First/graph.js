function Graph() {
  this.nodes = [];
  this.graph = {};
}
Graph.prototype.addNode = function(n){
  // Node into array
  this.nodes.push(n);
  var title = n.value;
  // Node into "hash"
  this.graph[title] = n;
}
Graph.prototype.getNode = function(actor){
  var n = this.graph[actor];
  return n
}
