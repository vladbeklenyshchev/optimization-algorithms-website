//test - calcGradientDescentWithStaticStep([0.5, 1], 0.1, 0.15, 10)
 var calcGradientDescentWithStaticStep = function(x0, eps1, eps2, M){
	var x = [x0];
	k = 0
	grad_val = [0,0];
	item = x0
	next_item = [0,0];
	func_x = [];
	tk = 0.5;
	do{
		grad_val = grad_f_x(item[0], item[1]);
		if(norm1(grad_val[0], grad_val[1]) < eps1){
			return x[k];
		}
		else if(k>=M){
			return x[k];
		}

		do{
			// to resolve proble with asinc - create new function
			next_item = action(item, grad_val, tk);
			condition = ((f_x(next_item[0], next_item[1]) - f_x(item[0], item[1])) > 0)
			if(condition){
				tk = tk / 2.0;
			}
		}while(condition)
		item = next_item
		x.push(item)
		k = k + 1;
	}while(norm2(x[k-1],x[k])>eps2)

	return x[k]
};

var action = function(x, grad, alpha){
	var y = [0,0]
	y[0] = x[0] - alpha * grad[0];
	y[1] = x[1] - alpha * grad[1];
	return y;
};
