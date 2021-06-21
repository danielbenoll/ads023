import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final _formKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Form(
        key: _formKey,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextFormField(
              keyboardType: TextInputType.number,
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Matrícula obrigatória';
                }
                return null;
              },
              decoration: InputDecoration(labelText: 'Matrícula'),
            ),
            TextFormField(
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Senha obrigatória';
                }
                if (value.length < 6) {
                  return 'Senha menor que 6 caracteres';
                }
                return null;
              },
              obscureText: true,
              decoration: InputDecoration(labelText: 'Senha'),
            ),
            ElevatedButton(
              child: Text("ENTRAR"),
              onPressed: () {
                if (_formKey.currentState != null &&
                    !_formKey.currentState.validate()) {
                  return;
                }
                print("Sucesso!");
                Navigator.pushNamed(context, '/lista');
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
    );
  }
}