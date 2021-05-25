import 'package:flutter/material.dart';
import 'package:navegacao/home.dart';
import 'package:navegacao/settings.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Navegação',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      routes: {
        '/home': (context) => HomeScreen(),
        '/settings': (context) => SettingsScreen(),
      },
      initialRoute: '/home',
    );
  }
}
