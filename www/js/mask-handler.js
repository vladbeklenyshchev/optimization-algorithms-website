// use it or onSubmit = false
$('#inputFunctionForm').keydown(function(event){
	if(event.keyCode == 13) {
		// remove the focus from the input field when entered
		$(function () {
			$('input').blur();
		});
	    event.preventDefault();
	    return false;
	}
});

$(function() {
	$("#inputFunction").mask("9 x^2 + 9 x y + 9 y^2", {
		completed: function() { 
			var sInput = this.val();
			var slpitedString = sInput.split(' + ');
			var a = +slpitedString[0][0];
			var b = +slpitedString[1][0];
			var c = +slpitedString[2][0];
			if (a && b && c) {
				initArgs(a, b, c);
			} else {
				// function by default
				initArgs(2, 1, 1);
			}
		}
	});
});