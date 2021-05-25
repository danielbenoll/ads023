import 'package:flutter/material.dart';

class Formulario extends StatefulWidget {
  @override
  _FormularioState createState() => _FormularioState();
}

class _FormularioState extends State<Formulario> {
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
