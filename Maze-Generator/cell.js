function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  this.visited = false;
  this.highlight = function(){
    var x = this.i*w;
    var y = this.j*w;
    noStroke();
    fill(0,0,255,100);
    rect(x,y,w,w);
  }
  this.checkNeighbors = function(){
    var neighbours = [];
    var top     = grid[index(i,    j-1)];
    var right   = grid[index(i+1,  j)];
    var left    = grid[index(i-1,  j)];
    var bottom  = grid[index(i,    j+1)];
    if (top && !top.visited){
      neighbours.push(top);
    }
    if (right && !right.visited){
      neighbours.push(right);
    }
    if (left && !left.visited){
      neighbours.push(left);
    }
    if (bottom && !bottom.visited){
      neighbours.push(bottom);
    }
    if (neighbours.length > 0){
      var r = floor(random(0, neighbours.length));
      return neighbours[r];
    } else {
      return undefined;
    }
  }
  this.show = function() {
    var x = this.i * w;
    var y = this.j * w;
    stroke(255);
    if (this.walls[0]) {
      line(x, y, x + w, y);
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }
    if (this.walls[3]) {
      line(x, y + w, x, y);
    }
    if (this.visited){
      noStroke();
      fill(255,0,255,100);
      rect(x, y, w, w);
    }
  }
}
