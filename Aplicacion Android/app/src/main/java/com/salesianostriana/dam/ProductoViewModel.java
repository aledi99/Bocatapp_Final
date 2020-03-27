package com.salesianostriana.dam;

import android.app.Application;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.MutableLiveData;

import com.salesianostriana.dam.commons.SharedPreferencesManager;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ProductoViewModel extends AndroidViewModel {
    AppService appService;
    PedidoResponse productoResponse;
    List<ProductoResponse> list = new ArrayList<>();
    private ProductoRepository productoRepository;
    private MutableLiveData<List<ProductoResponse>> listAllLocals;
    MutableLiveData<Integer> idEstablecimientoSeleccionado;


    public ProductoViewModel(@NonNull Application application) {
        super(application);
        productoRepository = new ProductoRepository();
        listAllLocals = new MutableLiveData<>();
        this.idEstablecimientoSeleccionado = new MutableLiveData<>();
    }

    public MutableLiveData<List<ProductoResponse>> listLocalProducts(String id){
        listAllLocals = productoRepository.getProductosLocal(id);
        return listAllLocals;
    }

    public void addProducto(ProductoResponse productoResponse) {
        list.add(productoResponse);
    }

    public void deleteProducto(ProductoResponse productoResponse) {
        if(list.contains(productoResponse)) {
            list.remove(productoResponse);
        }
    }

    public void doPedido() {
        appService = ServiceGenerator.createServiceEstablecimiento(AppService.class);

        Call<PedidoResponse> call = appService.doPedido(SharedPreferencesManager.getStringValue("local_id"));

        call.enqueue(new Callback<PedidoResponse>() {
            @Override
            public void onResponse(Call<PedidoResponse> call, Response<PedidoResponse> response) {
                if(response.isSuccessful()) {
                    productoResponse = response.body();
                    Log.d("final", productoResponse.toString());
                }
            }

            @Override
            public void onFailure(Call<PedidoResponse> call, Throwable t) {

            }
        });
    }


}