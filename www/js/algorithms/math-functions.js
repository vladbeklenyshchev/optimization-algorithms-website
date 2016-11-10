"use strict";

var abs = function(a) {
	if(a < 0) {
		return -a;
	} else {
		return a;
	}
};

var f_x = function(x1, x2) {
	return 2 * x1 * x1 + x1 * x2 + x2 * x2;
};

var grad_f_x = function(x1, x2) {
	arr_grad = [0,0];
	arr_grad[0] = 4 * x1 + x2;
	arr_grad[1] = x1 + 2 * x2;
	return arr_grad;
};

var hessian = [[4, 1], [1, 2]];

var invertable_hessian = function(x1, x2) {
	var h = [[0, 0], [0, 0]];
	var oneDividedByDet = 1 / (x1[0] * x2[1] - x1[1] * x2[0]);
	h[0][0] = oneDividedByDet * x2[1];
	h[0][1] = - oneDividedByDet * x1[1];
	h[1][0] = - oneDividedByDet * x2[0];
	h[1][1] = oneDividedByDet * x1[0];
	return h;
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

var matrixArray = function (rows,columns) {
  var arr = new Array();
  for(var i=0; i<columns; i++ ){
	arr[i] = new Array();
    for(var j=0; j<rows; j++) {
      arr[i][j] = i+j+1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
    }
  }
  return arr;
}

function getAppropriateStepValue(x, y, k) {
    return (Math.pow(4*x + y, 2) + Math.pow(x + 2*y, 2) ) / 
    (4*Math.pow(4*x + y, 2) + 2*(4*x + y)*(x + 2*y) + 
    	2* Math.pow(x + 2*y, 2));
};