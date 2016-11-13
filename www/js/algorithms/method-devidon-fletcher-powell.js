// ALGORITHM
// МЕТОД ДЭВИДОНА-ФЛЕТЧЕРА-ПАУЭЛЛА

// Главная функция
function method_6(obj)
        {
            // ЗАДАЕМ НАЧАЛЬНЫЕ ЗНАЧЕНИЯ
    	    var x0 = new Array(2);  //вектор из html-формы
            x0[0] = 0.5; //1 * obj.x0.value; // первая координата x из html-формы
        	x0[1] = 1; //1 * obj.y0.value; // первая координата y из html-формы
    		var e1 = 0.1; //1 * obj.e1.value; // малое положительное число e1 из html-формы
    		var e2 = 0.15; //1 * obj.e2.value; // малое положительное число e2 из html-формы
    		var m = 10; //1 * obj.m.value; // предельное число итераций из html-формы
    		var k = 0; // Номер итерации внутри цикла
			var a = [[1, 0], [0, 1]]; // Единичная начальная матрица А
			var a1 = [[1, 0], [0, 1]]; // Новая матрица А, которая вычисляется страшной формулой
			var a_new = [[0, 0], [0, 0]]; // Новая матрица А = а + а1
			var d = [0, 0]; // Направление
			var delta_g = [0, 0]; 
			var delta_x = [0, 0];
			var t = 0; // шаг
            var x1 = [0, 0]; 
    	    // Дополнительные переменные
    	    var norm = 100;
    	    var norm_difference = 100;
    	    var norm_difference_f_x = 100;
            var result = [0, 0];
            var result_function = 0;
            var grad = [0, 0]; //градиент в точке Х0
            var grad2 = [0, 0]; //градиенты в точке Х1
            // ГЛАВНЫЙ ЦИКЛ
    	    while(norm >= e1 || norm_difference >= e2 || norm_difference_f_x >= e2) {
    		    // ПРОВЕРЯЕМ УСЛОВИЕ k>=M
    		    if (k <= m) {
    				// ВЫЧИСЛЯЕМ ГРАДИЕНТ В ТОЧКЕ Х0
					grad = [0, 0];  //градиенты в точке Х0
	            	grad = grad_f_x(x0[0], x0[1]);
	            	// Вычисляем норму в точке Х0
		            norm = 0;
		        	norm = norm3(grad[0], grad[1]);
		        	// ПРОВЕРЯЕМ УСЛОВИЕ norm1 (grad) < e1
		        	if (norm < e1) {
		                result = [0, 0];
		        		result[0] = x0[0];
		        		result[1] = x0[1];
		                result_function = 0;
		        		result_function = f_x(result[0], result[1]);
		        		return result;
		        	} else {
		        		if (k != 0) {
		        			grad2 = [0, 0];  //градиенты в точке Х1
	            			grad2 = grad_f_x(x1[0], x1[1]);
	            			// Вычисляем норму в точке Х1
					        norm = 0;
					        norm = norm3(grad2[0], grad2[1]);
					        // ПРОВЕРЯЕМ УСЛОВИЕ norm1 (grad) < e1
					        if (norm > e1) {
					        	delta_g[0] = grad2[0] - grad[0];
					        	delta_g[1] = grad2[1] - grad[1];
					        	delta_x[0] = x1[0] - x0[0];
					        	delta_x[1] = x1[1] - x0[1];
					        	// ВЫЧИСЛЕНИЕ A_NEW
					        	var temp_1 = minuend_1(delta_x);
					        	var temp_2 = minuend_2(delta_x, delta_g);
					        	var temp_3 = subtrahend_1(a, delta_g);
					        	var temp_4 = subtrahend_2(a, delta_g);
					        	var temp_5 = multMatrixNumber(temp_4, temp_1);
					        	var temp_6 = multMatrixNumber(temp_2, temp_3);
					        	var temp_7 = temp_2 * temp_4;
					        	var temp_8 = differenceMatrix(temp_5, temp_6);
					        	a_new[0][0] = temp_8[0][0] / temp_7;
					        	a_new[0][1] = temp_8[0][1] / temp_7;
					        	a_new[1][0] = temp_8[1][0] / temp_7;
					        	a_new[1][1] = temp_8[1][1] / temp_7;
					        	a1 = [[0, 0], [0, 0]];
					        	a1[0][0] = a[0][0] + a_new[0][0];
					        	a1[0][1] = a[0][1] + a_new[0][1];
					        	a1[1][0] = a[1][0] + a_new[1][0];
					        	a1[1][1] = a[1][1] + a_new[1][1];
					        } else{
					        	result = [0, 0];
		        				result[0] = x1[0];
		        				result[1] = x1[1];
	                        	result_function = 0;
		        				result_function = f_x(result[0], result[1]);
		        				return result;
					        }
		        		}
		        		// ВЫЧИСЛЯЕМ d
		        		if(k == 0){
		        			d = multMatrixNumber(-1, MultiplyMatrix(a1, grad));
		        		} else {
		        			d = multMatrixNumber(-1, MultiplyMatrix(a1, grad2));
		        		}
		        		// ВЫЧИСЛЯЕМ ШАГ t*
		        		if(k != 0){
		        			x0 = [0, 0];
		        			x0[0] = x1[0];
		        			x0[1] = x1[1];
		        			t = - step(x0, grad, k, d);
		        			x1 = [0, 0];
                        	x1[0] = x0[0] + d[0] * t;
                        	x1[1] = x0[1] + d[1] * t;
                        	grad = [0, 0];  //градиенты в точке Х0
	            			grad = grad_f_x(x1[0], x1[1]);
	            			// Вычисляем норму в точке Х0
		            		norm = 0;
		        			norm = norm3(grad[0], grad[1]);
		        			// ПРОВЕРЯЕМ УСЛОВИЕ norm1 (grad) < e1
		        			if (norm < e1) {
		                		result = [0, 0];
		        				result[0] = x1[0];
		        				result[1] = x1[1];
		                		result_function = 0;
		        				result_function = f_x(result[0], result[1]);
		        				return result;
		        			}
		        		} else {
		        			t = step(x0, grad, k, d);
		        			x1 = [0, 0];
                        	x1[0] = x0[0] - grad[0] * t;
                        	x1[1] = x0[1] - grad[1] * t;
		        		}
		        		// ВЫЧИСЛЯЕМ НОРМУ РАЗНОСТИ КООРДИНАТ
	                    norm_difference = 0;
		        		norm_difference = norm2(x0, x1);
		        		norm_difference_f_x = 0;
		        		norm_difference_f_x = norm1(f_x(x0[0], x0[1]), f_x(x1[0], x1[1]));
		        		if (norm_difference < e2 && norm_difference_f_x < e2) {
	                        result = [0, 0];
		        			result[0] = x1[0];
		        			result[1] = x1[1];
	                        result_function = 0;
		        			result_function = f_x(result[0], result[1]);
		        			return result;
		        		} else {
		        			k++;    
		        		}
		        	}
    			} else {
	        		result = [0, 0];
		        	result[0] = x0[0];
		        	result[1] = x0[1];
		            result_function = 0;
		        	result_function = f_x(result[0], result[1]);
		        	return result;	
	        	}
            }
            // alert("точка минимума = [" + result[1].toFixed(5)+", " + result[1].toFixed(5) +"], значение функции в этой точке " + result_function.toFixed(5));
        }

        // Умножение матрицы на вектор
		function MultiplyMatrix(A, B) {
		    var A_l = A.length,
		        B_l = B.length,
		        C = [];
		    if (A_l != B_l) return false;
		    for (var i = 0; i < B_l; i++) {
		    	C[i] = 0;
		    	for (var j = 0; j < B_l; j++) {
		    		C[i] += A[j][i] * B[j];
		    	}
		    }
		    return C;
		}

		// Умножение вектора на число
		function multMatrixNumber(a, A) { // a - число, A - вектор
			var m = A.length, B = [];
		    for (var i = 0; i < m; i++) { 
		    	B[i] = [];
		       	B[i] = a * A[i];
		     }
		    return B;
		}

		// Разность двух матриц
		function differenceMatrix(matrix_1, matrix_2){
			var difference = [[0, 0], [0, 0]];
			difference[0][0] = (matrix_1[0][0] * matrix_2[0][0]);
        	difference[0][1] = (matrix_1[0][1] * matrix_2[0][1]);
        	difference[1][0] = (matrix_1[1][0] * matrix_2[1][0]);
        	difference[1][1] = (matrix_1[1][1] * matrix_2[1][1]);
			return difference;
		}

		function step(x, grad, k, d){
            var step = 0; 
            if (k == 0) {
                step = (4 * x[0] * grad[0] +
                    x[0] * grad[1] +
                    x[1] * grad[0] +
                    2 * x[1] * grad[1]) /
                    (4 * Math.pow(grad[0], 2) +
                    2 * grad[0] * grad[1] +
                    2 * Math.pow(grad[1], 2));
            } else {
                step = (4 * x[0] * d[0] +
                    x[0] * d[1] +
                    x[1] * d[0] +
                    2 * x[1] * d[1]) /
                    (4 * Math.pow(d[0], 2) +
                    2 * d[0] * d[1] +
                    2 * Math.pow(d[1], 2));
            }
            return step;
        }

        function minuend_1(delta_x) {
        	var temp_1 = [[0, 0], [0, 0]];
        	temp_1[0][0] = (delta_x[0] * delta_x[0]);
        	temp_1[0][1] = (delta_x[0] * delta_x[1]);
        	temp_1[1][0] = (delta_x[1] * delta_x[0]);
        	temp_1[1][1] = (delta_x[1] * delta_x[1]);
        	return temp_1;
        }

        function minuend_2(delta_x, delta_g) {
        	var temp_2 = 0;
        	temp_2 = (delta_x[0] * delta_g[0]) + (delta_x[1] * delta_g[1]);
        	return temp_2;
        }

        function subtrahend_1(a, delta_g) {
        	var temp_1 = [[0, 0], [0, 0]];
        	var temp_1_1 = [0, 0];
        	var temp_1_1_1 = [[0, 0], [0, 0]];
        	temp_1_1[0] = (a[0][0] * delta_g[0]) + (a[1][0] * delta_g[1]);
        	temp_1_1[1] = (a[0][1] * delta_g[0]) + (a[1][1] * delta_g[1]);
        	temp_1_1_1[0][0] = temp_1_1[0] * delta_g[0];
        	temp_1_1_1[0][1] = temp_1_1[0] * delta_g[1];
        	temp_1_1_1[1][0] = temp_1_1[1] * delta_g[0];
        	temp_1_1_1[1][1] = temp_1_1[1] * delta_g[1];
        	temp_1[0][0] = (temp_1_1_1[0][0] * a[0][0]) + (temp_1_1_1[0][1] * a[1][0]);
        	temp_1[0][1] = (temp_1_1_1[0][0] * a[0][1]) + (temp_1_1_1[0][1] * a[1][1]);
        	temp_1[1][0] = (temp_1_1_1[1][0] * a[0][0]) + (temp_1_1_1[1][1] * a[1][0]);
        	temp_1[1][1] = (temp_1_1_1[1][0] * a[0][1]) + (temp_1_1_1[1][1] * a[1][1]);
        	return temp_1;
        }

        function subtrahend_2(a, delta_g) {
        	var temp_2 = 0;
        	var temp_2_2 = [0, 0];
        	temp_2_2[0] = (delta_g[0] * a[0][0]) + (delta_g[1] * a[1][0]);
        	temp_2_2[1] = (delta_g[0] * a[0][1]) + (delta_g[1] * a[1][1]);
        	temp_2 = (delta_g[0] * temp_2_2[0]) + (delta_g[1] * temp_2_2[1])
        	return temp_2;
        }

        function norm1(x, y)
        {
            var n = Math.abs(y - x);
            return n;
        }

        function norm3(x, y)
        {
            var n = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            return n;
        }