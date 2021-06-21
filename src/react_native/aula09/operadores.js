// operador de atribuição
x = 10;
y = 20;

// operador soma
console.log("x + y = ", x + y);

// operador subtração
console.log("x - y = ", x - y);

// operador multiplicação
console.log("x * y = ", x * y);

// operador divisão
console.log("x / y = ", x / y);

// operador resto da divisão
console.log("x % y = ", x % y);

// operadores de incremento e decremento
z = x++; // x era 10, depois x passou para 11
console.log("z = x++ => z = ", z, " e x = ", x);
z = ++x; // x era 11 e passo para 12
console.log("z = ++x => z = ", z, " e x = ", x);
console.log("x-- => ", x--); // usa o valor de x, depois decrementa
console.log("--x => ", --x); // decrementa x, depois usa o valor de x

// forma concatenada
console.log("x += 10 => ", x += 10);  // x = x + 10;
console.log("x -= 10 => ", x -= 10);  // x = x - 10;
console.log("x *= 10 => ", x *= 10);  // x = x * 10;
console.log("x /= 10 => ", x /= 10);  // x = x / 10;
console.log("x %%= 10 => ", x %= 10);  // x = x % 10;

x = 10;
y = '10';

// igual a
console.log("x === y? ", x === y); // 0 é falso, 1 é verdadeiro igual em valor e tipo
console.log("x == y? ", x == y);  // 0 é falso, 1 é verdadeiro igual em valor somente
console.log("x = y? ", x = y);    // não é igualdade

// diferente de
console.log("x != y? ", x != y);

// menor que
console.log("x < y? ", x < y);

// menor ou igual
console.log("x <= y? ", x <= y);

// maior que
console.log("x > y? ", x > y);

// maior ou igual
console.log("x >= y? ", x >= y);

// operador E
console.log("p = ", x == y);
console.log("q = ", x - 10 > y);
console.log("p & q = ", x == y && x - 10 > y); // falso E qualquer coisa é falso

// operador OU
console.log("p = ", x == y);
console.log("q = ", x - 10 > y);
console.log("p || q = ", x == y || x - 10 > y); // verdadeiro OU qualquer coisa é verdadeiro

// operador NÃO
console.log("!p = ", !(x == y)); // inverte o valor lógico
console.log("!q = ", !(x - 10 > y));
console.log("!(p || q) = ", !(x == y || x - 10 > y));
