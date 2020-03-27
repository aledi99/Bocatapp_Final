package com.salesianostriana.dam;

import android.widget.Toast;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;

import com.salesianostriana.dam.commons.MyApp;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ProductoRepository {
    LiveData<List<ProductoResponse>> allEstablecimientos;
    AppService appService;

    public ProductoRepository() {
        appService = ServiceGenerator.createServiceEstablecimiento(AppService.class);

    }

    public MutableLiveData<List<ProductoResponse>> getProductosLocal(String id) {
        final MutableLiveData<List<ProductoResponse>> dataProduct = new MutableLiveData<>();

        Call<List<ProductoResponse>> call = appService.getLocalProducts(id);
        call.enqueue(new Callback<List<ProductoResponse>>() {
            @Override
            public void onResponse(Call<List<ProductoResponse>> call, Response<List<ProductoResponse>> response) {
                if(response.isSuccessful()){
                    dataProduct.setValue(response.body());
                }else{
                    //Toast.makeText(MyApp.getContext(), "No se ha podido obtener resultados del api", Toast.LENGTH_SHORT).show();
                }
            }
            @Override
            public void onFailure(Call<List<ProductoResponse>> call, Throwable t) {
                Toast.makeText(MyApp.getContext(), "Error de conexión", Toast.LENGTH_SHORT).show();
            }
        });

        return dataProduct;
    }

}
