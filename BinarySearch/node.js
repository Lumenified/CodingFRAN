function Node(val, x, y){
	this.value = val;
	this.left = null;
	this.right = null;
	this.x = x;
	this.y = y;
}

Node.prototype.addNode = function(n){
	if (n.value < this.value){
		if (this.left == null){
			this.left = n;
			this.left.x = this.x - 50;
			this.left.y = this.y + 20;
		}
		else {
		this.left.addNode(n);
}
	}
	else if (n.value > this.value){
		if (this.right == null){
			this.right = n;
			this.right.x = this.x*1.1;
			this.right.y = this.y*1.8;
		}else {
			this.right.addNode(n);
		}
	}
}
Node.prototype.visit = function(parent){
  if (this.left != null){
  	this.left.visit(this);
	}
  console.log(this.value);
	fill(255);
	noStroke();
	textAlign(CENTER);
	text(this.value, this.x, this.y);
	stroke(255);
	noFill();
	ellipse(this.x, this.y,20,20);
	line(parent.x, parent.y, this.x, this.y);


  if (this.right != null){
  	this.right.visit(this);
  }
}
