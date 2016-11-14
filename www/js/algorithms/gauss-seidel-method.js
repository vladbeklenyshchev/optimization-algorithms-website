"use strict";
// МЕТОД ГАУССА-ЗЕЙДЕЛЯ
// Главная функция
function methodGaussSeidel(givenX0, eps1, eps2, M) {
    // ЗАДАЕМ НАЧАЛЬНЫЕ ЗНАЧЕНИЯ
    var x0 = [givenX0[0], givenX0[1]]; //1 * obj.x0.value; // первая координата x из html-формы
    var e1 = eps1; //1 * obj.e1.value; // малое положительное число e1 из html-формы
    var e2 = eps2; //1 * obj.e2.value; // малое положительное число e2 из html-формы
    var m = M; //1 * obj.m.value; // предельное число итераций из html-формы
    var j = 0; // Номер цикла вычислений
    var k = 0; // Номер итерации внутри цикла
    var n = 2;
    // Дополнительные переменные
    var norm = 100;
    var norm_difference = 100;
    var norm_difference_f_x = 100;
    var result = [0, 0];
    var e = [0, 0];
    var t = 0;
    var x1 = [0, 0];
    // ГЛАВНЫЙ ЦИКЛ
    while(norm >= e1 || norm_difference >= e2 || norm_difference_f_x >= e2) {
    // ПРОВЕРЯЕМ УСЛОВИЕ j>=M
        if (j <= m) {
        // ПРОВЕРЯЕМ УСЛОВИЕ k<=n-1
            if (k <= n - 1) {
            // ВЫЧИСЛЯЕМ ГРАДИЕНТ В ТОЧКЕ Х0
                var grad = grad_f_x(x0[0], x0[1]);
                // Вычисляем норму в точке Х0
                norm = norm3(grad[0], grad[1]);
                // ПРОВЕРЯЕМ УСЛОВИЕ norm1 (grad) < e1
                if (norm < e1) {
                    return [x0[0], x0[1]];
                } else {
                // ВЫЧИСЛЯЕМ ШАГ t*
                    if (k == 0) {
                        e = [1, 0];
                        t = stepGaussSeidel(x0, grad, e);
                        x1[0] = x0[0] - grad[0] * t * e[0];
                        x1[1] = x0[1] - grad[1] * t * e[1];
                    } else if (k == 1) {
                        e = [0, 1];
                        t = stepGaussSeidel(x0, grad, e);
                        x1[0] = x0[0] - grad[0] * t * e[0];
                        x1[1] = x0[1] - grad[1] * t * e[1];
                    }
                    // ВЫЧИСЛЯЕМ НОРМУ РАЗНОСТИ КООРДИНАТ
                    norm_difference = norm2(x0, x1);
                    norm_difference_f_x = norm1(f_x(x0[0], x0[1]), f_x(x1[0], x1[1]));
                    if (norm_difference < e2 && norm_difference_f_x < e2) {
                        x0 = [x1[0], x1[1]];
                        grad = grad_f_x(x0[0], x0[1]);
                        e = [1, 0];
                        t = stepGaussSeidel(x0, grad, e);
                        x1[0] = x0[0] - grad[0] * t * e[0];
                        x1[1] = x0[1] - grad[1] * t * e[1];
                        return [x1[0], x1[1]];
                    } else {
                        k++;
                        // ВЫЧИСЛЯЕМ ГРАДИЕНТ В ТОЧКЕ Х0
                        x0 = [x1[0], x1[1]];
                    }
                }
            }  else {
                j++;
                k = 0;  
            }
        }  
    }
}
 
function stepGaussSeidel(x, grad, e){
    var step = 0;
    if (e[1] == 0) {
        return (4 * x[0] * grad[0] * e[0] + x[1] * grad[0] * e[0]) / (4 * Math.pow(grad[0], 2) * Math.pow(e[0], 2));
    } else if (e[0] == 0) {
        return (x[0] * grad[1] * e[1] + 2 * x[1] * grad[1] * e[1]) / (2 * Math.pow(grad[1], 2) * Math.pow(e[1], 2));
    }
}

function norm1(x, y){
    return Math.abs(y - x);
}

function norm3(x, y){
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}