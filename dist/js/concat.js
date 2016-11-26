$(function() {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.size() == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});
'use strict';
function getDataViaMethod(formName, modalName){
	var form = document.getElementById(formName);
	var elements = form.getElementsByClassName('form-control');
	var precision = 5;
	var values = [];
	// get double values from elements and convert them into Number
	for (var i = 0; i < 5; i++) {
		values[i] = +elements[i].value;
	}

	// get calculated values
	var result = 0.0;
	var sMethodNumber = +modalName[modalName.length - 1];
	switch(sMethodNumber) {
		case 1:
			result = methodGradientDescentWithStaticStep([+elements[0].value,
			 +elements[1].value], +elements[2].value, +elements[3].value, 
			 +elements[4].value);
			break;
		case 2:
			result = methodSteepestGradient([+elements[0].value,
			 +elements[1].value], +elements[2].value, +elements[3].value, 
			 +elements[4].value);
			break;
		case 3:
			result = methodCoordinateDescent([+elements[0].value,
			 +elements[1].value], +elements[2].value, +elements[3].value, 
			 +elements[4].value);
			break;
		case 4:
			result = methodGaussSeidel([+elements[0].value,
			 +elements[1].value], +elements[2].value, +elements[3].value, 
			 +elements[4].value);
			break;
		case 5:
			result = methodNonlinearConjugateGradient([+elements[0].value,
			 +elements[1].value], +elements[2].value, +elements[3].value, 
			 +elements[4].value);
			break;
		case 6:
			result = methodDevidsonFletcherPowell([+elements[0].value,
			 +elements[1].value], +elements[2].value, +elements[3].value, 
			 +elements[4].value);
			break;
		case 7:
			// where is it? :)
			alert('Извините, но этот функционал ' +
		 'разработчики не предоставили :(');
			break;
		case 8:
			result = methodSecondOrderNewtonMethod([+elements[0].value,
			 +elements[1].value], +elements[2].value, +elements[3].value, 
			 +elements[4].value);
			break;
		case 9:
			result = methodSecondOrderNewtonRaphsonMethod([+elements[0].value,
			 +elements[1].value], +elements[2].value, +elements[3].value, 
			 +elements[4].value);
			break;
		case 0:
			result = methodSecondOrderMarquardtMethod([+elements[0].value,
			 +elements[1].value], +elements[2].value, +elements[3].value);
			break;
		default:
			break;
	}
	
	// output 
	var modalWindow = document.getElementById(modalName); 
	var outputs = modalWindow.getElementsByClassName('form-control'); 
	result[0] = result[0].toFixed(precision);
	result[1] = result[1].toFixed(precision);
	outputs[0].value = result;
	outputs[1].value = (f_x(result[0], result[1])).toFixed(precision); 
}
'use strict';
function generateKatexFormula() {
	//METHOD_1
	var formula = 'x^0, 0 < \\epsilon < 1, \\epsilon_1 > 0, \\epsilon_2 > 0, M - ';
	katex.render(formula, document.getElementById('method1_step_1_1'));

	formula = '\\nabla{f(x)} = \\begin{pmatrix}' +  
	  '\\frac{\\partial f(x)}{\\partial x_1}, ..., \\frac{\\partial f(x)}{\\partial x_n}' +
	  ' \\end{pmatrix}^T';
	katex.render(formula, document.getElementById('method1_step_1_2'));

	formula = 'k = 0';
	katex.render(formula, document.getElementById('method1_step_2'));

	formula = '\\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method1_step_3'));

	formula = 'x^{*} = x^k';
	katex.render(formula, document.getElementById('method1_step_4_1'));

	formula = 'k \\ge M';
	katex.render(formula, document.getElementById('method1_step_5'));

	formula = 'x^{*} = x^k';
	katex.render(formula, document.getElementById('method1_step_5_1'));

	formula = 't_k';
	katex.render(formula, document.getElementById('method1_step_6'));

	formula = 'x^{k+1} = x^k - t^k \\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method1_step_7'));

	formula = 'f(x^{k+1}) - f(x^k) < 0';
	katex.render(formula, document.getElementById('method1_step_8'));

	formula = 't_k = \\frac{t_k}{2}';
	katex.render(formula, document.getElementById('method1_step_8_2'));

	formula = '\\begin{Vmatrix} x^{k+1} - x^k \\end{Vmatrix} < \\epsilon _2, ' +
	  '\\begin{vmatrix} f(x^{k+1}) - f(x^k) \\end{vmatrix} < \\epsilon _2';
	katex.render(formula, document.getElementById('method1_step_9'));

	formula = 'k';
	katex.render(formula, document.getElementById('method1_step_9_1_1'));

	formula = 'k = k - 1';
	katex.render(formula, document.getElementById('method1_step_9_1_2'));

	formula = 'x^{*} = x^{k+1}';
	katex.render(formula, document.getElementById('method1_step_9_1_3'));

	formula = 'k = k + 1';
	katex.render(formula, document.getElementById('method1_step_9_2'));
	//METHOD_2
	formula = 'x^0, \\epsilon_1 > 0, \\epsilon_2 > 0,';
	katex.render(formula, document.getElementById('method2_step_1_1'));

	formula = '\\nabla{f(x)} = \\begin{pmatrix}' +  
	  '\\frac{\\partial f(x)}{\\partial x_1}, ..., \\frac{\\partial f(x)}{\\partial x_n}' +
	  ' \\end{pmatrix}^T';
	katex.render(formula, document.getElementById('method2_step_1_2'));

	formula = 'k = 0';
	katex.render(formula, document.getElementById('method2_step_2'));

	formula = '\\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method2_step_3'));

	formula = '\\begin{Vmatrix}\\nabla{f(x^k)}\\end{Vmatrix} < \\epsilon _1';
	katex.render(formula, document.getElementById('method2_step_4'));

	formula = 'x^{*} = x^k';
	katex.render(formula, document.getElementById('method2_step_4_1'));

	formula = 'k \\ge M';
	katex.render(formula, document.getElementById('method2_step_5'));

	formula = 'x^{*} = x^k';
	katex.render(formula, document.getElementById('method2_step_5_1'));

	formula = 't^{*}_k';
	katex.render(formula, document.getElementById('method2_step_6_1'));

	formula = '\\phi(t _k) = f(x^k - t _k \\nabla{f(x^k)}) -> \\min _{t _k}';
	katex.render(formula, document.getElementById('method2_step_6_2'));

	formula = 'x^{k+1} = x^k - t^k \\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method2_step_7'));

	formula = '\\begin{Vmatrix} x^{k+1} - x^k \\end{Vmatrix} < \\epsilon _2, ' +
	  '\\begin{vmatrix} f(x^{k+1}) - f(x^k) \\end{vmatrix} < \\epsilon _2';
	katex.render(formula, document.getElementById('method2_step_8'));

	formula = 'k';
	katex.render(formula, document.getElementById('method2_step_8_1_1'));

	formula = 'k = k - 1';
	katex.render(formula, document.getElementById('method2_step_8_1_2'));

	formula = 'x^{*} = x^{k+1}';
	katex.render(formula, document.getElementById('method2_step_8_1_3'));

	formula = 'k = k + 1';
	katex.render(formula, document.getElementById('method2_step_8_2'));
	//METHOD_3
	formula = 'x^0, \\epsilon > 0, \\epsilon_1 > 0, \\epsilon_2 > 0,';
	katex.render(formula, document.getElementById('method3_step_1_1'));

	formula = '\\nabla{f(x)}';
	katex.render(formula, document.getElementById('method3_step_1_2'));

	formula = 'j = 0';
	katex.render(formula, document.getElementById('method3_step_2'));

	formula = 'j \\ge M';
	katex.render(formula, document.getElementById('method3_step_3'));

	formula = 'j \\ge M';
	katex.render(formula, document.getElementById('method3_step_3_1_1'));

	formula = 'x^{*} = x^{jk}';
	katex.render(formula, document.getElementById('method3_step_3_1'));

	formula = 'k = 0';
	katex.render(formula, document.getElementById('method3_step_4'));

	formula = 'k \\le n-1';
	katex.render(formula, document.getElementById('method3_step_5'));

	formula = 'k \\le n-1';
	katex.render(formula, document.getElementById('method3_step_5_1'));

	formula = 'k  = n';
	katex.render(formula, document.getElementById('method3_step_5_2_1'));

	formula = 'j = j + 1';
	katex.render(formula, document.getElementById('method3_step_5_2_2'));

	formula = 'x^{j + 1, k} = x^{jn}';
	katex.render(formula, document.getElementById('method3_step_5_2_3'));

	formula = '\\nabla{f(x^{jk})}';
	katex.render(formula, document.getElementById('method3_step_6'));

	formula = '\\begin{Vmatrix} \\nabla{f(x^{jk})} \\end{Vmatrix} < \\epsilon _1';
	katex.render(formula, document.getElementById('method3_step_7'));

	formula = 'x^{*} = x^{jk}';
	katex.render(formula, document.getElementById('method3_step_7_1'));

	formula = 't_k';
	katex.render(formula, document.getElementById('method3_step_8'));

	formula = 'x^{jk+1}: x^{jk+1} = x^{jk} - t_k \\begin{pmatrix} \\frac{\\partial f(x)}{\\partial x_{k+1}} \\end{pmatrix}_{x = x^{jk}} \\cdot e_{k+1}';
	katex.render(formula, document.getElementById('method3_step_9'));

	formula = 'f(x^{jk+1}) - f(x^{jk}) < 0';
	katex.render(formula, document.getElementById('method3_step_10_1'));

	formula = 'f(x^{jk+1}) - f(x^{jk}) < - \\epsilon \\begin{Vmatrix} \\nabla{f(x^{jk})} \\end{Vmatrix}^2';
	katex.render(formula, document.getElementById('method3_step_10_2'));

	formula = 't_k = \\frac{t_k}{2}';
	katex.render(formula, document.getElementById('method3_step_10_2_2'));

	formula = '\\begin{Vmatrix} x^{jk+1} - x^{jk} \\end{Vmatrix} < \\epsilon _2 ,' + 
	'\\begin{vmatrix} f(x^{jk+1}) - f(x^{jk}) \\end{vmatrix} < \\epsilon _2';
	katex.render(formula, document.getElementById('method3_step_11'));

	formula = 'j';
	katex.render(formula, document.getElementById('method3_step_11_1_1'));

	formula = 'j - 1';
	katex.render(formula, document.getElementById('method3_step_11_1_2'));

	formula = 'x^{jk+1}';
	katex.render(formula, document.getElementById('method3_step_11_1_3'));

	formula = 'x^{*} = x^{jk+1}';
	katex.render(formula, document.getElementById('method3_step_11_1_4'));

	formula = 'k = k + 1';
	katex.render(formula, document.getElementById('method3_step_11_2'));
	//METHOD_4
	formula = 'x^0, \\epsilon_1 > 0, \\epsilon_2 > 0,';
	katex.render(formula, document.getElementById('method4_step_1_1'));

	formula = '\\nabla{f(x)}';
	katex.render(formula, document.getElementById('method4_step_1_2'));

	formula = 'j = 0';
	katex.render(formula, document.getElementById('method4_step_2'));

	formula = 'j \\ge M';
	katex.render(formula, document.getElementById('method4_step_3'));

	formula = 'j \\ge M';
	katex.render(formula, document.getElementById('method4_step_3_1_1'));

	formula = 'x^{*} = x^{jk}';
	katex.render(formula, document.getElementById('method4_step_3_1_2'));

	formula = 'j < M';
	katex.render(formula, document.getElementById('method4_step_3_2'));

	formula = 'k = 0';
	katex.render(formula, document.getElementById('method4_step_4'));

	formula = 'k \\le n - 1';
	katex.render(formula, document.getElementById('method4_step_5'));

	formula = 'k \\le n - 1';
	katex.render(formula, document.getElementById('method4_step_5_1'));

	formula = 'k = n';
	katex.render(formula, document.getElementById('method4_step_5_2_1'));

	formula = 'j = j + 1';
	katex.render(formula, document.getElementById('method4_step_5_2_2'));

	formula = 'x^{j+1, k} = x^{jn}';
	katex.render(formula, document.getElementById('method4_step_5_2_3'));

	formula = '\\nabla{f(x^{jk})}';
	katex.render(formula, document.getElementById('method4_step_6'));

	formula = '\\begin{Vmatrix} \\nabla{f(x^{jk})} \\end{Vmatrix} < \\epsilon _1';
	katex.render(formula, document.getElementById('method4_step_7'));

	formula = 'x^{*} = x^{jk}';
	katex.render(formula, document.getElementById('method4_step_7_1'));

	formula = 't^{*}_k';
	katex.render(formula, document.getElementById('method4_step_8_0'));

	formula = '\\phi(t _k) = f\\begin{pmatrix}x^{jk} - t _k \\begin{pmatrix} \\frac{\\partial f(x)}{\\partial x_{k+1}} \\end{pmatrix}_{x = x^{jk}} . e_{k+1} \\end{pmatrix}-> \\min _{t _k}';
	katex.render(formula, document.getElementById('method4_step_8'));

	formula = 'x^{jk+1}: x^{jk+1} = x^{jk} - t*_k \\begin{pmatrix} \\frac{\\partial f(x)}{\\partial x_{k+1}} \\end{pmatrix}_{x = x^{jk}} \\cdot e_{k+1}';
	katex.render(formula, document.getElementById('method4_step_9'));

	formula = '\\begin{Vmatrix} x^{jk+1} - x^{jk} \\end{Vmatrix} < \\epsilon _2 ,' + 
	'\\begin{vmatrix} f(x^{jk+1}) - f(x^{jk}) \\end{vmatrix} < \\epsilon _2';
	katex.render(formula, document.getElementById('method4_step_10'));

	formula = 'j';
	katex.render(formula, document.getElementById('method4_step_10_1_1'));

	formula = 'j - 1';
	katex.render(formula, document.getElementById('method4_step_10_1_2'));

	formula = 'x^{*} = x^{jk + 1}';
	katex.render(formula, document.getElementById('method4_step_10_1_3'));

	formula = 'k = k + 1';
	katex.render(formula, document.getElementById('method4_step_10_2'));
	//METHOD_5
	formula = 'x^0, \\epsilon_1 > 0, \\epsilon_2 > 0, M - ';
	katex.render(formula, document.getElementById('method5_step_1_1'));

	formula = '\\nabla{f(x)}';
	katex.render(formula, document.getElementById('method5_step_1_2'));

	formula = 'k = 0';
	katex.render(formula, document.getElementById('method5_step_2'));

	formula = '\\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method5_step_3'));

	formula = '\\begin{Vmatrix} \\nabla{f(x^k)} \\end{Vmatrix} < \\epsilon _1';
	katex.render(formula, document.getElementById('method5_step_4'));

	formula = 'x^{*} = x^{k}';
	katex.render(formula, document.getElementById('method5_step_4_1'));

	formula = 'k \\ge M';
	katex.render(formula, document.getElementById('method5_step_5'));

	formula = 'x^{*} = x^{k}';
	katex.render(formula, document.getElementById('method5_step_5_1'));

	formula = 'k = 0';
	katex.render(formula, document.getElementById('method5_step_5_2_1'));

	formula = 'k \\ge 1';
	katex.render(formula, document.getElementById('method5_step_5_2_2'));

	formula = 'd^0 = -\\nabla{f(x^0)}';
	katex.render(formula, document.getElementById('method5_step_6'));

	formula = '\\beta_{k-1} = \\frac{\\begin{Vmatrix} \\nabla{f(x^k)} \\end{Vmatrix}^2}{\\begin{Vmatrix} \\nabla{f(x^{k-1})} \\end{Vmatrix}^2}' + 
	'\\begin{bmatrix} \\beta_{k-1} = \\Bigg\\{ \\begin{matrix} \\frac{( \\nabla{f(x^k)}, \\begin{bmatrix} \\nabla{f(x^k)} - \\nabla{f(x^{k-1})} \\end{bmatrix} )}{ \\begin{Vmatrix} \\nabla{f(x^{k-1})} \\end{Vmatrix}^2 }, k \\notin J \\\\ 0, k \\in J \\end{matrix} \\end{bmatrix}';
	katex.render(formula, document.getElementById('method5_step_7'));

	formula = 'd^k = -\\nabla{f(x^k)} + \\beta_{k-1}d^{k-1}';
	katex.render(formula, document.getElementById('method5_step_8'));

	formula = 't^{*}_k';
	katex.render(formula, document.getElementById('method5_step_9_0'));

	formula = '\\phi(t _k) = f\\begin{pmatrix}x^k + t_k d^k \\end{pmatrix}-> \\min_{t_k}';
	katex.render(formula, document.getElementById('method5_step_9'));

	formula = 'x^{k+1} = x^k + t*_k d^k';
	katex.render(formula, document.getElementById('method5_step_10'));

	formula = '\\begin{Vmatrix} x^{k+1} - x^{k} \\end{Vmatrix} < \\epsilon _2 ,' + 
	'\\begin{vmatrix} f(x^{k+1}) - f(x^{k}) \\end{vmatrix} < \\epsilon _2';
	katex.render(formula, document.getElementById('method5_step_11'));

	formula = 'k';
	katex.render(formula, document.getElementById('method5_step_11_1_1'));

	formula = 'k - 1';
	katex.render(formula, document.getElementById('method5_step_11_1_2'));

	formula = 'x^{*} = x^{k + 1}';
	katex.render(formula, document.getElementById('method5_step_11_1_3'));

	formula = 'k = k + 1';
	katex.render(formula, document.getElementById('method5_step_11_2'));
	//METHOD_6
	formula = 'x^0, \\epsilon_1 > 0, \\epsilon_2 > 0, M - ';
	katex.render(formula, document.getElementById('method6_step_1_1'));

	formula = '\\nabla{f(x)}';
	katex.render(formula, document.getElementById('method6_step_1_2'));

	formula = 'k = 0, A^0 = E';
	katex.render(formula, document.getElementById('method6_step_2'));

	formula = '\\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method6_step_3'));

	formula = '\\begin{Vmatrix} \\nabla{f(x^k)} \\end{Vmatrix} < \\epsilon _1';
	katex.render(formula, document.getElementById('method6_step_4'));

	formula = 'x^{*} = x^{k}';
	katex.render(formula, document.getElementById('method6_step_4_1'));

	formula = 'k \\ge M';
	katex.render(formula, document.getElementById('method6_step_5'));

	formula = 'x^{*} = x^{k}';
	katex.render(formula, document.getElementById('method6_step_5_1'));

	formula = 'k = 0';
	katex.render(formula, document.getElementById('method6_step_5_2_1'));

	formula = 'k \\ge 1';
	katex.render(formula, document.getElementById('method6_step_5_2_2'));

	formula = '\\Delta g^k = \\nabla{f(x^{k+1})} - \\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method6_step_6'));

	formula = '\\Delta x^k = x^{k+1} - x^k';
	katex.render(formula, document.getElementById('method6_step_7'));

	formula = 'A^k _c = \\frac{\\Delta x^k(\\Delta x^k)^T}{(\\Delta x^k)^T \\Delta g^k} - \\frac{A^k \\Delta g^k (\\Delta g^k)^T A^k}{(\\Delta g^k)^T A^k \\Delta g^k}';
	katex.render(formula, document.getElementById('method6_step_8'));

	formula = 'A^{k+1} = A^k + A^k _c';
	katex.render(formula, document.getElementById('method6_step_9'));

	formula = 'd^k = -A^k \\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method6_step_10'));

	formula = 't^{*}_k';
	katex.render(formula, document.getElementById('method6_step_11_0'));

	formula = '\\phi(t _k) = f\\begin{pmatrix}x^k + t_k A^k \\nabla{f(x^k)} \\end{pmatrix}-> \\min_{t_k}';
	katex.render(formula, document.getElementById('method6_step_11'));

	formula = 'x^{k+1} = x^k - t*_k A^k \\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method6_step_12'));

	formula = '\\begin{Vmatrix} x^{k+1} - x^{k} \\end{Vmatrix} < \\epsilon _2 ,' + 
	'\\begin{vmatrix} f(x^{k+1}) - f(x^{k}) \\end{vmatrix} < \\epsilon _2';
	katex.render(formula, document.getElementById('method6_step_13'));

	formula = 'k';
	katex.render(formula, document.getElementById('method6_step_13_1_1'));

	formula = 'k - 1';
	katex.render(formula, document.getElementById('method6_step_13_1_2'));

	formula = 'x^{*} = x^{k+1}';
	katex.render(formula, document.getElementById('method6_step_13_1_3'));

	formula = 'k = k + 1';
	katex.render(formula, document.getElementById('method6_step_13_2'));

	//METHOD_8
	formula = 'x^0, \\epsilon_1 > 0, \\epsilon_2 > 0, M - ';
	katex.render(formula, document.getElementById('method8_step_1_1'));

	formula = '\\nabla{f(x)}';
	katex.render(formula, document.getElementById('method8_step_1_2'));

	formula = 'H(x)';
	katex.render(formula, document.getElementById('method8_step_1_3'));

	formula = 'k = 0';
	katex.render(formula, document.getElementById('method8_step_2'));

	formula = '\\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method8_step_3'));

	formula = '\\begin{Vmatrix} \\nabla{f(x^k)} \\end{Vmatrix} \\le \\epsilon _1';
	katex.render(formula, document.getElementById('method8_step_4'));

	formula = 'x^{*} = x^{k}';
	katex.render(formula, document.getElementById('method8_step_4_1'));

	formula = 'k \\ge M';
	katex.render(formula, document.getElementById('method8_step_5'));

	formula = 'x^{*} = x^{k}';
	katex.render(formula, document.getElementById('method8_step_5_1'));

	formula = 'H(x^{k})';
	katex.render(formula, document.getElementById('method8_step_6'));

	formula = 'H^{-1}(x^{k})';
	katex.render(formula, document.getElementById('method8_step_7'));

	formula = 'H^{-1}(x^{k}) > 0';
	katex.render(formula, document.getElementById('method8_step_8'));

	formula = 'H^{-1}(x^{k}) > 0';
	katex.render(formula, document.getElementById('method8_step_8_1'));

	formula = 'd^k = -\\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method8_step_8_2'));

	formula = 'd^k = -H^{-1}(x^k) \\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method8_step_9'));

	formula = 'x^{k+1} = x^k + t_k d^k';
	katex.render(formula, document.getElementById('method8_step_10_1'));

	formula = 't_k = 1';
	katex.render(formula, document.getElementById('method8_step_10_1_1'));

	formula = 'd^k = -H^{-1}(x^k) \\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method8_step_10_2'));

	formula = 't_k';
	katex.render(formula, document.getElementById('method8_step_10_2_1'));

	formula = 'f(x^{k+1}) < f(x^k)';
	katex.render(formula, document.getElementById('method8_step_10_3'));

	formula = 'd^k = -\\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method8_step_10_4'));

	formula = '\\begin{Vmatrix} x^{k+1} - x^{k} \\end{Vmatrix} < \\epsilon _2 ,' + 
	'\\begin{vmatrix} f(x^{k+1}) - f(x^{k}) \\end{vmatrix} < \\epsilon _2';
	katex.render(formula, document.getElementById('method8_step_11'));

	formula = 'k';
	katex.render(formula, document.getElementById('method8_step_11_1_1'));

	formula = 'k = k - 1';
	katex.render(formula, document.getElementById('method8_step_11_1_2'));

	formula = 'x^{*} = x^{k+1}';
	katex.render(formula, document.getElementById('method8_step_11_1_3'));

	formula = 'k = k + 1';
	katex.render(formula, document.getElementById('method8_step_11_2'));
	//METHOD_9
	formula = 'x^0, \\epsilon_1 > 0, \\epsilon_2 > 0, M - ';
	katex.render(formula, document.getElementById('method9_step_1_1'));

	formula = '\\nabla{f(x)}';
	katex.render(formula, document.getElementById('method9_step_1_2'));

	formula = 'H(x)';
	katex.render(formula, document.getElementById('method9_step_1_3'));

	formula = 'k = 0';
	katex.render(formula, document.getElementById('method9_step_2'));

	formula = '\\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method9_step_3'));

	formula = '\\begin{Vmatrix} \\nabla{f(x^k)} \\end{Vmatrix} \\le \\epsilon _1';
	katex.render(formula, document.getElementById('method9_step_4'));

	formula = 'x^{*} = x^{k}';
	katex.render(formula, document.getElementById('method9_step_4_1'));

	formula = 'k \\ge M';
	katex.render(formula, document.getElementById('method9_step_5'));

	formula = 'x^{*} = x^{k}';
	katex.render(formula, document.getElementById('method9_step_5_1'));

	formula = 'H(x^{k})';
	katex.render(formula, document.getElementById('method9_step_6'));

	formula = 'H^{-1}(x^{k})';
	katex.render(formula, document.getElementById('method9_step_7'));

	formula = 'H^{-1}(x^{k}) > 0';
	katex.render(formula, document.getElementById('method9_step_8'));

	formula = 'd^k = -H^{-1}(x^k) \\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method9_step_8_1'));

	formula = 'd^k = -\\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method9_step_8_2'));

	formula = 'x^{k+1} = x^k + t_k d^k';
	katex.render(formula, document.getElementById('method9_step_9'));

	formula = 't^{*}_k';
	katex.render(formula, document.getElementById('method9_step_10_0'));

	formula = 'x^{k+1} = x^k + t_k d^k';
	katex.render(formula, document.getElementById('method9_step_10'));

	formula = 'x^{k+1} = x^k + t^{*}_k d^k';
	katex.render(formula, document.getElementById('method9_step_11'));

	formula = '\\begin{Vmatrix} x^{k+1} - x^{k} \\end{Vmatrix} < \\epsilon _2 ,' + 
	'\\begin{vmatrix} f(x^{k+1}) - f(x^{k}) \\end{vmatrix} < \\epsilon _2';
	katex.render(formula, document.getElementById('method9_step_12'));

	formula = 'k';
	katex.render(formula, document.getElementById('method9_step_12_1_1'));

	formula = 'k = k - 1';
	katex.render(formula, document.getElementById('method9_step_12_1_2'));

	formula = 'x^{*} = x^{k+1}';
	katex.render(formula, document.getElementById('method9_step_12_1_3'));

	formula = 'k = k + 1';
	katex.render(formula, document.getElementById('method9_step_12_2'));
	//METHOD_10
	formula = 'x^0, \\epsilon_1 > 0, M - ';
	katex.render(formula, document.getElementById('method10_step_1_1'));

	formula = '\\nabla{f(x)}';
	katex.render(formula, document.getElementById('method10_step_1_2'));

	formula = 'H(x)';
	katex.render(formula, document.getElementById('method10_step_1_3'));

	formula = 'k = 0, \\mu^{k} = \\mu^{0}';
	katex.render(formula, document.getElementById('method10_step_2'));

	formula = '\\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method10_step_3'));

	formula = '\\begin{Vmatrix} \\nabla{f(x^k)} \\end{Vmatrix} \\le \\epsilon _1';
	katex.render(formula, document.getElementById('method10_step_4'));

	formula = 'x^{*} = x^{k}';
	katex.render(formula, document.getElementById('method10_step_4_1'));

	formula = 'k \\ge M';
	katex.render(formula, document.getElementById('method10_step_5'));

	formula = 'x^{*} = x^{k}';
	katex.render(formula, document.getElementById('method10_step_5_1'));

	formula = 'H(x^k)';
	katex.render(formula, document.getElementById('method10_step_6'));

	formula = 'H(x^k) + \\mu^k E';
	katex.render(formula, document.getElementById('method10_step_7'));

	formula = '\\Big[ H(x^k) + \\mu^k E\\Big]';
	katex.render(formula, document.getElementById('method10_step_8'));

	formula = 'd^k = - \\Big[ H(x^k) + \\mu^k E\\Big]^{-1} \\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method10_step_9'));

	formula = 'x^{k+1} = x^k - \\Big[ H(x^k) + \\mu^k E\\Big]^{-1} \\nabla{f(x^k)}';
	katex.render(formula, document.getElementById('method10_step_10'));

	formula = 'f(x^{k+1}) < f(x^{k})';
	katex.render(formula, document.getElementById('method10_step_11'));

	formula = 'k = k+1' + '\\mu^{k+1} = \\frac{\\mu^k}{2}';
	katex.render(formula, document.getElementById('method10_step_12'));

	formula = '\\mu^k = 2\\mu^k';
	katex.render(formula, document.getElementById('method10_step_13'));
}

function acceptInput() {
	var sInput = $("#inputFunction").val();
	try {
		var slpitedString = sInput.split(' + ');
		var a = +slpitedString[0][0];
		var b = +slpitedString[1][0];
		var c = +slpitedString[2][0];
		initArgs(a, b, c);
		confirm('Введена функция:\n'+ sInput);
	} catch(e) {
		alert('Введите корректные значения.');
	}
}

$(function() {
	$("#inputFunction").mask("9 x ^ 2 + 9 x y + 9 y ^ 2");
});
"use strict";

//test - methodCoordinateDescent([0.5, 1], 0.1, 0.15, 10)
var methodCoordinateDescent = function(x0, eps1, eps2, M) {
	var x = [x0];
	var k = 0;
	var grad_val = [0,0];
	var item = x0;
	var next_item = [0,0];
	var tj = 0.5;
	var tk = tj;
	var n = 2;
	var condition = false;
	var previousJIteration = false;

	// so, we are going to store values in 1D array (not 2D - matrix)
	// also we shall devide tj(step) on 2 at every JIteration
	// tk will be a "local" variable for the k cycle
	for (var j = 0; j < M; j++, tj /= 2) {
		for (var k = 0; k <= n - 1; k++) {

			grad_val = grad_f_x(item[0], item[1]);
			
			if (norm1(grad_val[0], grad_val[1]) < eps1) {
				return x[j*n+k];
			}
			
			// so, we shall reconstruct tk step every k iteration
			// with tj value
			tk = tj;

			do {
				next_item = [0,0]
				next_item = actionCoordinateDescent(item, tk, k);
				
				condition = ((f_x(next_item[0], next_item[1]) - 
					f_x(item[0], item[1])) >= 0);
				if(condition) {
					tk = tk / 2.0;
				}
				
			} while (condition);

			item = next_item;
			x.push(item);
			
			if (norm2(x[j*n+k],x[j*n+k+1]) < eps2 &&
			 abs(f_x(x[j*n+k+1][0], x[j*n+k+1][1]) 
			 	- f_x(x[j*n+k][0], x[j*n+k][1])) < eps2) {
				// we want condition executed at 2 sequential J iterations
				// for j-1 and j
				if (!previousJIteration) {
					previousJIteration = true;
				} else {
					return x[j*n+k+1];
				}
			} else {
				previousJIteration = false;
			}
		}
	}

	return x[j*n+k+1];
};

// to perform next iteration for the method
var actionCoordinateDescent  = function(x, alpha, k) {
	var e = [];
	var dif = 0;
	
	if (k === 0) {
		e = [1, 0];
		dif = grad_f_x(x[0], x[1])[0];
	} else {
		e = [0, 1];
		dif = grad_f_x(x[0], x[1])[1];
	}

	var y = [0, 0];
	y[0] = x[0] - alpha * dif * e[0];
	y[1] = x[1] - alpha * dif * e[1];
	
	return y;
};
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
"use strict";

//test - methodGradientDescentWithStaticStep([0.5, 1], 0.1, 0.15, 10)
var methodGradientDescentWithStaticStep = function(x0, eps1, eps2, M) {
	var x = [x0];
	var k = 0;
	var grad_val = [0,0];
	var item = x0;
	var next_item = [0,0];
	var tk = 0.5;
	// condition for tk division
	var condition = false;
	// do additional iteration after main condition performed
	var isNextIteration = false;

	do{
		grad_val = grad_f_x(item[0], item[1]);
		
		if (norm1(grad_val[0], grad_val[1]) < eps1) {
			return x[k];
		} else if(k>=M) {
			return x[k];
		}

		do {
			next_item = [0,0]
			next_item = actionGradientDescent(item, grad_val, tk);
			condition = ((f_x(next_item[0], next_item[1]) - f_x(item[0], item[1])) > 0);
			if(condition) {
				tk = tk / 2.0;
			}
		} while(condition);

		item = next_item;
		x.push(item);
		k = k + 1;
	
		if(norm2(x[k-1],x[k]) < eps2 && abs(f_x(next_item[0], next_item[1]) - 
		f_x(item[0], item[1])) < eps2) {
			if(isNextIteration) {
				return x[k];
			} else {
				isNextIteration = true;
			}
		}
		
	} while(true);
};

// perform next iteration for the method
var actionGradientDescent = function(x, grad, alpha) {
	var y = [0, 0];
	y[0] = x[0] - alpha * grad[0];
	y[1] = x[1] - alpha * grad[1];
	return y;
}
'use strict';
var a, b, c;

function initArgs(arg1, arg2, arg3) {
	a = arg1;
	b = arg2;
	c = arg3;
}

var abs = function(a) {
	if(a < 0) {
		return -a;
	} else {
		return a;
	}
};

var f_x = function(x1, x2) {
	return a * x1 * x1 + b * x1 * x2 + c * x2 * x2;
};

var grad_f_x = function(x1, x2) {
	var arr_grad = [0,0];
	arr_grad[0] = 2 * a * x1 + b * x2;
	arr_grad[1] = b * x1 + 2 * c * x2;
	return arr_grad;
};

var hessian = function() {
	return [[2 * a, b], [b, 2 * c]];
};

var quadraticDeterminant = function(x1, x2) {
	return (x1[0] * x2[1] - x1[1] * x2[0]);
};

var getInvertableMatrix = function(x1, x2) {
	var matrix = [[0, 0], [0, 0]];
	var oneDividedByDet = 1 / quadraticDeterminant(x1, x2);
	matrix[0][0] = oneDividedByDet * x2[1];
	matrix[0][1] = - oneDividedByDet * x1[1];
	matrix[1][0] = - oneDividedByDet * x2[0];
	matrix[1][1] = oneDividedByDet * x1[0];
	return matrix;
};

var applySylvesterCriterionForQuadraticMatrix = function(x1, x2) {
	// use short cycle
	return x1[0] > 0 && quadraticDeterminant(x1, x2) > 0;
};

// norm1 for one vector with two elements
var norm1 = function(item1, item2) {
	return Math.sqrt(item1*item1 + item2*item2);
};

// norm2 for two vectors with two elements
var norm2 = function(x1, x2) {
	return Math.sqrt((x2[0] - x1[0]) * (x2[0] - x1[0]) + 
		(x2[1] - x1[1]) * (x2[1] - x1[1]));
};

var mulMatrixOnVector = function (M, v) {
	var resultVector = [];
	for (var i = 0; i < 2; i++) {
		resultVector[i] = M[i][0] * v[0] + M[i][1] * v[1];
	}
	return resultVector;
};

function getAppropriateStepValue(x, y, k) {
    return (Math.pow(grad_f_x(x, y)[0], 2) + Math.pow(grad_f_x(x, y)[1], 2) ) / 
    (2 * a *Math.pow(grad_f_x(x, y)[0], 2) 
    	+ 2 * grad_f_x(x, y)[0] * grad_f_x(x, y)[1] + 
    	2 * c * Math.pow(grad_f_x(x, y)[1], 2));
};
"use strict";

var methodDevidsonFletcherPowell = function(x0, eps1, eps2, M) {
    // ЗАДАЕМ НАЧАЛЬНЫЕ ЗНАЧЕНИЯ
    var x0 = [x0[0], x0[1]]; 
    var e1 = eps1; //1 * obj.e1.value; // малое положительное число e1 из html-формы
    var e2 = eps2; //1 * obj.e2.value; // малое положительное число e2 из html-формы
    var m = M; //1 * obj.m.value; // предельное число итераций из html-формы
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
    var grad = [0, 0]; //градиент в точке Х0
    var grad2 = [0, 0]; //градиенты в точке Х1
    // ГЛАВНЫЙ ЦИКЛ
    while(norm >= e1 || norm_difference >= e2 || norm_difference_f_x >= e2) {
    	// ПРОВЕРЯЕМ УСЛОВИЕ k>=M
    	if (k <= m) {
    		// ВЫЧИСЛЯЕМ ГРАДИЕНТ В ТОЧКЕ Х0
			grad =  grad_f_x(x0[0], x0[1]);
	        // Вычисляем норму в точке Х0
		    norm = norm3(grad[0], grad[1]);
		    // ПРОВЕРЯЕМ УСЛОВИЕ norm1 (grad) < e1
		    if (norm < e1) {
		        return [x0[0], x0[1]];
		    } else {
		        if (k != 0) {
		        	grad2 = grad_f_x(x1[0], x1[1]);
	            	// Вычисляем норму в точке Х1
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
		        		return [x1[0], x1[1]];
					}
		        }
		        if(k == 0){
		        	d = multVectorNumber(-1, MultiplyMatrix(a1, grad));
		        } else {
		        	d = multVectorNumber(-1, MultiplyMatrix(a1, grad2));
		        }
		        // ВЫЧИСЛЯЕМ ШАГ t*
		        if(k != 0){
		        	x0 = [x1[0], x1[1]];
		        	t = - stepDevidsonFletcherPowell(x0, grad, k, d);
                    x1[0] = x0[0] + d[0] * t;
                    x1[1] = x0[1] + d[1] * t;
                    grad = grad_f_x(x1[0], x1[1]);
	            	// Вычисляем норму в точке Х0
		            norm = norm3(grad[0], grad[1]);
		        	// ПРОВЕРЯЕМ УСЛОВИЕ norm1 (grad) < e1
		        	if (norm < e1) {
		        		return [x1[0], x1[1]];
		        	}
		        } else {
		        	t = stepDevidsonFletcherPowell(x0, grad, k, d);
                    x1[0] = x0[0] - grad[0] * t;
                    x1[1] = x0[1] - grad[1] * t;
		        }
		        // ВЫЧИСЛЯЕМ НОРМУ РАЗНОСТИ КООРДИНАТ
	            norm_difference = norm2(x0, x1);
		        norm_difference_f_x = norm1(f_x(x0[0], x0[1]), f_x(x1[0], x1[1]));
		        if (norm_difference < e2 && norm_difference_f_x < e2) {
	                return [x1[0], x1[1]];
		        } else {
		        	k++;    
		        }
		    }
    	} else {
		    return [x0[0], x0[1]];	
	    }
    }
};

// Умножение матрицы на вектор
function MultiplyMatrix(A, B) {
	var A_l = A.length;
	var B_l = B.length;
	var C = [];
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
function multVectorNumber(a, A) { // a - число, A - вектор 1x2
	var m = A.length, B = [];
	for (var i = 0; i < m; i++) { 
		B[i] = [];
		B[i] = a * A[i];
	}
	return B;
}

function multMatrixNumber(a, A) { // a - число, A - матрица 2x2
	var m = A.length, n = A[0].length, B = [];
    for (var i = 0; i < m; i++) { 
    	B[i] = [];
        for (var j = 0; j < n; j++) B[i][j] = a*A[i][j];
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

function stepDevidsonFletcherPowell(x, grad, k, d){
    var step = 0; 
    if (k == 0) {
        return (4 * x[0] * grad[0] + x[0] * grad[1] + x[1] * grad[0] + 2 * x[1] * grad[1]) / (4 * Math.pow(grad[0], 2) + 2 * grad[0] * grad[1] + 2 * Math.pow(grad[1], 2));
    } else {
        return (4 * x[0] * d[0] + x[0] * d[1] + x[1] * d[0] + 2 * x[1] * d[1]) / (4 * Math.pow(d[0], 2) + 2 * d[0] * d[1] + 2 * Math.pow(d[1], 2));
    }
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
    return (delta_x[0] * delta_g[0]) + (delta_x[1] * delta_g[1]);
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
    var temp_2_2 = [0, 0];
    temp_2_2[0] = (delta_g[0] * a[0][0]) + (delta_g[1] * a[1][0]);
    temp_2_2[1] = (delta_g[0] * a[0][1]) + (delta_g[1] * a[1][1]);
    return (delta_g[0] * temp_2_2[0]) + (delta_g[1] * temp_2_2[1])
}

function norm1(x, y) {
    return Math.abs(y - x);
}

function norm3(x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
"use strict";
// МЕТОД НАИСКОРЕЙШЕГО ГРАДИЕНТНОГО СПУСКА

// Главная функция
	function methodSteepestGradient(givenX0, eps1, eps2, M)
    {
    	// ЗАДАЕМ НАЧАЛЬНЫЕ ЗНАЧЕНИЯ
    	var x0 = new Array(2);  //вектор из html-формы
        x0[0] = givenX0[0]; //1 * obj.x0.value; // первая координата x из html-формы
        x0[1] = givenX0[1]; //1 * obj.y0.value; // первая координата y из html-формы
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
"use strict";

//test - methodNonlinearConjugateGradient([0.5, 1], 0.1, 0.15, 10)
var methodNonlinearConjugateGradient = function(x0, eps1, eps2, M) {
	var x = [x0];
	var k = 0;
	// matrix of gradient values [[ , ], [ , ]]
	var grad_values = [];
	var t = 0.0;
	// also matrix
	var d = [];

	do{
		grad_values[k] = grad_f_x(x[k][0], x[k][1]);
		
		if (norm1(grad_values[k][0], grad_values[k][1]) < eps1) {
			return x[k];
		} else if(k >= M) {
			return x[k];
		} else if(k == 0){
			var result = actionNonlinearConjugateGradient(x[k],
			 grad_values[k], k, [0,0], 0);
			d.push(result[0]);
			x.push(result[1]);
		} else {
			var result = actionNonlinearConjugateGradient(x[k],
			 grad_values[k], k, d[k-1], 
				getBeta(grad_values[k], grad_values[k-1]));
			d.push(result[0]);
			x.push(result[1]);
		}
		
		k = k + 1;
	} while(norm2(x[k-1],x[k]) > eps2 || abs(f_x(x[k][0], x[k][1]) - 
		f_x(x[k-1][0], x[k-1][1])) > eps2);

	return x[k];
};

// to perform next iteration for the method
function actionNonlinearConjugateGradient(x, grad, k, dPrev, beta) {
	var dNew = [], xNew = [];
	var t = 0;
	// array for d values
	dNew = [-grad[0] + beta * dPrev[0],
		-grad[1] + beta * dPrev[1]];
	
	t = getAppropriateStepValue(x[0], x[1], k);
	// array for result x dot
	xNew = [x[0] + t * dNew[0],
		x[1] + t * dNew[1]];

	return [dNew, xNew];
};

// Fletcher–Reeves formula
var getBeta = function(gradCurr, gradPrev) {
	return (Math.pow(norm1(gradCurr[0], gradCurr[1]), 2) /
		Math.pow(norm1(gradPrev[0], gradPrev[1]), 2));
};
"use strict";

//test - methodSecondOrderMarquardtMethod([0.5, 1], 0.1, 0.15, 10)
var methodSecondOrderMarquardtMethod = function(x0, eps1, M) {
	// eps2 is not take part in this method
	var x = [x0];
	var k = 0;
	var mu = 20.0;
	// matrix of gradient values [[ , ], [ , ]]
	var grad_values = [];
	var t = 0.0;
	var d = [];
	var Ematrix = [[1, 0], [0, 1]];
	var isActionNeed = false;
	
	do {
		grad_values[k] = grad_f_x(x[k][0], x[k][1]);
		if (norm1(grad_values[k][0], grad_values[k][1]) < eps1) {
			return x[k];
		} else if(k >= M) {
			return x[k];
		}
		do {
			var newM = [[0, 0], [0, 0]];
			for (var i = 0; i < hessian().length; i++) {
				for (var j = 0; j < hessian().length; j++) {
					newM[i][j] = hessian()[i][j] + mu * Ematrix[i][j];
				}
			}

			var invNewM = getInvertableMatrix(newM[0], newM[1]);
			var resultM = mulMatrixOnVector(invNewM, grad_values[k]);
			d.push([- resultM[0], - resultM[1]]);
			x.push([x[k][0] + d[k][0], x[k][1] + d[k][1]]);
			if (f_x(x[k+1][0], x[k+1][1]) < f_x(x[k][0], x[k][1])) {
				k = k + 1;
				mu = mu / 2;
				isActionNeed = false;
			} else {
				mu = mu * 2;
				isActionNeed = true;
			}
		} while(isActionNeed);
	} while(true);
};
"use strict";

//test - calcSecondOrderNewtonMethod([0.5, 1], 0.1, 0.15, 10)
var methodSecondOrderNewtonMethod = function(x0, eps1, eps2, M) {
	var x = [x0];
	var k = 0;
	// matrix of gradient values [[ , ], [ , ]]
	var grad_values = [];
	var t = 0.0;
	var d = [];
	var previousIteration = false;
	
	do{
		grad_values[k] = grad_f_x(x[k][0], x[k][1]);
		
		if (norm1(grad_values[k][0], grad_values[k][1]) < eps1) {
			return x[k];
		} else if(k >= M) {
			return x[k];
		} else {
			var invH = getInvertableMatrix(hessian()[0], hessian()[1]);
			if (applySylvesterCriterionForQuadraticMatrix(invH[0], invH[1])) {
				d.push(mulMatrixOnVector(invH,
						[-grad_values[k][0], -grad_values[k][1]]
					)
				);
				t = 1.0;
				x.push([x[k][0] + t * d[k][0], x[k][1] + t * d[k][1]]);
			} else {
				d.push([-grad_values[k][0], -grad_values[k][1]]);
				t = getAppropriateStepValue(x[k][0], x[k][1], k);
				x.push([x[k][0] + t * d[k][0], x[k][1] + t * d[k][1]]);
			}
		}
		k = k + 1;
		if (norm2(x[k-1],x[k]) < eps2 && abs(f_x(x[k][0], x[k][1]) - 
			f_x(x[k-1][0], x[k-1][1]) < eps2)) {
			if (previousIteration) {
				return x[k];
			} else {
				previousIteration = true;
			}
		}
	} while(true);
};
"use strict";

//test - calcSecondOrderNewtonRaphsonMethod([0.5, 1], 0.1, 0.15, 10)
var methodSecondOrderNewtonRaphsonMethod = function(x0, eps1, eps2, M) {
	var x = [x0];
	var k = 0;
	// matrix of gradient values [[ , ], [ , ]]
	var grad_values = [];
	var t = 0.0;
	var d = [];
	var previousIteration = false;
	
	do{
		grad_values[k] = grad_f_x(x[k][0], x[k][1]);
		if (norm1(grad_values[k][0], grad_values[k][1]) < eps1) {
			return x[k];
		} else if(k >= M) {
			return x[k];
		} else {
			var invH = getInvertableMatrix(hessian()[0], hessian()[1]);

			if (applySylvesterCriterionForQuadraticMatrix(invH[0], invH[1])) {
				d.push(mulMatrixOnVector(invH,
						[-grad_values[k][0], -grad_values[k][1]]
					)
				);
			} else {
				d.push([-grad_values[k][0], -grad_values[k][1]]);
			}
			// only to func 2x^2 + xy + y^2 (see Panteleev, Letova book)
			t = 1; 
			x.push([x[k][0] + t * d[k][0], x[k][1] + t * d[k][1]]);
		}
		k = k + 1;
		if (norm2(x[k-1],x[k]) < eps2 && abs(f_x(x[k][0], x[k][1]) - 
			f_x(x[k-1][0], x[k-1][1]) < eps2)) {
			if (previousIteration) {
				return x[k];
			} else {
				previousIteration = true;
			}
		}
	} while(true);
};