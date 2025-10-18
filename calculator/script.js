function getHistory() {
    return document.getElementById("history-value").innerText;
}
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}
function getOutput() {
    return document.getElementById("output-value").innerText;
}
function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    }
    else {
        document.getElementById("output-value").innerText = getformattednumber(num);
    }
}

function getformattednumber(num) {
    if (num == "") {
        return "";
    }
    var n = Number(num);
    var value = n.tolocalstring("en");
    return value;
}
function reversenumberformat(num) {
    return Number(num.replace(/,/g, ""));
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operation.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");


        }
    }
    )
}
else {
    var output = getOutput();
    var history = getHistory();
    if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
            history = history.substr(0, history.length - 1);
        }
    }
    if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
            var result = eval(history);
            printOutput(result);
            printHistory("");
        }
        else {
            history = history + this.id;
            printHistory(history);
            printOutput("");
        }
    }
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = reverseNumberFormat(getOutput());
        if (output != NaN) { // if it is a valid value
            output = output + this.id;
            printOutput(output);
        }
    });
}

