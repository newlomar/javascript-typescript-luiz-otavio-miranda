class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já ligado`);
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já desligado`);
      return;
    }

    this.ligado = false;
  }
}

class Smarthphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = true;
  }

  ligar() {
    console.log("Você alterou o método ligar");
  }

  falaOi() {
    console.log("oi");
  }
}

const t1 = new Tablet("S", true);
console.log(t1.ligado);
t1.ligar();
t1.falaOi();
