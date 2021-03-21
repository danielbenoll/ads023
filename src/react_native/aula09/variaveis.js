// tipagem fraca
variavel = 10;
console.log(typeof(variavel));
variavel = true;
console.log(typeof(variavel));
variavel = 'a';
console.log(typeof(variavel));

// nomes válidos
juros = 2.56;
_condicao = false;
$mensagem = 'Olá Mundo!';

// nomes inválidos
// 1variavel, #texto;

// var possui escopo da função
var x = 10;
function f(y) {
    if (x > y) {
        var z = y;
    }

    console.log(z); // acessível em qualquer parte da função
}

// let possui escopo do bloco
let j = 10;
for (let i = 0; i < j; i++) {
    if (i % 2 == 0) {
        let k = true;
    }

    console.log(k); // inacessível pois só existe no bloco if
}

//const possui escopo do bloco e é imutável
const a; // precisa ser inicializada
console.log(a);

const b = 0;
b = 1; // não pode ser modificada
console.log(b);

const c = {
    str: 'texto',
    num: 1
};
c.str = 'outro'; // pode-se alterar as propriedades de um objeto
console.log(c);

const d = ['Item 1', 'Item 2'];
d.push('Item 3'); // pode-se alterar os elementos de um array
console.log(d);
