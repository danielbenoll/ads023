import 'package:flutter/material.dart';

class ListTileScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView.builder(
        itemCount: 10,
        itemBuilder: (ctxt, index) {
          return ListTile(
            leading: Icon(Icons.person),
            title: Text("Titulo $index"),
            subtitle: Text("subtitulo $index"),
            trailing: Icon(Icons.delete),
          );
        },
      ),
    );
  }
}
