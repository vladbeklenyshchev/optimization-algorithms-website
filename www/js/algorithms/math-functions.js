"use strict";

// coefficients for function
var a, b, c;

function init(arg1 = 2, arg2 = 1, arg3 = 1) {
	a = arg1;
	b = arg2;
	c = arg3;
}

var abs = function(a) {
	if(a < 0) {
		return -a;
	} else {
		return a;
	}
};

var f_x = function(x1, x2) {
	return a * x1 * x1 + b * x1 * x2 + c * x2 * x2;
};

var grad_f_x = function(x1, x2) {
	var arr_grad = [0,0];
	arr_grad[0] = 2 * a * x1 + b * x2;
	arr_grad[1] = b * x1 + 2 * c * x2;
	return arr_grad;
};

var hessian = [[2 * a, b], [b, 2 * c]];

var quadraticDeterminant = function(x1, x2) {
	return (x1[0] * x2[1] - x1[1] * x2[0]);
};

var getInvertableMatrix = function(x1, x2) {
	var matrix = [[0, 0], [0, 0]];
	var oneDividedByDet = 1 / quadraticDeterminant(x1, x2);
	matrix[0][0] = oneDividedByDet * x2[1];
	matrix[0][1] = - oneDividedByDet * x1[1];
	matrix[1][0] = - oneDividedByDet * x2[0];
	matrix[1][1] = oneDividedByDet * x1[0];
	return matrix;
};

var applySylvesterCriterionForQuadraticMatrix = function(x1, x2) {
	// use short cycle
	return x1[0] > 0 && quadraticDeterminant(x1, x2) > 0;
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

var mulMatrixOnVector = function (M, v) {
	var resultVector = [];
	for (var i = 0; i < 2; i++) {
		resultVector[i] = M[i][0] * v[0] + M[i][1] * v[1];
	}
	return resultVector;
};

function getAppropriateStepValue(x, y, k) {
    return (Math.pow(grad_f_x(x, y)[0], 2) + Math.pow(grad_f_x(x, y)[1], 2) ) / 
    (2 * a *Math.pow(grad_f_x(x, y)[0], 2) 
    	+ 2 * grad_f_x(x, y)[0] * grad_f_x(x, y)[1] + 
    	2 * c * Math.pow(grad_f_x(x, y)[1], 2));
};