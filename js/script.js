function appendToResult(value) {
    var resultInput = document.getElementById("result");
    var currentValue = resultInput.value;

    if (currentValue.length < 18) {
        resultInput.value += value;
    }
}

function calculateResult() {
    var resultInput = document.getElementById("result");
    var result = eval(resultInput.value);
    
    if (result.toString().includes('.')) {
        var decimalCount = result.toString().split('.')[1].length;
        if (decimalCount > 4) {
            resultInput.value = result.toFixed(4);
        } else {
            resultInput.value = result;
        }
    } else {
        resultInput.value = result;
    }
}

function clearResult() {
    document.getElementById("result").value = "";
}