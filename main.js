"use strict";

var alunos = [{
  nome: 'Pedro',
  nota: 10
}, {
  nome: 'Isis',
  nota: 10
}, {
  nome: 'Juliano',
  nota: 5
}, {
  nome: 'Julia',
  nota: 3
}, {
  nome: 'Bryan',
  nota: 7
}];
var alunosAcimaDaMedia = function alunosAcimaDaMedia(alunos) {
  return alunos.nota >= 6;
};
var resultado = alunos.filter(alunosAcimaDaMedia);
console.log(resultado);