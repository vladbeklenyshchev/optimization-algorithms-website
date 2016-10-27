var abs = function(a) {
	if(a < 0) {
		return -a;
	} else {
		return a;
	}
};

var f_x = function(x1, x2) {
	return 2*x1*x1 + x1*x2 + x2*x2;
};

var grad_f_x = function(x1, x2) {
	arr_grad = [0,0];
	arr_grad[0] = 4 * x1 + x2;
	arr_grad[1] = x1 + 2 * x2;
	return arr_grad;
};

// norm1 for one vector with two elements
var norm1 = function(item1, item2) {
	return Math.sqrt(item1*item1 + item2*item2);
};

// norm2 for two vectors with two elements
var norm2 = function(x1, x2) {
	return Math.sqrt((x2[0] - x1[0]) * (x2[0] - x1[0]) + 
		(x2[1] - x1[1]) * (x2[1] - x1[1]));
};