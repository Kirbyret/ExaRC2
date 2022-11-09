var edad;
var altura;
var peso;
var imc;

function Aleatorios() {
    edad = Math.random() * (99 - 18) + 18;
    edad = edad.toFixed();
    console.log(edad);
    document.getElementById('edad').value = edad;

    altura = Math.random() * (1.5 - 2.5) + 2.5;
    altura = altura.toFixed(1);
    console.log(altura);
    document.getElementById('altura').value = altura;

    peso = Math.random() * (130 - 20) + 20;
    peso = peso.toFixed();
    console.log(peso);
    document.getElementById('peso').value = peso;

}
function CalcularIMC() {

    imc=peso/(altura*altura);
    imc=imc.toFixed(1);

    document.getElementById("imc").value=imc;
    if (imc < 18.5) {

        document.getElementById('nivel').value = "Bajo de Peso";

    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('nivel').value = "Peso Saludable";

    }else if (imc >= 25.0 && imc <= 29.9) {
        document.getElementById('nivel').value = "Sobrepeso";
    }
    else if (imc >= 30.0) {
        document.getElementById('nivel').value = "Obesidad";
    }

}