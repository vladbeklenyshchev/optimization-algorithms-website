// ALGORITHM
// МЕТОД ГАУССА-ЗЕЙДЕЛЯ

// Главная функция
function method_2(obj)
    {
    	// ЗАДАЕМ НАЧАЛЬНЫЕ ЗНАЧЕНИЯ
    	var x0 = new Array(2);  //вектор из html-формы
        x0[0] = 0.5; //1 * obj.x0.value; // первая координата x из html-формы
        x0[1] = 1; //1 * obj.y0.value; // первая координата y из html-формы
    	var e1 = 0.1; //1 * obj.e1.value; // малое положительное число e1 из html-формы
    	var e2 = 0.15; //1 * obj.e2.value; // малое положительное число e2 из html-формы
    	var m = 10; //1 * obj.m.value; // предельное число итераций из html-формы
    	var j = 0; // Номер цикла вычислений
    	var k = 0; // Номер итерации внутри цикла
    	var n = 2;
    	// Дополнительные переменные
    	var norm = 100;
    	var norm_difference = 100;
    	var norm_difference_f_x = 100;
        var result = new Array(2);
        var result_function = 0;
        // ГЛАВНЫЙ ЦИКЛ
    	while(norm >= e1 || norm_difference >= e2 || norm_difference_f_x >= e2) {
    		// ПРОВЕРЯЕМ УСЛОВИЕ j>=M
    		if (j <= m) {
    			// ПРОВЕРЯЕМ УСЛОВИЕ k<=n-1
    			if (k <= n - 1) {
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
		        		// ВЫЧИСЛЯЕМ ШАГ t*
		        		if (k == 0) {
		        			t = step1(x0[0], grad);
		        			x1 = [0, 0];
	                    	var e_1 = [1, 0];
		        			x1[0] = x0[0] - grad[0]*t*e[0];
		        			x1[1] = x0[1] - grad[1]*t*e[1];
		        		} else if (k == 1) {
		        			t = step2(x0[0], grad);
		        			x1 = [0, 0];
		                    var e_2 = [0, 1];
			        		x1[0] = x0[0] - grad[0]*t*e[0];
			        		x1[1] = x0[1] - grad[1]*t*e[1];
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
		        			// ВЫЧИСЛЯЕМ ГРАДИЕНТ В ТОЧКЕ Х0
	                        x0 = [0, 0];
		        			x0[0] = x1[0];
		        			x0[1] = x1[1];
		        		}

		        	}
    			}  else {
	        		j++;
	        		k = 0;	
	        	}
	        }	
        }
        // alert("точка минимума = [" + result[1].toFixed(5)+", " + result[1].toFixed(5) +"], значение функции в этой точке " + result_function.toFixed(5));
    }

    function step1(x, grad) { // шаг
		var step = 0;
		var fi_x = 0;
		fi_x = 2 * Math.pow((x[0] - grad[0] * step), 2) + (x[0] - grad[0] * step) * 1 + Math.pow(1, 2);
		var fi_x_po_dx = 0;
		fi_x_po_dx = 4 * (x[0] - grad[0] * step) * (- grad[0]) - grad[0];
    	step = (4 * (- grad[0]) * (- grad[0])) / (4 * x[0] * (- grad[0]) - grad[0]); // Формулу пока ещё не знаю как выразить...нужно подумать =(
  		return step;
	}

	function step2(x, grad) { // шаг
		var step = 0;
		var fi_x = 0;
		fi_x = 2 * Math.pow(x[0], 2) + x[0] * (x[1] - grad[1] * step) + Math.pow((x[1] - grad[1] * step), 2);
		var fi_x_po_dx = 0;
		fi_x_po_dx = 2 * Math.pow(grad[1], 2) * step - Math.pow(grad[1], 2);
    	step = Math.pow(grad[1], 2) / (2 * Math.pow(grad[1], 2)); // Формулу пока ещё не знаю как выразить...нужно подумать =(
  		return step;
	}