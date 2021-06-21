import 'package:flutter/material.dart';
import 'package:listas/listtile.dart';
import 'package:listas/listview.dart';
import 'package:listas/loadinglist.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  final opcao = 1;

  @override
  Widget build(BuildContext context) {
    Widget child;

    if (opcao == 1) {
      child = ListViewScreen();
    } else if (opcao == 2) {
      child = ListTileScreen();
    } else {
      child = LoadingListScreen();
    }

    return MaterialApp(
      title: 'Listas',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: child,
    );
  }
}
