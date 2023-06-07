notas = new Array(6);
notas[0] = 8.5;
notas[1] = 5.0;
notas[2] = 10.0;
notas[3] = 9.0;
notas[4] = 4.5;
notas[5] = 5.5;

document.write("Notas: " + notas[0] + ", " + notas[1] + " e " + notas[2]);
document.write(`<br>Notas: ${notas[0]}, ${notas[1]} e ${notas[2]}`);

// let teste = notas.length;
// document.write(`<br>O tamanho do Array = ${teste}`)

document.write(`<br>O tamanho do Array = ${notas.length}<br>`)

nome = "Guilherme Henrique Santos";

partes = nome.split(" ");
document.write(partes[0] + "<br>");
document.write(partes[1] + "<br>");
document.write(partes[2] + "<br>");

inteiro = partes.join(" ");
document.write(inteiro);

let nomes = new Array("Rafael", "Joaquim", "João", "Ana");
let nomesClassif = nomes.sort();
document.write("<br>" + nomesClassif);

valor = new Array(3, 2, 4, 1, 5);
i = 0;
total = 0;
while (total < 10) {
    total += valor[i];
    i++;
}
document.write("<br>Total = " + total);

// let opcao = "sim";
// while(opcao == "sim"){
//     alert("Vocês são engraçadinhos");
//     opcao = prompt("Deseja continuar?");
// }

listaNomes = new Array("Jonas", "Ana", "Ruth", "Tiago", "Marcos");
listaNomes.sort();
document.write("<ol>");
for (i in listaNomes) {
    document.write("<li>" + listaNomes[i] + "<br>");
}
document.write("</ol>");

//**********Funções***************/
resultado = eval("(10 * 20) + 2 - 8");
document.write(`<br>O resultado é = ${resultado}`);

let numero = 9;
document.write(`<br>A raiz quadrada de ${numero} é: ${Math.sqrt(numero)}`);

let num1 = 100;
let num2 = 200;
let maior = Math.max(num1, num2);
document.write(`<br>O numero maior é o: ${maior}`);

document.write("<br>O quadrado de 9 é: "+Math.pow(9,2));
document.write("<br>O cubo de 9 é: "+Math.pow(9,3));
document.write("<br>9 elevado a quatro é: "+Math.pow(9,4));

document.write("<br>A raiz cubica de 9 é: "+Math.cbrt(9,3));

let num3 = Math.random();
let arredondado = Math.round(num3);
document.write(`<br>O número ${num3} arredondado é = ${arredondado}`);

//aredondameto de numero aleatorio de 0 a 1
let num4 = Math.random()*10;
document.write(`<br>O número gerado foi: ${num4}`);

let num5 = Math.round(num4);
document.write(`<br>O número gerado foi: ${num5}`);
//

let hoje =new Date();
document.write(`<br>A data de hoje é: ${hoje}`);

document.write(`<br>${hoje.getHours()} horas. ${hoje.getMinutes()} 
minutos. e ${hoje.getSeconds()} segundos`);
document.write(`<br>${hoje.getHours()}:${hoje.getMinutes()}:${hoje.getSeconds()}`);





