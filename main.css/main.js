
function addToInput(val) {
	document.getElementById('result').value += val;
}

function clearInput() {
	document.getElementById('result').value = '';
}

function calculate() {
	var result = eval(document.getElementById('result').value);
	document.getElementById('result').value = result;
}
