package br.iesb.ads023.formularios

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setTitle("Formulários")

        var btnEntrar = findViewById<Button>(R.id.btnEntrar)
        btnEntrar.setOnClickListener {
            if (validarFormulario())
                println("Sucesso!")
        }
    }

    fun validarFormulario(): Boolean {
        var valido = true
        val edtMatricula = findViewById<EditText>(R.id.edtMatricula)
        val edtSenha = findViewById<EditText>(R.id.edtSenha)

        if (edtMatricula.text.toString().length == 0) {
            edtMatricula.error = "Matrícula obrigatória"
            valido = false
        }

        when {
            edtSenha.text.toString().length == 0 -> {
                edtSenha.error = "Senha obrigatória"
                valido = false
            }
            edtSenha.text.toString().length < 6 -> {
                edtSenha.error = "Senha menor que 6 caracteres"
                valido = false
            }
        }

        return valido
    }
}