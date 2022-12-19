// 1) 705.484.450-52 2) 070.987.720-03

/*
7   0   5   4   8   4   4   5   0                      //  070.987.720-03
x   x   x   x   x   x   x   x   x
10  9   8   7   6   5   4   3   2
_   _   _   _   _   _   _   _   _   
70+ 0+  40+ 28+ 48+ 20+ 16+ 15+ 0

Para achar o primeiro digito pós traço: 11 - (soma1CPF1 % 11)

Se o resultado da conta for maior que 9, o digítio é zero.


Para achar o primeiro digito pós traço: 11 - (soma2CPF1 % 11)

Se o resultado da conta for maior que 9, o digítio é zero.


7   0   5   4   8   4   4   5   0   5
x   x   x   x   x   x   x   x   x   x
11  10  9   8   7   6   5   4   3   2
_   _   _   _   _   _   _   _   _   _
77+ 0+  45+ 32+ 56+ 24+ 20+ 20+ 0+  10

*/

// const soma1CPF1 = 70 + 0 + 40 + 28 + 48 + 20 + 16 + 15 + 0;
// const primeiroDigito = 11 - (soma1CPF1 % 11) <= 9 ? 11 - (soma1CPF1 % 11) : 0;
// console.log(primeiroDigito);

// const soma2CPF1 = 77 + 0 + 45 + 32 + 56 + 24 + 20 + 20 + 0 + 10;
// const segundoDigito = 11 - (soma2CPF1 % 11) <= 9 ? 11 - (soma2CPF1 % 11) : 0;
// console.log(segundoDigito);

const cpf1 = "705.484.450-52";
const cpf2 = "070.987.720-03";
const cpf3 = "111.111.111-11";

const validaCPF = (cpf) => {
  const cpfSomenteDigitos = cpf.replace(/\D+/g, "");

  if (
    cpfSomenteDigitos.split("")[0].repeat(cpfSomenteDigitos.length) ===
    cpfSomenteDigitos
  )
    return false;

  const arrCPF = cpfSomenteDigitos.split("");

  arrCPF.pop();
  arrCPF.pop();

  let contador1 = 10;
  const primeiroSomatorio = arrCPF.reduce((acc, val) => {
    let digitoComMultiplicador = contador1 * Number(val);
    contador1--;

    return acc + digitoComMultiplicador;
  }, 0);

  const primeiroDigito =
    11 - (primeiroSomatorio % 11) <= 9 ? 11 - (primeiroSomatorio % 11) : 0;

  arrCPF.push(String(primeiroDigito));

  let contador2 = 11;
  const segundoSomatorio = arrCPF.reduce((acc, val) => {
    let digitoComMultiplicador = contador2 * Number(val);
    contador2--;

    return acc + digitoComMultiplicador;
  }, 0);

  const segundoDigito =
    11 - (segundoSomatorio % 11) <= 9 ? 11 - (segundoSomatorio % 11) : 0;

  arrCPF.push(String(segundoDigito));
  arrCPF.splice(3, 0, ".");
  arrCPF.splice(7, 0, ".");
  arrCPF.splice(11, 0, "-");

  return arrCPF.join("") === cpf;
};

console.log(validaCPF(cpf1));
console.log(validaCPF(cpf2));
console.log(validaCPF(cpf3));
