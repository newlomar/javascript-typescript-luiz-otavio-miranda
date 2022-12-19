class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} ${this.sobrenome} está falando!`);
  }
}

const p1 = new Pessoa("Newton", "Lomar");
console.log(p1.falar());

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} ${this.sobrenome} está falando!`);
};

const p2 = new Pessoa2("Ana", "Beatriz");
console.log(p2.falar());
