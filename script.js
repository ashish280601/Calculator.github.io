// var screen = document.getElementById("calculator-screen");
// var button = document.getElementsByClassName("button");
// var operand1= 0;
// var operand2 = null;
// var operator = null;

// // Iterating an loop for an button
// for (var i =0; i<button.length; i++){
//     //  moving an each button through arr while
//     //  having addEventListener
//     button[i].addEventListener("click",function(){
//         value = this.getAttribute("data-value");
//         if (value < "9" ||
//             value == "+"||
//             value == "-"||
//             value == "*"||
//             value == "/"||
//             value == "%"||
//             value == "+/-"||){
//                 operator = value;
//             }
//     })
    
    
// }

var buttons = document.getElementsByClassName("button");
var display = document.getElementById("calculator-screen");

// display.textContent = 0;
var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = "";
        } else if (value == "AC") {
            display.textContent = "";
        } else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        } else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1
        } else if (value == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            display.textContent += value;
        }
    });
}