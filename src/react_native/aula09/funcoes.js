// função tradicional
function nome_da_funcao(parametros) {
    // corpo da função
}

function msg() {
    return 'Olá!';
}
console.log(msg());

// arrow function
const nome_da_funcao = (parametros) => {
    // corpo da função
}

// parênteses é obrigátorio se não houver parâmetros
const msg = () => {
    return 'Olá!';
}
console.log(msg());

// parênteses é opcional se têm um parâmento apenas
const msg = (nome) => {
    return 'Olá ' + nome + '!';
}
const msg = nome => {
    return 'Olá ' + nome + '!';
}
console.log(msg('José'));

// parênteses é obrigátorio se houver mais de um parâmetro
const msg = (nome, sobrenome) => {
    return 'Olá ' + nome + ' ' + sobrenome + '!';
}
console.log(msg('José', 'Júnior'));

// parâmetro com valor padão
const msg = (nome = 'Jose') => {
    return 'Olá ' + nome + '!';
}
console.log(msg()); 
console.log(msg('Maria'));

// retorno implícito
const msg = (nome) => 'Ola ' + nome + '!';
console.log(msg('José')); 

// função assíncrona
async function espera(tempo) {
    await new Promise(r => setTimeout(r, tempo));
    console.log('Esperou', tempo, 'ms');
}
espera(2000);
