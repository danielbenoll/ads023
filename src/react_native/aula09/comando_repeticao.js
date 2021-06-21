// comando for repete n vezes
for (i = 0; i < 10; i++) // 0 a 9 com salto de 1
    console.log(i);

// comando for percorre as propriedades de um objeto
objeto = { id: 1, nome: 'José', email: 'jose@iesb.br' };
for (prop in objeto)
    console.log(prop, '=>', objeto[prop]);

// comando for percorre os elementos de um array
array = ['a', 'b', 'c', 'd'];
for (item of array)
    console.log(item);

// comando while valida a condição antes de repetir
i = 0;
while (i < 10)
    console.log(i++);

// comando do while repete depois valiada a condição
i = 0;
do
    console.log(i++);
while (i < 10);
