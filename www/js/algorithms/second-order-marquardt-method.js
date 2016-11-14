"use strict";

//test - methodSecondOrderMarquardtMethod([0.5, 1], 0.1, 0.15, 10)
var methodSecondOrderMarquardtMethod = function(x0, eps1, eps2, M) {
	// eps2 is not take part in this method
	var x = [x0];
	var k = 0;
	var mu = 20.0;
	// matrix of gradient values [[ , ], [ , ]]
	var grad_values = [];
	var t = 0.0;
	var d = [];
	var Ematrix = [[1, 0], [0, 1]];
	var isActionNeed = false;
	
	do {
		grad_values[k] = grad_f_x(x[k][0], x[k][1]);
		if (norm1(grad_values[k][0], grad_values[k][1]) < eps1) {
			return x[k];
		} else if(k >= M) {
			return x[k];
		}
		do {
			var newM = [[0, 0], [0, 0]];
			for (var i = 0; i < hessian.length; i++) {
				for (var j = 0; j < hessian.length; j++) {
					newM[i][j] = hessian[i][j] + mu * Ematrix[i][j];
				}
			}

			var invNewM = getInvertableMatrix(newM[0], newM[1]);
			var resultM = mulMatrixOnVector(invNewM, grad_values[k]);
			d.push([- resultM[0], - resultM[1]]);
			x.push([x[k][0] + d[k][0], x[k][1] + d[k][1]]);
			if (f_x(x[k+1][0], x[k+1][1]) < f_x(x[k][0], x[k][1])) {
				k = k + 1;
				mu = mu / 2;
				isActionNeed = false;
			} else {
				mu = mu * 2;
				isActionNeed = true;
			}
		} while(isActionNeed);
	} while(true);
};