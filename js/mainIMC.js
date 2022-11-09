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