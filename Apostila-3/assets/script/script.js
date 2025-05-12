// Exercicio 1
/* function gerarID(valorInicial) {
  let contador = valorInicial;
  return function () {
    contador++;
    return contador;
  };
}

const gerar = gerarID(67);

console.log("seu id sequencial:", gerar());
console.log("seu id sequencial:", gerar());
console.log("seu id sequencial:", gerar());
console.log("seu id sequencial:", gerar());
console.log("seu id sequencial:", gerar());
 */

// Exercicio 2
/* function calcularTempoRestante(dataFinal) {
  dataFinal = new Date(dataFinal);
  const agora = new Date();
  const diff = dataFinal - agora;
  if (diff <= 0) {
    return { expirou: true, mensagem: "O prazo expirou" };
  }
  const segundos = Math.floor((diff / 1000) % 60);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  return { dias, horas, minutos, segundos, expirou: false };
}
console.log(calcularTempoRestante("2025-12-31"));
 */

//Exercicio 3

/* function somaArray() {
  let soma = 0;
  let lista = [];

  for (let i = 1; i <= 4; i++) {
    let numUser = Number(prompt(`Digite o ${i}° número`));
    soma += numUser;
    lista.push(numUser);
  }
  console.log(lista);
  console.log("Sua soma é de =", soma);
}

somaArray();
 */

/* function somaArray(numeros) {
  let soma = 0;
  // Itera pelo array e acumula a soma dos elementos
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}

const valores = [10, 20, 30, 40];
console.log("Soma dos elementos:", somaArray(valores)); */

//Exercicio 4
/* function inverterString(str) {
  if (str === "") return "";

  return str.slice(-1) + inverterString(str.slice(0, -1));
}

console.log("String invertida:", inverterString("TaskManager"));
 */

//Exercicio 4

/* function filtrarPorPrioridade(tarefas, prioridade) {
  return tarefas.filter((tarefa) => tarefa.prioridade === prioridade);
}

const listaTarefas = [
  { id: 1, titulo: "Estudar JS", prioridade: "alta", concluida: false },
  { id: 2, titulo: "Revisar CSS", prioridade: "média", concluida: true },
  { id: 3, titulo: "Praticar HTML", prioridade: "alta", concluida: false },
];

console.log(
  "Tarefas de prioridade alta:",
  filtrarPorPrioridade(listaTarefas, "alta")
);
 */
