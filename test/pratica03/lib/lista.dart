import 'package:flutter/material.dart';
// import 'package:navegacao/signup.dart';

class Lista extends StatefulWidget {
  @override
  _Lista createState() => _Lista();
}

class _Lista extends State<Lista> {
  final _formKey = GlobalKey<FormState>();
  @override 
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Lista"),
      ),
      body: Padding(
      key: _formKey,
      padding: EdgeInsets.all(10),
      child: Center(

        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            TextButton(
              onPressed: () {
                Navigator.pushNamed(context, '/cadastro');
              },
              child: Text("Cadastro"),
            ),
            Text("Pedro"),
              Divider(),
            Text("Paulo"),
              Divider(),
            Text("Pedra"),
              Divider(),
          ],
          
          ),
        ),
    ),
  
    );
  }
}