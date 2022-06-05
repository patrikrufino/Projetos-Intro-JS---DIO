var currentNumber = document.getElementById("currentNumber");

// Cria função @increment para adicionar um número ao valor atual através de EventListener
function increment() {
    currentNumber.innerHTML = parseInt(currentNumber.innerHTML) + 1;
    disabledButtons();
}

// Cria função @decrement para subtrair um número ao valor atual através de EventListener
function decrement() {
    currentNumber.innerHTML = parseInt(currentNumber.innerHTML) - 1;
    changeColor();
    disabledButtons();
}

// Cria função @disabledButtons, que desabilita os botões de incremento e decremento, caso o valor atual seja igual a 0
function disabledButtons() {

    if (currentNumber.innerHTML < -9) {
        document.getElementById("decrement").disabled = true;
    } else {
        document.getElementById("decrement").disabled = false;
    }

    if (currentNumber.innerHTML > 9) {
        document.getElementById("increment").disabled = true;
    } else {
        document.getElementById("increment").disabled = false;
    }
}

// Cria função que muda a cor do texto para vermelho, caso ele seja negativo
function changeColor() {
    if (currentNumber.innerHTML < 0) {
        currentNumber.style.color = "red";
    }
}


