package br.iesb.ads023.listas

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setTitle("Listagem")

        var lista = listOf<String>()
        for (i: Int in 1..16) {
            lista += "Item $i"
        }
        val adaptador = AdaptadorView(lista, this)
        val layout = LinearLayoutManager(this)
        val recyclerView = findViewById<RecyclerView>(R.id.recyclerView)
        recyclerView.apply {
            setHasFixedSize(true)
            layoutManager = layout
            adapter = adaptador
        }
    }
}