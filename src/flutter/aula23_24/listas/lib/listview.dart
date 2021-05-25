import 'package:flutter/material.dart';

class ListViewScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        scrollDirection: Axis.vertical,
        children: [
          Text("Item 1"),
          Text("Item 2"),
          Text("Item 3"),
          Text("Item 4"),
          Text("Item 5"),
          Text("Item 6"),
          Text("Item 7"),
          Text("Item 8"),
          Text("Item 9"),
          Text("Item 10"),
          Text("Item 11"),
          Text("Item 12"),
          Text("Item 13"),
          Text("Item 14"),
        ],
      ),
    );
  }
}
