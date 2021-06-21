package com.example.pratica4;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private EditText txtUsuario;
    private EditText txtSenha;
    private Button btnEntrar;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        txtUsuario = (EditText) findViewById(R.id.txtUsuario);
        txtSenha = (EditText) findViewById(R.id.txtSenha);
        btnEntrar = (Button) findViewById(R.id.btnEntrar);

        btnEntrar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String usuario = txtUsuario.getText().toString();
                String senha = txtSenha.getText().toString();

                if (!usuario.equals("") && !senha.equals("")) {
                    if(usuario.equals("admin") && senha.equals("1234")) {
                        Toast.makeText( MainActivity.this,  "OK", Toast.LENGTH_LONG).show();
                    }
                }else{
                    Toast.makeText( MainActivity.this,  "Preencha todos os campos", Toast.LENGTH_LONG).show();
                }


            }
        });

    }
}