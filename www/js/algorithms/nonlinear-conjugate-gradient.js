//test - calcNonlinearConjugateGradient([0.5, 1], 0.1, 0.15, 10)
var calcNonlinearConjugateGradient = function(x0, eps1, eps2, M) {
	var x = [x0];
	var k = 0;
	var grad_values = [];
	//var item = x0;
	//var next_item = [0,0];
	//var func_x = [0];
	var t = 0.0;
	// matrix
	var d = [];
	var beta = 0.0;

	do{
		grad_values[k] = grad_f_x(x[k][0], x[k][1]);
		
		if (norm1(grad_values[k][0], grad_values[k][1]) < eps1) {
			return x[k];
		} else if(k >= M) {
			return x[k];
		} else if(k == 0){
			debugger;
			d.push(grad_f_x(-x0[0], -x0[1]));
			t = step(x0[0], x0[1], k); // 0.24
			x.push( action(x0, t, d[k]) );
		} else {
			debugger;
			beta = (Math.pow(norm1(grad_values[k][0], grad_values[k][1]), 2) /
			Math.pow(norm1(grad_values[k-1][0], grad_values[k-1][1]), 2));
			d.push(grad_f_x(- x[k][0], - x[k][1]) + beta * d[k-1]);
			t = step(x[k][0], x[k][1], k);
			x.push( action(x[k-1], t, [d[k][0].toFixed(5), d[k][1].toFixed(5)] ));
		}
		debugger;
		k = k + 1;
		// used only one stop condition
		// additional: abs(f_x(next_item[0], next_item[1]) - 
		// 	f_x(item[0], item[1])) > eps2)
	} while(norm2(x[k-1],x[k]) > eps2);

	return x[k];
};

// perform next iteration for the method
var action = function(x, t, d) {
	var y = [0, 0];
	y[0] = x[0] + t * d[0];
	y[1] = x[1] + t * d[1];
	return y;
};

function step(x, y, k) { // шаг
	var step = 0;
    step = ( Math.pow((4*Math.pow(x, k) + Math.pow(y, k)), 2) 
				+ Math.pow((Math.pow(x, k) + 2*Math.pow(y, k)), 2) ) 
				/ (4*Math.pow((4*Math.pow(x,k) + Math.pow(y, k)), 2) 
				+ 2*(4*Math.pow(x, k) + Math.pow(y, k))
				*(Math.pow(x, k) + 2*Math.pow(y, k)) 
				+ 2* Math.pow((Math.pow(x, k) + 2*Math.pow(y, k)), 2));
  	return step;
}