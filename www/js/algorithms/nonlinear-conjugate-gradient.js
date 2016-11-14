"use strict";

//test - methodNonlinearConjugateGradient([0.5, 1], 0.1, 0.15, 10)
var methodNonlinearConjugateGradient = function(x0, eps1, eps2, M) {
	var x = [x0];
	var k = 0;
	// matrix of gradient values [[ , ], [ , ]]
	var grad_values = [];
	var t = 0.0;
	// also matrix
	var d = [];

	do{
		grad_values[k] = grad_f_x(x[k][0], x[k][1]);
		
		if (norm1(grad_values[k][0], grad_values[k][1]) < eps1) {
			return x[k];
		} else if(k >= M) {
			return x[k];
		} else if(k == 0){
			var result = actionNonlinearConjugateGradient(x[k],
			 grad_values[k], k, [0,0], 0);
			d.push(result[0]);
			x.push(result[1]);
		} else {
			var result = actionNonlinearConjugateGradient(x[k],
			 grad_values[k], k, d[k-1], 
				getBeta(grad_values[k], grad_values[k-1]));
			d.push(result[0]);
			x.push(result[1]);
		}
		
		k = k + 1;
	} while(norm2(x[k-1],x[k]) > eps2 || abs(f_x(x[k][0], x[k][1]) - 
		f_x(x[k-1][0], x[k-1][1])) > eps2);

	return x[k];
};

// to perform next iteration for the method
function actionNonlinearConjugateGradient(x, grad, k, dPrev, beta) {
	var dNew = [], xNew = [];
	var t = 0;
	// array for d values
	dNew = [-grad[0] + beta * dPrev[0],
		-grad[1] + beta * dPrev[1]];
	
	t = getAppropriateStepValue(x[0], x[1], k);
	// array for result x dot
	xNew = [x[0] + t * dNew[0],
		x[1] + t * dNew[1]];

	return [dNew, xNew];
};

// Fletcher–Reeves formula
var getBeta = function(gradCurr, gradPrev) {
	return (Math.pow(norm1(gradCurr[0], gradCurr[1]), 2) /
		Math.pow(norm1(gradPrev[0], gradPrev[1]), 2));
};