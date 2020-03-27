package com.salesianostriana.dam;

import androidx.fragment.app.FragmentActivity;
import androidx.lifecycle.ViewModelProviders;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.salesianostriana.dam.commons.MyApp;

import java.util.List;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class MyLocalProductoRecyclerViewAdapter extends RecyclerView.Adapter<MyLocalProductoRecyclerViewAdapter.ViewHolder> {

    private final List<ProductoResponse> mValues;
    private Context ctx;
    private final ProductoListener mListener;
    private ProductoViewModel productoViewModel;
    AppService appService = ServiceGenerator.createServiceEstablecimiento(AppService.class);

    public MyLocalProductoRecyclerViewAdapter(List<ProductoResponse> items, ProductoViewModel productoViewModel, ProductoListener listener, Context ctx) {
        mValues = items;
        mListener = listener;
        this.ctx = ctx;
        this.productoViewModel = productoViewModel;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.fragment_local_producto, parent, false);

        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(final ViewHolder holder, int position) {
        holder.mItem = mValues.get(position);

        holder.tvNombre.setText(holder.mItem.getNombre());
        holder.tvDescripcion.setText(holder.mItem.getDescripcion());
        if(holder.mItem.isGlucosa()) {
            holder.ivGluten.setVisibility(View.VISIBLE);
        } else if(holder.mItem.isLactosa()) {
            holder.ivLactosa.setVisibility(View.VISIBLE);
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
                                    .with(ctx)
                                    .load(bmp)
                                    .into(holder.ivPhoto);
                        } else {
                            Toast.makeText(ctx, "API Error", Toast.LENGTH_SHORT).show();
                        }
                    }
                }

                @Override
                public void onFailure(Call<ResponseBody> call, Throwable t) {
                    Toast.makeText(MyApp.getContext(), "Error", Toast.LENGTH_SHORT).show();

                }
            });

        }else{
            Toast.makeText(ctx, "IMAGEN NULL", Toast.LENGTH_SHORT).show();
        }

        holder.tvPrecio.setText(String.valueOf(holder.mItem.getPrecio()));

        holder.cbCarrito.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton compoundButton, boolean b) {
                if(b) {
                    productoViewModel.addProducto(holder.mItem);
                } else {
                    productoViewModel.deleteProducto(holder.mItem);
                }
            }
        });



    }

    public void doPedido() {
        productoViewModel.doPedido();
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
        public final TextView tvNombre;
        public final TextView tvDescripcion;
        public final TextView tvPrecio;
        public final ImageView ivPhoto;
        public final ImageView ivGluten;
        public final ImageView ivLactosa;
        public final CheckBox cbCarrito;
        public ProductoResponse mItem;

        public ViewHolder(View view) {
            super(view);
            mView = view;
            tvNombre = view.findViewById(R.id.textViewNombre);
            tvDescripcion = view.findViewById(R.id.textViewDescripcion);
            tvPrecio = view.findViewById(R.id.textViewPrecio);
            ivPhoto = view.findViewById(R.id.imageViewPhoto);
            ivGluten = view.findViewById(R.id.imageViewGluten);
            ivLactosa = view.findViewById(R.id.imageViewLactosa);
            cbCarrito = view.findViewById(R.id.checkBoxAnyadir);
        }

    }
}
