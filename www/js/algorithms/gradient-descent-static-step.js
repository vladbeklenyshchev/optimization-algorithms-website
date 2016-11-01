"use strict";

//test - calcGradientDescentWithStaticStep([0.5, 1], 0.1, 0.15, 10)
var calcGradientDescentWithStaticStep = function(x0, eps1, eps2, M) {
	var x = [x0];
	var k = 0;
	var grad_val = [0,0];
	var item = x0;
	var next_item = [0,0];
	var tk = 0.5;
	// condition for tk division
	var condition = false;
	// do additional iteration after main condition performed
	var isNextIteration = false;

	do{
		grad_val = grad_f_x(item[0], item[1]);
		
		if (norm1(grad_val[0], grad_val[1]) < eps1) {
			return x[k];
		} else if(k>=M) {
			return x[k];
		}

		do {
			next_item = [0,0]
			next_item = action(item, grad_val, tk);
			condition = ((f_x(next_item[0], next_item[1]) - f_x(item[0], item[1])) > 0);
			if(condition) {
				tk = tk / 2.0;
			}
		} while(condition);

		item = next_item;
		x.push(item);
		k = k + 1;
	
		if(norm2(x[k-1],x[k]) < eps2 && abs(f_x(next_item[0], next_item[1]) - 
		f_x(item[0], item[1])) < eps2) {
			if(isNextIteration) {
				return x[k];
			} else {
				isNextIteration = true;
			}
		}
		
	} while(true);
};

// perform next iteration for the method
var action = function(x, grad, alpha) {
	var y = [0, 0];
	y[0] = x[0] - alpha * grad[0];
	y[1] = x[1] - alpha * grad[1];
	return y;
};