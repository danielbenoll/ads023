import 'dart:convert';
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class LoadingListScreen extends StatefulWidget {
  @override
  _LoadingListState createState() => _LoadingListState();  
}

class _LoadingListState extends State<LoadingListScreen> {
  List _dados = [];

  Future<bool> obterDados() async {
    const uri = "jsonplaceholder.typicode.com";
    final response = await http.get(Uri.https(uri, "users"));
    if (response.statusCode == 200) {
      setState(() {
        _dados = jsonDecode(response.body);
      });
      return true;
    }
    return false;
  }  

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    obterDados();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView.builder(
        scrollDirection: Axis.vertical,
        itemCount: _dados.length,
        itemBuilder: (ctxt, index) {
          return ListTile(
            leading: Icon(Icons.person),
            title: Text(_dados[index]["name"]),
            subtitle: Text(_dados[index]["email"]),
            trailing: Icon(Icons.delete),
          );
        },
      ),
    );
  }
}
