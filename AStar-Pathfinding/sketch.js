var cols = 25;
var rows = 25;
var grid = new Array(cols);
var openSet = []; //this list contains the nodes that will be evaluated!
var closedSet = []; //this list contains the nodes that evaluated before!
var start;
var end;
var w, h;
var path = [];


function removeFromArray(arr, elt) {
  for (var i = arr.length; i >= 0 - 1; i--) {
    if (arr[i] == elt) {
      arr.splice(i, 1);
    }
  }
}

function heuristic(a, b) {
  // var d = dist(a.i,a.j,b.i,b.j)
  var d = abs(a.i-b.i) + abs(a.j - b.j);
  return d;
}


function setup() {
  createCanvas(400, 400);
  console.log("A*");
  w = width / cols;
  h = height / rows;
  // Maing a 2d array
  for (var i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].addNeighbours(grid);
    }
  }
  start = grid[0][0];
  end = grid[cols - 1][rows - 1];
  start.wall = false;
  end.wall = false;
  openSet.push(start); //openSet starts with start

  console.log(grid);
}


function draw() {
  if (openSet.length > 0) {
    //we can keep going
    var winner = 0;
    for (var i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[winner].f) {
        winner = i;
      }
    }
    var current = openSet[winner];
    if (current === end) {

      noLoop();

      console.log("DONE!");
    }
    removeFromArray(openSet, current);
    closedSet.push(current);
    var neighbours = current.neighbours;
    for (var i = 0; i < neighbours.length; i++) {
      var neighbour = neighbours[i];
      if (!closedSet.includes(neighbour) && !neighbour.wall) {
        var tempG = current.g + 1;
        var newPath = false;
        if (openSet.includes(neighbour)) {
          if (tempG < neighbour.g) {
            neighbour.g = tempG;
            newPath = true;
          }
        } else {
          neighbour.g = tempG;
          newPath = true;
          openSet.push(neighbour);
        }
        if (newPath) {


          neighbour.h = heuristic(neighbour, end);
          neighbour.f = neighbour.g + neighbour.h;
          neighbour.previous = current;
        }
      }
    }
  } else {
    // no solution
    console.log("No Solution!");
    noLoop();
    return;

  }
  background(255);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show(color(255));
    }
  }
  for (var i = 0; i < closedSet.length; i++) {
    closedSet[i].show(color(255, 0, 0));
  }
  for (var i = 0; i < openSet.length; i++) {
    openSet[i].show(color(0, 255, 0));
  }

  path = [];
  var temp = current;
  path.push(temp)
  while (temp.previous) {
    path.push(temp.previous);
    temp = temp.previous
  }

  for (var i = 0; i < path.length; i++) {
    //path[i].show(color(0, 0, 255));
  }
	noFill();
	stroke(255, 0, 200);
	strokeWeight(w/2);
	beginShape();
	for (var i = 0; i < path.length; i++) {
	    vertex(path[i].i*w + w/2,path[i].j*h + h/2);
	  }
	endShape();
}
