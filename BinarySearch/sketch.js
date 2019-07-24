var tree;
function setup() {
	createCanvas(600,400);
	background(51);
	tree = new Tree();
	for (var i = 0; i < 15; i++){
		tree.addValue(floor(random(0,10000)));
	}
	console.log(tree);
	tree.traverse();
}
