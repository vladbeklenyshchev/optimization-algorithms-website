"use strict";

//test - calcSecondOrderNewtonMethod([0.5, 1], 0.1, 0.15, 10)
var calcSecondOrderNewtonMethod = function(x0, eps1, eps2, M) {
	var x = [x0];
	var k = 0;
	// matrix of gradient values [[ , ], [ , ]]
	var grad_values = [];
	var t = 0.0;
	// also matrix
	var d = [];
	var previousIteration = false;
	
	do{
		grad_values[k] = grad_f_x(x[k][0], x[k][1]);
		
		if (norm1(grad_values[k][0], grad_values[k][1]) <= eps1) {
			return x[k];
		} else if(k >= M) {
			return x[k];
		} else {
			if (applySylvesterCriterionForQuadraticMatrix(x[k][0], x[k][1])) {
				d.push([-getInvertableHessian, -grad_values[k][1]]);
			} else {
				d.push([-grad_values[k][0], -grad_values[k][1]]);
			}
			var result = action(x[k], grad_values[k], k, d[k-1], 
				getBeta(grad_values[k], grad_values[k-1]));
			d.push(result[0]);
			x.push(result[1]);
		}
		
		k = k + 1;
		if (!previousIteration) {
			previousIteration = true;
		} else {
			return x[j*n+k+1];
		}
	} while(norm2(x[k-1],x[k]) > eps2 || abs(f_x(x[k][0], x[k][1]) - 
		f_x(x[k-1][0], x[k-1][1])) > eps2 || !previousIteration);

	return x[k];
};

// to perform next iteration for the method
var action = function(x, grad, k, dPrev, beta) {
	var dNew = [], xNew = [];
	var t = 1;
	// array for d values
	dNew = [-grad[0] + beta * dPrev[0],
		-grad[1] + beta * dPrev[1]];
	
	xNew = [x[0] + t * dNew[0],
		x[1] + t * dNew[1]];

	return [dNew, xNew];
};

