//test - calcGradientDescentWithStaticStep([0.5, 1], 0.1, 0.15, 10)
 var calcGradientDescentWithStaticStep = function(x0, eps1, eps2, M){
	"use strict";
	// x0 - vector
	var x = [x0];
	k = 0
	grad_val = [0,0];
	item = x0
	next_item = [0,0];
	func_x = [];
	tk = 0.5;
	do{
		grad_val = grad_f_x(item[0], item[1]);
		console.log("grad_val = " + grad_val)
		if(norm1(grad_val[0], grad_val[1]) < eps1){
			return x[k]
		}
		else if(k>=M){
			return x[k]
		}
		console.log("x_k111 = " + item)

		do{
			console.log("x_k = " + item)
			var tmp = item
			// item становится next_item раньше времени!!!!
			next_item[0] = item[0] - tk * grad_val[0];
			console.log("x_k_whaaaat = " + tmp)
			next_item[1] = item[1] - tk * grad_val[1];
			item = tmp
			console.log("tk = " + tk)
			console.log("x_k = " + item)
			console.log("x_k+1 = " + next_item)
			console.log("f_k = " + (f_x(item[0], item[1])))
			console.log("f_k+1 = " + (f_x(next_item[0], next_item[1])))
			condition = ((f_x(next_item[0], next_item[1]) - f_x(item[0], item[1])) > 0)
			if(condition){
				tk = tk / 2.0;
			}
		}while(condition)
		item = next_item
		x.push(item)
		/*console.log(norm2(x[k],x[k+1]))
		console.log(func_x[k+1] - func_x[k])*/
		k = k + 1;
	}while(norm2(x[k-1],x[k])>eps2)

	return x[k]
}