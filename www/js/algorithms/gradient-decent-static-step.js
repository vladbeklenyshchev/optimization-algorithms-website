//test - calcGradientDescentWithStaticStep([0.5, 1], 0.1, 0.15, 10)
var calcGradientDescentWithStaticStep = function(x0, eps1, eps2, M){
	// x0 - vector
	var x = [x0];
	
	k = -1
	grad_val = [0,0];// calculate
	next_item = [0, 0];
	func_x = [];
	tk = 1.0; // static!
	
	do{
		k = k + 1;
		item = x[k]
		grad_val = grad_f_x(item[0], item[1]);
		console.log("grad_val = " + grad_val)
		if(norm1(grad_val[0], grad_val[1]) < eps1){
			return x[k]
		}
		else if(k>=M){
			return x[k]
		}
		do{
			next_item[0] = item[0] - tk * grad_val[0];
			next_item[1] = item[1] - tk * grad_val[1];
			console.log("x = " + x)
			tk = tk / 2.0;
			func_x[k] = f_x(item[0], item[1])
			func_x[k+1] = f_x(next_item[0], next_item[1])
			
		}while(func_x[k+1] >= func_x[k])
		item = next_item
		x.push(item)
		console.log(norm2(x[k],x[k+1]))
		console.log(func_x[k+1] - func_x[k])
	}while(norm2(x[k],x[k+1])>=eps2 
	|| abs(func_x[k+1] - func_x[k])>=eps2)

	return x[k]
}