var grad_f_x = function(x1, x2){
	arr_grad = [0,0]
	arr_grad[0] = 4 * x1 + x2;
	arr_grad[1] = x1 + 2 * x2;
	return arr_grad;
}