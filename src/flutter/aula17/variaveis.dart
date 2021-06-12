void main() {
  // tipagem forte
  int numero;
  // print(numero); // null safety

  // tipagem dinâmica
  dynamic variavel;
  variavel = true;
  print(variavel.runtimeType);
  variavel = 'texto';
  print(variavel.runtimeType);

  // nomes válidos
  double juros = 2.56;
  bool _condicao = false; // _ indica privado
  print(juros);
  print(_condicao);

  // nomes inválidos
  // 1variavel, $texto;

  // variáveis mutáveis
  var x;
  x = 10;
  print(x);

  // variáveis imutáveis
  const a = 20;
  print(a);

  final b = 30;
  // b = 1; // não pode ser modificada
  print(b);

  final c = {'str': 'texto', 'num': 1};
  c['str'] = 'outro'; // pode-se alterar as propriedades de um mapa
  print(c);

  final d = ['Item 1', 'Item 2'];
  d.add('Item 3'); // pode-se alterar os elementos de uma lista
  print(d);

  // forçar null
  int? contador;
  print(contador);

  // variável inicializada atrasada
  late bool status;
}
