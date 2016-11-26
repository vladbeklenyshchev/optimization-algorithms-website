$(function() {
	$("#inputFunction").mask("9 x^2 + 9 x y + 9 y^2", {
		completed: function() { 
			var sInput = this.val();
			confirm('Введена функция:\n'+ sInput);
			var slpitedString = sInput.split(' + ');
			var a = +slpitedString[0][0];
			var b = +slpitedString[1][0];
			var c = +slpitedString[2][0];
			initArgs(a, b, c);
		}
	});
});