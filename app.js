// author : julian pepe onzima

var Calculator = function (outputId, containerId) {
    this.output = document.getElementById(outputId);
    this.container = document.getElementById(containerId);
    console.log(this.container);
    this.buttonNames = [
        "0","1","2","3","4","5","6","7","8","9",".","+","-","*","/","=" 
    ];
    this.createButtons(this.buttonNames);
}

Calculator.prototype.createButtons = function (buttonNames) {
    for (var i = 0; i < buttonNames.length; i++) {
        let calculatorButton = document.createElement("button");
        calculatorButton.innerText = buttonNames[i];
        this.container.appendChild(calculatorButton);
        let index = i;
        calculatorButton.addEventListener("click", () => {
            console.log(index);
            this.output.innerHTML = buttonNames[index];
        });
    }
}

var tCalculator = new Calculator("output" , "calculatorContainer");

