/*
  Tipos primitivos do Dart 
  - bool   : representa true ou false
  - int    : representa os números inteiros
  - double : representa os números de ponto flutuante
  - String : representa caracteres delimitados por ' ou "
  - List   : representa listas (similar ao array)
  - Set    : representa conjuntos
  - Map    : representa mapas (similar ao array associativo)
*/
void main() {
  print(10.runtimeType);
  print(1.0.runtimeType);
  print(true.runtimeType);
  print('um texto qualquer'.runtimeType);
  print([1, 2, 3].runtimeType);
  print({1, 2, 3}.runtimeType);
  print({1: '1', 2: '2', 3: '2'}.runtimeType);
}
