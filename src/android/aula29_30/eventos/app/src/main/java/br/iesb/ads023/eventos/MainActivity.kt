package br.iesb.ads023.eventos

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.KeyEvent
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setTitle("Eventos")

        val textView1 = findViewById<TextView>(R.id.textView1)
        val button1 = findViewById<Button>(R.id.button1)
        val button2 = findViewById<Button>(R.id.button2)
        val button3 = findViewById<Button>(R.id.button3)
        val editText1 = findViewById<EditText>(R.id.editText1)
        val editText2 = findViewById<EditText>(R.id.editText2)

        button1.setOnClickListener {
            textView1.text = "Clicou!"
        }

        button2.setOnLongClickListener {
            textView1.text = "Pressionou!"
            return@setOnLongClickListener true
        }

        button3.setOnTouchListener { v, event ->
            textView1.text = "Tocou!"
            return@setOnTouchListener true
        }

        editText1.setOnKeyListener { v, keyCode, event ->
            if (keyCode == KeyEvent.KEYCODE_ENTER &&
                event.action == KeyEvent.ACTION_DOWN
            ) {
                editText2.requestFocus()
                return@setOnKeyListener true
            }

            return@setOnKeyListener false
        }

        editText2.setOnFocusChangeListener { v, hasFocus ->
            textView1.text = if (hasFocus) "Ganhou foco!"
            else "Perdeu foco!"
        }
    }
}