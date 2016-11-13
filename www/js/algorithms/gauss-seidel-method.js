// ALGORITHM
// МЕТОД ГАУССА-ЗЕЙДЕЛЯ

// Главная функция
		function method_4(obj)
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
            var e = new Array(2);
            e = [0, 0];
            var t = 0;
            var x1 = new Array(2);
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
		        		    // ВЫЧИСЛЯЕМ ШАГ t*
		        		    if (k == 0) {
                                e = [1, 0];
                                t = step(x0, grad, e);
		        			    x1 = [0, 0];
                                x1[0] = x0[0] - grad[0] * t * e[0];
                                x1[1] = x0[1] - grad[1] * t * e[1];
		        		    } else if (k == 1) {
                                e = [0, 1];
                                t = step(x0, grad, e_vect);
		        			    x1 = [0, 0];
                                x1[0] = x0[0] - grad[0] * t * e[0];
                                x1[1] = x0[1] - grad[1] * t * e[1];
		        		    }
		        		    // ВЫЧИСЛЯЕМ НОРМУ РАЗНОСТИ КООРДИНАТ
	                        norm_difference = 0;
		        		    norm_difference = norm2(x0, x1);
		        		    norm_difference_f_x = 0;
		        		    norm_difference_f_x = norm1(f_x(x0[0], x0[1]), f_x(x1[0], x1[1]));
		        		    if (norm_difference < e2 && norm_difference_f_x < e2) {
	                            result = [0, 0];
                                x0 = [0, 0];
                                x0[0] = x1[0];
                                x0[1] = x1[1];
                                grad = [0, 0];
                                grad = grad_f_x(x0[0], x0[1]);
                                e = [1, 0];
                                t = step(x0, grad, e);
                                x1 = [0, 0];
                                x1[0] = x0[0] - grad[0] * t * e[0];
                                x1[1] = x0[1] - grad[1] * t * e[1];
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

		function step(x, grad, e){
            var step = 0;
            if (e[1] == 0)
            {
                step = (4 * x[0] * grad[0] * e[0] +
                    x[1] * grad[0] * e[0]) /
                    (4 * Math.pow(grad[0], 2) * Math.pow(e[0], 2));
            }
            else if (e[0] == 0)
            {
                step = (x[0] * grad[1] * e[1] +
                    2 * x[1] * grad[1] * e[1]) /
                    (2 * Math.pow(grad[1], 2) * Math.pow(e[1], 2));
            }
            return step;
        }

        function norm1(x, y){
            var n = Math.abs(y - x);
            return n;
        }

        function norm3(x, y){
            var n = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            return n;
        }