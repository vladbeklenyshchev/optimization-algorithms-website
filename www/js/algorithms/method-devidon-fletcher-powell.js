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
			var d = []; // Направление
			var delta_g = [0, 0]; 
			var delta_x = [0, 0];
			var t = 0; // шаг
            var x1 = new Array(2); 
    	    // Дополнительные переменные
    	    var norm = 100;
    	    var norm_difference = 100;
    	    var norm_difference_f_x = 100;
            var result = new Array(2);
            var result_function = 0;   
            // ГЛАВНЫЙ ЦИКЛ
    	    while(norm >= e1 || norm_difference >= e2 || norm_difference_f_x >= e2) {
    		    // ПРОВЕРЯЕМ УСЛОВИЕ k>=M
    		    if (k <= m) {
    				// ВЫЧИСЛЯЕМ ГРАДИЕНТ В ТОЧКЕ Х0
					var grad = new Array(2); //градиент
					grad = [0, 0];  //градиенты в точке Х0
	            	grad = grad_f_x(x0[0], x0[1]);
	            	// Вычисляем норму в точке Х0
		            norm = 0;
		        	norm = norm1(grad[0], grad[1]);
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
		        			var grad2 = [0, 0];  //градиенты в точке Х1
	            			grad2 = grad_f_x(x1[0], x1[1]);
	            			// Вычисляем норму в точке Х1
					        norm = 0;
					        norm = norm1(grad2[0], grad2[1]);
					        // ПРОВЕРЯЕМ УСЛОВИЕ norm1 (grad) < e1
					        if (norm < e1) {
					        	delta_g[0] = grad2[0] - grad[0];
					        	delta_g[1] = grad2[1] - grad[1];
					        	delta_x[0] = x1[0] - x0[0];
					        	delta_x[1] = x1[1] - x0[1];
					        	// !!!!!!!!!!!!!!!!!! ВЫЧИСЛЕНИЕ A_NEW
					        	a_new = [[-0.625, -0.305], [-0.305, -0.134]];
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
		        		d = multMatrixNumber(-1, MultiplyMatrix(a1, grad));
		        		// ВЫЧИСЛЯЕМ ШАГ t*
		        		x0 = [0, 0];
		        		x0[0] = x1[0];
		        		x0[1] = x1[1];
		        		t = step(x0, grad);
		        		x1 = [0, 0];
                        x1[0] = x0[0] - grad[0] * t;
                        x1[1] = x0[1] - grad[1] * t;
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

        // Умножение матриц
		function MultiplyMatrix(A, B) {
		    var rowsA = A.length, colsA = A[0].length,
		        rowsB = B.length, colsB = B[0].length,
		        C = [];
		    if (colsA != rowsB) return false;
		    for (var i = 0; i < rowsA; i++) C[i] = [];
		    for (var k = 0; k < colsB; k++) { 
		    	for (var i = 0; i < rowsA; i++) { 
		    		var t = 0;
		          	for (var j = 0; j < rowsB; j++) t += A[i][j]*B[j][k];
		          	C[i][k] = t;
		        }
		    }
		    return C;
		}

		// Умножение матрицы на число
		function multMatrixNumber(a, A) { // a - число, A - матрица (двумерный массив)
		    var m = A.length, n = A[0].length, B = [];
		    for (var i = 0; i < m; i++) { 
		    	B[i] = [];
		       	for (var j = 0; j < n; j++) B[i][j] = a*A[i][j];
		     }
		    return B;
		}

		function step(x, grad){
            var step = 0;
            step = (4 * x[0] * grad[0]  +
                    x[0] * grad[1] + 
                    x[1] * grad[0] + 
                    2 * x[1] * grad[1]) /
                    (4 * Math.Pow(grad[0], 2) + 
                    2 * grad[0] * grad[1] + 
                    2 * Math.Pow(grad[1], 2));
            return step;
        }