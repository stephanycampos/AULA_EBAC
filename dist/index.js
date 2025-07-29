"use strict";

var alunos = [{
  nome: 'João',
  nota: 7.5
}, {
  nome: 'Maria',
  nota: 8.0
}, {
  nome: 'Pedro',
  nota: 4.5
}, {
  nome: 'Ana',
  nota: 6.0
}, {
  nome: 'Lucas',
  nota: 5.5
}];
var filtrarAprovados = function filtrarAprovados(alunos) {
  return alunos.filter(function (_ref) {
    var nota = _ref.nota;
    return nota >= 6;
  });
};
var aprovados = filtrarAprovados(alunos);
console.log("Alunos aprovados:");
aprovados.forEach(function (_ref2) {
  var nome = _ref2.nome,
    nota = _ref2.nota;
  console.log("".concat(nome, " - Nota: ").concat(nota));
});