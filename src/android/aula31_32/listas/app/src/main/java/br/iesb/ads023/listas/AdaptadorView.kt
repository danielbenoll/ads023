package br.iesb.ads023.listas

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class AdaptadorView(private val dados: List<String>, private val contexto: Context) :
    RecyclerView.Adapter<AdaptadorView.ItemView>() {
    class ItemView(view: View) : RecyclerView.ViewHolder(view) {
        val textView: TextView

        init {
            textView = view.findViewById<TextView>(R.id.textView)
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ItemView {
        val view = LayoutInflater.from(contexto).inflate(R.layout.recycler_item, parent, false)
        return ItemView(view)
    }

    override fun onBindViewHolder(holder: ItemView, position: Int) {
        holder.textView.text = dados[position]
    }

    override fun getItemCount(): Int {
        return dados.size
    }
}