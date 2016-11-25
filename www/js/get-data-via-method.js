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