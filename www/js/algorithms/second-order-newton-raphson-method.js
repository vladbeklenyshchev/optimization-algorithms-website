"use strict";

//test - calcSecondOrderNewtonRaphsonMethod([0.5, 1], 0.1, 0.15, 10)
var calcSecondOrderNewtonRaphsonMethod = function(x0, eps1, eps2, M) {
	var x = [x0];
	var k = 0;
	// matrix of gradient values [[ , ], [ , ]]
	var grad_values = [];
	var t = 0.0;
	var d = [];
	var previousIteration = false;
	
	do{
		grad_values[k] = grad_f_x(x[k][0], x[k][1]);
		debugger;
		if (norm1(grad_values[k][0], grad_values[k][1]) < eps1) {
			return x[k];
		} else if(k >= M) {
			return x[k];
		} else {
			debugger;
			var invH = getInvertableHessian(hessian[0], hessian[1]);

			if (applySylvesterCriterionForQuadraticMatrix(invH[0], invH[1])) {
				d.push(mulMatrixOnVector(invH,
						[-grad_values[k][0], -grad_values[k][1]]
					)
				);
				//t = 1.0;
				//x.push([x[k][0] + t * d[k][0], x[k][1] + t * d[k][1]]);
			} else {
				d.push([-grad_values[k][0], -grad_values[k][1]]);
				//t = getAppropriateStepValue(x[k][0], x[k][1], k);
				//x.push([x[k][0] + t * d[k][0], x[k][1] + t * d[k][1]]);
			}
			t = getAppropriateStepValue(x[k][0], x[k][1], k);
			x.push([x[k][0] + t * d[k][0], x[k][1] + t * d[k][1]]);
		}
		debugger;
		k = k + 1;
		if (norm2(x[k-1],x[k]) < eps2 && abs(f_x(x[k][0], x[k][1]) - 
			f_x(x[k-1][0], x[k-1][1]) < eps2)) {
			if (previousIteration) {
				return x[k];
			} else {
				previousIteration = true;
			}
		}
	} while(true);
};