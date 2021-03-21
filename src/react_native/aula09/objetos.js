// objeto JS
const nome_do_objeto = { campo: valor };

const pessoa = {
    nome: 'José',
    sobrenome: 'Júnior',
    nomeCompleto: function () {
        return this.nome + " " + this.sobrenome;
    }
};
console.log(pessoa);
console.log(pessoa.nomeCompleto());

// desestruturacao do objeto JS
const { campo } = nome_do_objeto;

const { nome, sobrenome } = pessoa;
console.log(nome);
console.log(sobrenome);

// propagacao de objeto JS
const nome_do_objeto_propagado = { campo: valor };
const nome_do_objeto = { ...nome_do_objeto_propagado };
const nome_do_array = [ ...nome_do_array_propagado ];

let pessoaFisica = {
    ...pessoa, // objeto propagado para outro objeto
    cpf: '111.111.111-11'
};
console.log(pessoaFisica);
let pessoas = ["José", "Maria"];
let listaPessoas = ["Pedro", ...pessoas]; // objeto propagado para um array
console.log(listaPessoas);
