// ALGORITHM
// МЕТОД НАИСКОРЕЙШЕГО ГРАДИЕНТНОГО СПУСКА

// Главная функция
	function methodSteepestGradient(givenX0, eps1, eps2, M)
    {
    	// ЗАДАЕМ НАЧАЛЬНЫЕ ЗНАЧЕНИЯ
    	var x0 = new Array(2);  //вектор из html-формы
        x0[0] = givenX0[0]; //1 * obj.x0.value; // первая координата x из html-формы
        x0[1] = givenX0[0]; //1 * obj.y0.value; // первая координата y из html-формы
    	var e1 = eps1; //1 * obj.e1.value; // малое положительное число e1 из html-формы
    	var e2 = eps2; //1 * obj.e2.value; // малое положительное число e2 из html-формы
    	var m = M; //1 * obj.m.value; // предельное число итераций из html-формы
    	var k = 0;
    	// Дополнительные переменные
    	var norm = 100;
    	var norm_difference = 100;
        var result = new Array(2);
        var result_function = 0;
        // ГЛАВНЫЙ ЦИКЛ
    	while(norm >= e1 || norm_difference >= e2) {
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
	        	if(k >= m) {
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
	        		t = getAppropriateStepValue(x0[0], x0[1], k);
                    x1 = [0, 0];
	        		x1[0] = x0[0] - grad[0]*t;
	        		x1[1] = x0[1] - grad[1]*t;
	        		// ВЫЧИСЛЯЕМ НОРМУ РАЗНОСТИ КООРДИНАТ
                    norm_difference = 0;
	        		norm_difference = norm2(x0, x1);
	        		if (norm_difference < e2) {
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
        }
        // alert("точка минимума = [" + result[1].toFixed(5)+", " + result[1].toFixed(5) +"], значение функции в этой точке " + result_function.toFixed(5));
    }