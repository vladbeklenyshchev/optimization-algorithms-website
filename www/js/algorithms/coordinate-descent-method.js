//test - calcCoordinateDescent([0.5, 1], 0.1, 0.15, 10)
var calcCoordinateDescent = function(x0, eps1, eps2, M) {
	'use strict';

	var x = [x0];
	var k = 0;
	var grad_val = [0,0];
	var item = x0;
	var next_item = [0,0];
	var func_x = [0];
	var tj = 0.5;
	var tk = tj;
	var n = 2;
	var condition = false;
	var previousJIteration = false;

	// so, we are going to store values in 1D array (not 2D - matrix)
	// also we shall devide tj(step) on 2 at every JIteration
	// tk will be a "local" variable for the k cycle
	for (var j = 0; j < M; j++, tj /= 2) {
		for (var k = 0; k <= n - 1; k++) {

			grad_val = grad_f_x(item[0], item[1]);
			
			if (norm1(grad_val[0], grad_val[1]) < eps1) {
				return x[k];
			}
			
			// so, we shall reconstruct tk step every k iteration
			// with tj value
			tk = tj;

			do {
				next_item = [0,0]
				next_item = action(item, tk, k);
				
				condition = ((f_x(next_item[0], next_item[1]) - 
					f_x(item[0], item[1])) >= 0);
				if(condition) {
					tk = tk / 2.0;
				}
				
			} while (condition);

			item = next_item;
			x.push(item);
			
			// there is only one condition!
			if (norm2(x[j*n+k],x[j*n+k+1]) < eps2) {
				// we want condition executed at 2 sequential J iterations
				// for j-1 and j
				if (!previousJIteration) {
					previousJIteration = true;
				} else {
					return x[j*n+k+1];
				}
			} else {
				previousJIteration = false;
			}
		}
	}

	return x[j*n+k+1];
};

// to perform next iteration for the method
var action = function(x, alpha, k) {
	var e = [];
	var dif = 0;
	
	if (k === 0) {
		e = [1, 0];
		dif = grad_f_x(x[0], x[1])[0];
	} else {
		e = [0, 1];
		dif = grad_f_x(x[0], x[1])[1];
	}

	var y = [0, 0];
	y[0] = x[0] - alpha * dif * e[0];
	y[1] = x[1] - alpha * dif * e[1];
	
	return y;
};