// Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

// Definição de protótipo:
// Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções

// Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quanto tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

// Pessoa.prototype.estouAqui = "Hahahahaha";

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const pessoa1 = new Pessoa("Newton", "Lomar"); // <= Pessoa = Função construtora
const pessoa2 = new Pessoa("Ana", "Medeiros");
const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(data);
