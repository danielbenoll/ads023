import 'package:flutter/material.dart';
import 'package:navegacao/login.dart';
import 'package:navegacao/cadastro.dart';
import 'package:navegacao/lista.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Navegação',
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      routes: {
        '/login': (context) => Login(),
        '/cadastro': (context) => Cadastro(),
        '/lista': (context) => Lista(),
      },
      initialRoute: '/login',
    );
  }
}
