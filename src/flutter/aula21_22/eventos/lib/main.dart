import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Eventos',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String _texto = "";
  
  bool _valor = false;  

  void pressionaBotao() {
    print('Você pressionou o botão!');
  }

  void pressionaTexto() {
    print('Você manteve pressionado mais que 500ms!');
  }

  void ficaMaiusculo(String value) {
    setState(() {
      _texto = value.toUpperCase();
    });
  }

  void mudaValor(bool value) {
    setState(() {
      _valor = value;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          ElevatedButton(
            onPressed: pressionaBotao,
            child: Text("Clique-me"),
          ),
          GestureDetector(
            onLongPress: pressionaTexto,
            child: Text('Toque aqui!'),
          ),
          TextField(
            onChanged: (value) => ficaMaiusculo(value),
          ),
          Text(_texto),
          Switch(value: _valor, onChanged: (value) => mudaValor(value)),
        ],
      ),
    );
  }
}
