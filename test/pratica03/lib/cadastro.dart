import 'package:flutter/material.dart';
// import 'package:navegacao/signup.dart';

class Cadastro extends StatefulWidget {
  @override
  _Cadastro createState() => _Cadastro();
}

class _Cadastro extends State<Cadastro> {
  final _formKey = GlobalKey<FormState>();
  @override 
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Cadastro"),
      ),
      body: Padding(
      key: _formKey,
      padding: EdgeInsets.all(10),
      child: Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
              TextFormField(
              autofocus: true,
              keyboardType: TextInputType.text,
              style: new TextStyle(color: Colors.black, fontSize: 20),
              decoration: InputDecoration(
                labelText: "Campo 1",
                labelStyle: TextStyle(color: Colors.black)),
              ),
              Divider(),
              TextFormField(
              autofocus: true,
              keyboardType: TextInputType.text,
              style: new TextStyle(color: Colors.black, fontSize: 20),
              decoration: InputDecoration(
                labelText: "Campo 2",
                labelStyle: TextStyle(color: Colors.black)),
              ),
              Divider(),
              TextFormField(
              autofocus: true,
              keyboardType: TextInputType.text,
              style: new TextStyle(color: Colors.black, fontSize: 20),
              decoration: InputDecoration(
                labelText: "Campo 3",
                labelStyle: TextStyle(color: Colors.black)),
              ),
              Divider(),
            ElevatedButton(
              child: Text("CADASTRAR"),
              onPressed: () {
                if (_formKey.currentState != null &&
                    !_formKey.currentState.validate()) {
                  return;
                }
                print("Sucesso!");
                Navigator.pushNamed(context, '/home');
              },
              style: ButtonStyle(
                minimumSize: MaterialStateProperty.all(
                  Size(double.infinity, 36),
                ),
              ),
            ),
          ],
          
          ),
        ),
    ),
  
    );
  }
}