package com.salesianostriana.dam;

import androidx.lifecycle.MutableLiveData;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.salesianostriana.dam.commons.MyApp;
import com.salesianostriana.dam.commons.SharedPreferencesManager;


import java.util.ArrayList;
import java.util.List;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class MyEstablecimientoRecyclerViewAdapter extends RecyclerView.Adapter<MyEstablecimientoRecyclerViewAdapter.ViewHolder> {

    private  List<EstablecimientoResponse> mValues;
    private Context context;
    AppService appService = ServiceGenerator.createServiceEstablecimiento(AppService.class);
    private String filename;
    private EstablecimientoViewModel establecimientoViewModel;


    public MyEstablecimientoRecyclerViewAdapter(List<EstablecimientoResponse> items,EstablecimientoViewModel establecimientoViewModel, Context context) {
        this.mValues = items;
        this.establecimientoViewModel = establecimientoViewModel;
        this.context = context;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.fragment_local_cercania, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(final ViewHolder holder, int position) {
        holder.mItem = mValues.get(position);
        holder.nombre.setText(holder.mItem.getNombre());
        if(holder.mItem.getCategoria() != null) {
            holder.categoria.setText(holder.mItem.getCategoria().getNombre());
        }else{
            Toast.makeText(context, "CATEGORIA NULL", Toast.LENGTH_SHORT).show();
        }

        if(holder.mItem.getImagen() != null) {
            Call<ResponseBody> call = appService.downImage(holder.mItem.getImagen().getNombreFichero());
            call.enqueue(new Callback<ResponseBody>() {
                @Override
                public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                    if (response.isSuccessful()) {
                        if (response.body() != null) {
                            Bitmap bmp = BitmapFactory.decodeStream(response.body().byteStream());
                            Glide
                                    .with(context)
                                    .load(bmp)
                                    .into(holder.imagenPortada);
                        } else {
                            Toast.makeText(context, "API Error", Toast.LENGTH_SHORT).show();
                        }
                    }
                }

                @Override
                public void onFailure(Call<ResponseBody> call, Throwable t) {
                    Toast.makeText(MyApp.getContext(), "Error", Toast.LENGTH_SHORT).show();

                }
            });

        }else{
            Toast.makeText(context, "IMAGEN NULL", Toast.LENGTH_SHORT).show();
        }

        holder.mView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (null != establecimientoViewModel) {
                    SharedPreferencesManager.setStringValue("local_id", String.valueOf(holder.mItem.getId()));
                    establecimientoViewModel.setIdEstablecimientoSeleccionado(holder.mItem.getId());
                }
            }

        });

    }






    public void setData(List<EstablecimientoResponse> list){
        if(this.mValues != null) {
            this.mValues.clear();
        } else {
            this.mValues =  new ArrayList<>();
        }
        this.mValues.addAll(list);
        notifyDataSetChanged();
    }

    @Override
    public int getItemCount() {
        if(mValues != null) {
            return mValues.size();
        } else {
            return 0;
        }
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        public final View mView;
        public final TextView nombre;
        public final TextView categoria;
        public final ImageView imagenPortada;
        public EstablecimientoResponse mItem;

        public ViewHolder(View view) {
            super(view);
            mView = view;
            nombre = view.findViewById(R.id.nombre);
            categoria = view.findViewById(R.id.categoria);
            imagenPortada = view.findViewById(R.id.imageViewImagen);
        }

    }
}
