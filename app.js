// author : julian pepe onzima

var Calculator = function (containerId) {
    this.container = document.getElementById(containerId);
    console.log(this.container);
    this.buttonNames = [
        "0","1","2","3","4","5","6","7","8","9","0","+","-","*","/","=" 
    ];
    this.createButtons(this.buttonNames);
}

Calculator.prototype.createButtons = function (buttonNames) {
    for (var i = 0; i < buttonNames.length; i++) {
        let calculatorButton = document.createElement("button");
        calculatorButton.innerText = buttonNames[i];
        this.container.appendChild(calculatorButton);
    }
}

var tCalculator = new Calculator("calculatorContainer");

