// ALGORITHM
// МЕТОД НАИСКОРЕЙШЕГО ГРАДИЕНТНОГО СПУСКА

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
    	var k = 0;
    	// Дополнительные переменные
    	var norm = 100;
    	var norm_difference = 100;
        var result = new Array(2);
        var result_function = 0;
        // ГЛАВНЫЙ ЦИКЛ
    	while(norm >= e1 || norm_difference >= e2)
    	{
    		// ВЫЧИСЛЯЕМ ГРАДИЕНТ В ТОЧКЕ Х0
			var grad = new Array(2); //градиент
			grad[0] = gradX(x0[0], x0[1]);  //градиенты в точке Х0
        	grad[1] = gradY(x0[0], x0[1]);
        	// Вычисляем норму в точке Х0
        	norm = norm(grad[0], grad[1]);
        	// ПРОВЕРЯЕМ УСЛОВИЕ norm (grad) < e1
        	if (norm < e1)
        	{
        		result[0] = x0[0];
        		result[1] = x0[1];
        		result_function = f(result[0], result[1]);
        		break;
        	}
        	else
        	{
	        	// ПРОВЕРЯЕМ УСЛОВИЕ k>=M
	        	if(k >= m)
	        	{
        			result[0] = x0[0];
        			result[1] = x0[1];
        			result_function = f(result[0], result[1]);
	        		break;
	        	}
	        	else
	        	{
	        		var x1 = new Array(2);
	        		var t = 0;
	        		// ВЫЧИСЛЯЕМ НАИЛУЧШУЮ ВЕЛИЧИНУ ШАГА t
	        		t = step(x0[0], x0[1], k);
	        		x1[0] = x0[0] - grad[0]*t;
	        		x1[1] = x0[1] - grad[1]*t;
	        		// ВЫЧИСЛЯЕМ НОРМУ РАЗНОСТИ КООРДИНАТ
	        		norm_difference = norm_difference(x0, x1);
	        		if (norm_difference < e2) 
	        		{
	        			result[0] = x1[0];
	        			result[1] = x1[1];
	        			result_function = f(result[0], result[1]);
	        			break;
	        		}
	        		else
	        		{
	        			k++;
	        			// ВЫЧИСЛЯЕМ ГРАДИЕНТ В ТОЧКЕ Х0
	        			x0[0] = x1[0];
	        			x0[1] = x1[1];
	        		}
        		}
    		}
        }
        alert("точка минимума = [" + result[1].toFixed(5)+", " + result[1].toFixed(5) +"], значение функции в этой точке " + result_function.toFixed(5));
    }

function f(x, y)
{
    var f = 2*x*x + x*y + y*y; // заданная квадратичная форма
    return f;
}

function gradX(x, y) // градиент по Х
{
    var gradX = 4*x + y;
    return gradX;
}

function gradY(x, y) // градиент по Y
{
    var gradY = x + 2*y;
    return gradY;
}

function norm(x, y) // норма
{ 
	var norm = Math.sqrt(x*x + y*y);
  	return norm;
} 

function step(x, y, k) // шаг
{ 
	var step = ( Math.pow((4*Math.pow(x, k) + Math.pow(y, k)), 2) 
				+ Math.pow((Math.pow(x, k) + 2*Math.pow(y, k)), 2) ) 
				/ (4*Math.pow((4*Math.pow(x,k) + Math.pow(y, k)), 2) 
				+ 2*(4*Math.pow(x, k) + Math.pow(y, k))
				*(Math.pow(x, k) + 2*Math.pow(y, k)) 
				+ 2* Math.pow((Math.pow(x, k) + 2*Math.pow(y, k)), 2));
  	return step;
}

function norm_difference(x1, x2) //норма разности координат
{
	var  norm_difference = Math.sqrt((x2[0] - x1[0]) * (x2[0] - x1[0]) + (x2[1] - x1[1]) * (x2[1] - x1[1]));
  	return norm_difference;
} 
