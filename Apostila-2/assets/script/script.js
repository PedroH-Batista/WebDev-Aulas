/* let tarefaConcluida = prompt("digite um valor:");

if (tarefaConcluida) {
  console.log("A tarefa está concluída!");
} else {
  console.log("sua tarefa nao esta feita");
}
 */

/* let prioridade = Number(prompt("1: baixa, 2: média, 3: alta"));

if (prioridade < 1 || prioridade > 3) {
  console.log("digite um valor valido");
} else {
  if (prioridade === 1) {
    console.log("sua prioridade é baixa");
  } else if (prioridade === 2) {
    console.log("sua prioridade é media");
  } else {
    console.log("sua prioridade é alta ");
  }
}
 */

/* maneira mais facil e mais otimizada de contruir um codigigo de alta performace  
let prioridade = Number(prompt("1: baixa, 2: média, 3: alta"));

const prioridades = {
  1: "Prioridade baixa",
  2: "Prioridade média",
  3: "Prioridade Alta",
};

console.log(prioridades[prioridade] || "digite um valor valido ");
 */
/* 
let userPriority = Number(prompt("1: baixa , 2: média , 3: alta "));

const priorityTable = {
  1: "baixa",
  2: "média",
  3: "alta",
};

console.log(priorityTable[userPriority] || "Digite um valor válido");
 */

/* let prioridade = Number(prompt("digite um valor de 1 2 ou 3"));

if (prioridade === 1) {
  console.log("prioridade baixa");
} else if (prioridade === 2) {
  console.log("prioridade média");
} else if (prioridade === 3) {
  console.log("prioridade alta");
} else {
  console.log("digite uma prioridade valida");
}

console.time(prioridade);
console.timeEnd(prioridade); */

/* let userPriority = Number(prompt("1: baixa , 2: média , 3: alta "));

const priorityTable = {
  1: "baixa",
  2: "média",
  3: "alta",
};

console.log(priorityTable[userPriority] || "Digite um valor válido");

console.time(priorityTable[userPriority]);
console.timeEnd(priorityTable[userPriority]);
 */

/* let diaSemana = new Date().getDay();

switch (diaSemana) {
  case 0:
    console.log("Domingo");

  case 1:
    console.log("segunda");
    break;

  case 2:
    console.log("terça-feria");

  case 3:
    console.log("quarta-feira");
    break;
  case 4:
    console.log("quinta-feira");
    break;

  case 5:
    console.log("sexta-feira");
    break;

  case 6:
    console.log("sabado");
    break;

  default:
    console.log("dia da semana invalido");
    break;
}
 */

/* let readNote = String(
  prompt("Digite sua nota em A,B,C,D ou E").toLocaleLowerCase()
);

switch (readNote) {
  case "a":
  case "b":
    console.log("Parabens voce foi aprovado");
    break;

  case "c":
  case "d":
    console.log("Precisa melhorar");
    break;

  case "e":
    console.log("REPROVADO");
}
 */

/* for (let i = 0; i <= 100; i += 10) {
  console.log("Contagem de 0 a 5:", i);
} */

/* let contador = 10;

while (contador >= 0) {
  console.log("contagem regressiva:", contador);
  --contador;
}
 */

/* let numero = 5;
do {
  console.log("Número é:", numero);
  numero--;
} while (numero > 0);
 */

/* let numero = 10;

while (numero < 0) {
  console.log("nao sera executado");
}

let i = 5;

while (i < 5) {
  console.log("Nunca vai rodar porque 5 não é menor que 5");
}
 */
/* lista = [];
for (let i = 27; i <= 387; i += 3) {
  lista.push(i);
}
console.log(lista.length);
 */

/* contagem = 5;

while (contagem >= 1) {
  console.log("contagem regressiva:", contagem--);
} */
/* let num = Number(prompt("Digite um numero:"));
let numDefinitivo = 1;
do {
  console.log(numDefinitivo);
  numDefinitivo++;
} while (numDefinitivo <= num);

console.log("seu numero", num);
 */

/* const senhaPadrao = "1234";

do {
  senha = String(prompt("digite a sua senha"));

  if (senha !== senhaPadrao) {
    console.log("Senha incorreta tente novamente ");
  }
} while (senha !== senhaPadrao);

console.log("boas vindas");
 */

/* let numUser = Number(prompt("Digite um número:"));

for (let i = 1; i <= numUser; i++) {
  console.log(`Número atual: ${i}`);
  if (i % 2 === 1) {
    console.log(`Números impares: ${i}`);
  }
}

for (let i = numUser; i >= 1; i--) {
  console.log(`Número atual: ${i}`);
}
 */

/* const calculadora = document.querySelector("#calculadora");

let tabuada = Number(prompt("Digite um número para realizar a sua tabuada:"));
calculadora.innerHTML = "";
for (let i = 0; i <= 10; i++) {
  calculadora.innerHTML += `<p>${tabuada}X${i}=${tabuada * i}</p>`;
}
 */

/* for (let i = 1; i <= 10; i++) {
  console.log(`Numero:${i}`);
} */

/* let i = 1;

while (i <= 10) {
  console.log(`Número:${i}`);
  i++;
}
 */

let numberUser = Number(prompt("Digite número:"));
let fatorial = 1;
for (let i = numberUser; i >= 1; i--) {
  fatorial *= i;
}
console.log(fatorial);
