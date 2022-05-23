function ex1(){
    var a = Number(window.prompt("Informe um número: "));
    var b = Number(window.prompt("Informe outro número: "));

    if(a>b){
        document.getElementById("resultado").innerHTML = "Menor: " + b + " Maior: " + a;
    } else {
        document.getElementById("resultado").innerHTML = "Menor: " + a + " Maior: " + b;
    }
}

function ex2(){
    var gen = window.prompt("Informe o genêro (M) ou (F): ");
    var peso = window.prompt("Informe o peso: ");
    var alt = window.prompt("Informe a altura: ");
    var pesoI;

    if(gen=='M'){
        pesoI = (72.7*alt)-58;

        document.getElementById("resultado").innerHTML = "Peso ideal = " + pesoI + "kg";
    }
    else{
        pesoI = (62.1*alt)-44.7;

        document.getElementById("resultado").innerHTML = "Peso ideal = " + pesoI + "kg";
    } 
}

function ex3(){
    var num1 = Number(window.prompt("Informe um número: "));
    var num2 = Number(window.prompt("Informe outro número: "));
    var num3 = Number(window.prompt("Informe outro número: "));

    if(num1 < num2 && num1 < num3){
        document.getElementById("resultado").innerHTML = "O menor número é: " + num1;
    }
    else if(num2 < num1 && num2 < num3){
        document.getElementById("resultado").innerHTML = "O menor número é: " + num2;
    }
    else {
        document.getElementById("resultado").innerHTML = "O menor número é: " + num3;
    }
}

function ex4(){
    var num = Number(window.prompt("Informe um número: "));

    if(num>0){
        if(num % 2 == 0){
            document.getElementById("resultado").innerHTML = "O número é par!";
        }
        else{
            document.getElementById("resultado").innerHTML = "O número é ímpar!";
         }
}
    else{
        document.getElementById("resultado").innerHTML = "O número é negativo, portanto seu valor absoluto é: " + num*-1;
    }
}

function ex5(){
    var num = Number(window.prompt("Informe um número: "));

    if(num % 2 == 0 && num % 3 == 0 ){
        document.getElementById("resultado").innerHTML = "O número é divisível por 2 e por 3!";
    }
    else{
        document.getElementById("resultado").innerHTML = "O número não é divisível por 2 e por 3!";
    }
}

function ex6(){
    var num = Number(window.prompt("Informe um número: "));

    if(num % 2 == 0){
        document.getElementById("resultado").innerHTML = "O número é divisível por 2!";
    }
    if(num % 7 == 0){
        document.getElementById("resultado").innerHTML = "O número é divisível por 7!";
    }
    if(num % 2 != 0 && num % 7 != 0){
        document.getElementById("resultado").innerHTML = "O número não é divisível por 2 nem por 7!";
    }
}

function ex7(){
    var num = Number(window.prompt("Informe um número: "));
    var resultado;

    switch(num){
        case 1: resultado = "Domingo"
        break;

        case 2: resultado = "Segunda-feira"
        break;

        case 3: resultado = "Terça-feira"
        break;

        case 4: resultado = "Quarta-feira"
        break;

        case 5: resultado = "Quinta-feira"
        break;

        case 6: resultado = "Sexta-feira"
        break;

        case 7: resultado = "Sábado"
        break;
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function ex8(){
    soma = 0;
    var i; 
    for(i=0; i<21; i++){
        if(i % 2 == 0){
            soma += i;
        }
    }

    document.getElementById("resultado").innerHTML = "A soma dos números pares entre 1 e 20 é igual a: " + soma;
}

function ex9(){
    var num = Number(window.prompt("Informe um número: "));
    var i;

        document.getElementById("resultado").innerHTML = `
        ${num} x 1 = ${num*1},
        ${num} x 2 = ${num*2},
        ${num} x 3 = ${num*3},
        ${num} x 4 = ${num*4},
        ${num} x 5 = ${num*5},
        ${num} x 6 = ${num*6},
        ${num} x 7 = ${num*7},
        ${num} x 8 = ${num*8},
        ${num} x 9 = ${num*9},
        ${num} x 10 = ${num*10}`;
    
}

function ex10(){
    var num = Number(window.prompt("Informe um número: "));
    var soma = num;
    var i;

    for(i=num; i>1; i--){
        soma *= i-1;
    }

    document.getElementById("resultado").innerHTML = `O fatorial de ${num} é ${soma}!`;
}