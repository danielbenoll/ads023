taxa = 0;
idade = 32;
sexo = 'F';

// comando if
if (idade > 25) // se condicao for verdadeira então
    taxa = 0.2;

if (sexo == 'F') {
    taxa = 0.5;
}

console.log("valor da taxa: ", taxa);

// comando if-else
if (idade < 25) // se condicao for verdadeira então
    taxa = 0.2;
else // caso contrário
    taxa = 0;

if (sexo != 'F') {
    taxa = 0.5;
}
else {
    taxa = 0.2;
}

console.log("valor da taxa: ", taxa);

// comando if-else-if
if (idade > 25) {
    taxa = 0.3;
}
else if (sexo == 'F') {
    taxa = 0.5;
}
else if (sexo == 'M') {
    taxa = 0.2;
}
else {
    taxa = 0;
}

console.log("valor da taxa: ", taxa);

// ifs aninhados
if (idade > 25) {
    if (sexo == 'F') {
        taxa = 0.5;
    }
    else {
        taxa = 0.2;
    }
}
else {
    taxa = 0;
}

console.log("valor da taxa: ", taxa);

// comando switch
switch (idade) {
    case 24:
        taxa = 0.2; // executada se idade for igual a 24
        break;
    case 25:
        taxa = 0.3; // executada se idade for igual a 25
    case 26:
        taxa = 0.5; // executada se idade for igual a 25 ou 26
        break;
    default:
        taxa = 1.0; // executada em nenhum dos casos anteriores
}

console.log("valor da taxa: ", taxa);
