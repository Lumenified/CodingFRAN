var data;
var graph;
function preload() {
  data = loadJSON('kevinbacon.json');
}

function setup() {
  graph = new Graph();
  noCanvas();
  //console.log(data);

  var movies = data.movies;

  for (var i = 0; i < movies.length; i++){
    var movie = movies[i].title;
    var cast = movies[i].cast;
    var movieNode = new Node(movie);
    graph.addNode(movieNode);

    for (var j = 0;j < cast.length; j++){
      var actor = cast[j];
      var actorNode = graph.getNode(actor);
      if (actorNode == undefined){
        actorNode = new Node(actor);
      }
      graph.addNode(actorNode);
      movieNode.addEdge(actorNode);
      //console.log(actor);
    }
  }
  console.log(graph);
}


function draw() {

}
