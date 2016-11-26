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