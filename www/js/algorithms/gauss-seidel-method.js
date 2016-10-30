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
    	var n = 3;
    	// Дополнительные переменные
    	var norm = 100;
    	var norm_difference = 100;
    	var norm_difference_f_x = 100;
        var result = new Array(2);
        var result_function = 0;
        // ГЛАВНЫЙ ЦИКЛ
    	while(norm >= e1 || norm_difference >= e2 || norm_difference_f_x >= e2) {
    		if (k <= n-1) {
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
		        	// ПРОВЕРЯЕМ УСЛОВИЕ k>=M
		        	if(j >= m) {
	                    result = [0, 0];
	        			result[0] = x0[0];
	        			result[1] = x0[1];
	                    result_function = 0;
	        			result_function = f_x(result[0], result[1]);
		        		return result;
		        	} else {
		        		var x1 = new Array(2);
		        		var t = 0;
		        		// ВЫЧИСЛЯЕМ НАИЛУЧШУЮ ВЕЛИЧИНУ ШАГА t
		        		t = step(x0[0], k, j);
	                    x1 = [0, 0];
		        		x1[0] = x0[0] - grad[0]*t;
		        		x1[1] = x0[1] - grad[1]*t;
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
	    		}		
	        } else {
	        	j++;
	        	k = 0;	
	        }

    		
        }
        // alert("точка минимума = [" + result[1].toFixed(5)+", " + result[1].toFixed(5) +"], значение функции в этой точке " + result_function.toFixed(5));
    }

    function step(x, k, j) { // шаг
	var step = 0;
    step = ; // Формулу пока ещё не знаю как выразить...нужно подумать =(
  	return step;
}
