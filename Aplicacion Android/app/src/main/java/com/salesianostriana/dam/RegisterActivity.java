package com.salesianostriana.dam;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.salesianostriana.dam.commons.MyApp;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class RegisterActivity extends AppCompatActivity {
    private static final int READ_REQUEST_CODE = 42;
    Button btPhoto, btRegister;
    Uri uriS;
    ImageView ivPhoto, ivLogo;
    EditText etNombre, etApellidos, etEmail, etPassword, etEdad, etNick;
    AppService service;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        ivPhoto = findViewById(R.id.imageViewAvatar);
        ivLogo = findViewById(R.id.imageViewLogo);
        btPhoto = findViewById(R.id.buttonPhoto);
        btRegister = findViewById(R.id.buttonRegister);

        service = ServiceGenerator.createService(AppService.class);

        btPhoto.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                performFileSearch();
            }
        });

        etNick = findViewById(R.id.editTextNick);
        etNombre = findViewById(R.id.editTextNombre);
        etEmail = findViewById(R.id.editTextEmail);
        etApellidos = findViewById(R.id.editTextApellidos);
        etEdad = findViewById(R.id.editTextAge);
        etPassword = findViewById(R.id.editTextPassword);

        Glide.with(RegisterActivity.this).load(R.drawable.icono).into(ivLogo);

        btRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(final View v) {
                if(etNombre.getText().toString().isEmpty() || etNick.getText().toString().isEmpty() || etEmail.getText().toString().isEmpty() || etPassword.getText().toString().isEmpty() || etApellidos.getText().toString().isEmpty() || etEdad.getText().toString().isEmpty() || uriS == null) {

                } else {
                    try {
                        InputStream inputStream = getContentResolver().openInputStream(uriS);
                        ByteArrayOutputStream baos = new ByteArrayOutputStream();
                        BufferedInputStream bufferedInputStream = new BufferedInputStream(inputStream);
                        int cantBytes;
                        byte[] buffer = new byte[1024*4];

                        while ((cantBytes = bufferedInputStream.read(buffer,0,1024*4)) != -1) {
                            baos.write(buffer,0,cantBytes);
                        }


                        RequestBody requestFile =
                                RequestBody.create(baos.toByteArray(),
                                        MediaType.parse(getContentResolver().getType(uriS)));


                        MultipartBody.Part body =
                                MultipartBody.Part.createFormData("file", "avatar", requestFile);

                        RequestBody emailRequest = RequestBody.create(MultipartBody.FORM,etEmail.getText().toString());
                        RequestBody usernameRequest = RequestBody.create(MultipartBody.FORM,etNick.getText().toString());
                        RequestBody passwordRequest = RequestBody.create(MultipartBody.FORM,etPassword.getText().toString());
                        RequestBody nameRequest = RequestBody.create(MultipartBody.FORM,etNombre.getText().toString());
                        RequestBody apellidosRequest = RequestBody.create(MultipartBody.FORM,etApellidos.getText().toString());
                        RequestBody edadRequest = RequestBody.create(MultipartBody.FORM, etEdad.getText().toString());

                        Call<Cliente> call = service.register(body, emailRequest, usernameRequest, passwordRequest, nameRequest, apellidosRequest, edadRequest);

                        call.enqueue(new Callback<Cliente>() {
                            @Override
                            public void onResponse(Call<Cliente> call, Response<Cliente> response) {
                                if(response.isSuccessful()) {
                                    Log.d("prueba", response.body().getEmail());
                                    finish();
                                }
                            }

                            @Override
                            public void onFailure(Call<Cliente> call, Throwable t) {
                                Log.d("prueba", t.getMessage());
                            }
                        });



                    } catch (FileNotFoundException e) {
                        e.printStackTrace();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }

            }
        });

    }



    public void performFileSearch() {
        Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
        intent.addCategory(Intent.CATEGORY_OPENABLE);
        intent.setType("image/*");
        startActivityForResult(intent, READ_REQUEST_CODE);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == READ_REQUEST_CODE && resultCode == Activity.RESULT_OK) {
            Uri uri = null;
            if (data != null) {
                uri = data.getData();
                Log.i("Filechooser URI", "Uri: " + uri.toString());
                Glide
                        .with(this)
                        .load(uri)
                        .into(ivPhoto);
                uriS = uri;
            }
        }
    }
}
