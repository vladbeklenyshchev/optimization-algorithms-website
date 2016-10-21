var main = function(x, eps1, eps2, M){
	var resulted_arr_x = [x];
	k = -1
	grad_fxk = [0,0];// calculate
	tk = 1; // static!
	do
	{
		k = k + 1;

		grad_fxk = grad_f_x(x[0],x[1]);

		if(grad_fxk < eps1 || k>=M){
			return x;
		}
		
		x_next[0] = x[0] - tk * grad_fxk[0];
		x_next[1] = x[1] - tk * grad_fxk[1];

	}while(abs(arr_x[k+1] - arr_x[k])<eps2 
		&& abs(func_x[k+1] - func_x[k])<eps1)
}

var abs = function(a){
	if(a < 0)
		return -a;
	else return a;
}

var norm = function(x1,x2){
	return Math.sqrt((x2[0] - x1[0]) * (x2[0] - x1[0])
		+ (x2[1] - x1[1]) * (x2[1] - x1[1]));
}

var f_x = function(x1, x2){
	return 2*x1*x1 + x1*x2 + x2*x2;
}

var grad_f_x = function(x1, x2){
	arr_grad = [0,0]
	arr_grad[0] = 4 * x1 + x2;
	arr_grad[1] = x1 + 2 * x2;
	return arr_grad;
}