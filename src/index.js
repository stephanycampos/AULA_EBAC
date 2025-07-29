const alunos = [
  { nome: 'João', nota: 7.5 },
  { nome: 'Maria', nota: 8.0 },
  { nome: 'Pedro', nota: 4.5 },
  { nome: 'Ana', nota: 6.0 },
  { nome: 'Lucas', nota: 5.5 }
];

const filtrarAprovados = (alunos) => alunos.filter(({ nota }) => nota >= 6);

const aprovados = filtrarAprovados(alunos);

console.log("Alunos aprovados:");
aprovados.forEach(({ nome, nota }) => {
  console.log(`${nome} - Nota: ${nota}`);
});
