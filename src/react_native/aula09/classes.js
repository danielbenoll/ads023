// declaração de uma classe
class nome_da_classe {
    constructor(parametro) {
        this._propriedade = parametro;
    }    
}

class Pessoa {
    constructor(nome) {
        this._nome = nome;
    }
}
let pessoa = new Pessoa('José');
console.log(pessoa);

// getters e setters
class nome_da_classe {
    constructor(parametro) {
        this._propriedade = parametro;
    }    
    
    get propriedade() {
        return this._propriedade;
    }
    
    set propriedade(parametro) {
        this._propriedade = parametro;
    }
}

class Pessoa {
    constructor(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    } 
}
let pessoa = new Pessoa('José');
console.log(pessoa.nome);

// métodos
class nome_da_classe {
    constructor(parametro) {
        this.propriedade = parametro;
    }    
    nome_do_metodo() {
        // implementacao
    }
}

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
     return 'Olá!';
    }
}
let pessoa = new Pessoa('José');
console.log(pessoa.falar());

// heranca de classes
class nome_da_classe_filha extends nome_da_classe_pai {
    constructor(parametro) {
        super(paraemtro);
        this.propriedade = parametro;
    }    
}

class PessoaFisica extends Pessoa {
    constructor(nome, cpf) {
        super(nome);
        this._cpf = cpf;
    }
}
let pessoa = new PessoaFisica('José', '111.111.111-11');
console.log(pessoa);
