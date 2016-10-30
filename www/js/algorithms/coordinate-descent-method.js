//test - calcCoordinateDescent([0.5, 1], 0.1, 0.15, 10)
var calcCoordinateDescent = function(x0, eps1, eps2, M) {
	'use strict';

	var x = [x0];
	var k = 0;
	var grad_val = [0,0];
	var item = x0;
	var next_item = [0,0];
	var func_x = [0];
	var tk = 0.5;
	var n = 2;
	grad_val = grad_f_x(item[0], item[1]);

	for (var j = 0; j < M; j++) {
		for (var k = 0; k <= n - 1; k++) {

			grad_val = grad_f_x(item[0], item[1]);
			
			if (norm1(grad_val[0], grad_val[1]) < eps1) {
				return x[k];
			}

			do {
				next_item = [0,0]
				next_item = action(item, grad_val, tk);
				
				condition = ((f_x(next_item[0], next_item[1]) - f_x(item[0], item[1])) > 0);
				if(condition) {
					tk = tk / 2.0;
				}

			} while (condition);

			item = next_item;
			x.push(item);

			if (norm2(x[k-1],x[k]) > eps2) {
				return x[k];
			}
		}
	}

	return x[k];
};

// perform next iteration for the method
var action = function(x, grad, alpha) {
	var y = [0, 0];
	y[0] = x[0] - alpha * grad[0];
	y[1] = x[1] - alpha * grad[1];
	return y;
};