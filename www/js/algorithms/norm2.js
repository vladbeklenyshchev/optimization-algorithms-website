// norm2 for two vectors with two elements
var norm2 = function(x1, x2) {
	return Math.sqrt((x2[0] - x1[0]) * (x2[0] - x1[0])+
		(x2[1] - x1[1]) * (x2[1] - x1[1]));
}