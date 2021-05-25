import 'package:flutter/material.dart';
import 'package:formularios/formulario.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Formulários',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Formulario(),
    );
  }
}
