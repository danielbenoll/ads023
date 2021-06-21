package br.iesb.ads023.navegacao

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class SettingsActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_settings)
        setTitle("Configurações")

        val botao = findViewById<Button>(R.id.btnVoltar)
        botao.setOnClickListener {
            finish()
        }
    }
}