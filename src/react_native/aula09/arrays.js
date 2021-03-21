// array unidimensional
let frutas = ["banana", "maçã", "laranja"];
for (let i = 0; i < frutas.length; i++)
    console.log(frutas[i]);

frutas.push("uva"); // adiciona item no final do array
for (let fruta of frutas)
    console.log(fruta);

frutas.pop(); // remove item do final do array
for (let fruta of frutas)
    console.log(fruta);

// array multidimensional
let alunos = [
    [2018001, "Jose", "jose@iesb.br"],
    [2018002, "Maria", "maria@iesb.br"],
];
for (let i = 0; i < alunos.length; i++) {
    for (let j = 0; j < alunos[i].length; j++) {
        console.log(alunos[i][j]);
    }
}
