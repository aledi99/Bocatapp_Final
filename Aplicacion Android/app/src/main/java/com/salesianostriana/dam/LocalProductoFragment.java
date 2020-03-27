package com.salesianostriana.dam;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;

import com.salesianostriana.dam.commons.MyApp;
import com.salesianostriana.dam.commons.SharedPreferencesManager;
import com.salesianostriana.dam.dummy.DummyContent;
import com.salesianostriana.dam.dummy.DummyContent.DummyItem;

import java.util.ArrayList;
import java.util.List;


public class LocalProductoFragment extends Fragment {


    private int mColumnCount = 1;
    private ProductoListener mListener;
    private ProductoViewModel productoViewModel;
    private List<ProductoResponse> list = new ArrayList<>();
    private MyLocalProductoRecyclerViewAdapter adapter;


    public LocalProductoFragment() {
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        productoViewModel = ViewModelProviders.of(getActivity()).get(ProductoViewModel.class);

        setHasOptionsMenu(true);


    }

    @Override
    public void setHasOptionsMenu(boolean hasMenu) {
        super.setHasOptionsMenu(hasMenu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        switch(item.getItemId()) {
            case R.id.cart:
                AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(
                        getContext());

                alertDialogBuilder.setTitle("Confirmar pedido");
                alertDialogBuilder.setMessage("¿Deseas terminar con el pedido?");
                alertDialogBuilder.setPositiveButton("Confirmar", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        adapter.doPedido();
                    }
                });

                alertDialogBuilder.setNegativeButton("Cancelar", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        dialogInterface.cancel();
                    }
                });

                AlertDialog alert = alertDialogBuilder.create();

                alert.show();

                break;
        }
        return super.onOptionsItemSelected(item);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_local_producto_list, container, false);

        // Set the adapter
        if (view instanceof RecyclerView) {
            Context context = view.getContext();
            RecyclerView recyclerView = (RecyclerView) view;
            if (mColumnCount <= 1) {
                recyclerView.setLayoutManager(new LinearLayoutManager(context));
            } else {
                recyclerView.setLayoutManager(new GridLayoutManager(context, mColumnCount));
            }

            adapter = new MyLocalProductoRecyclerViewAdapter(list, productoViewModel, mListener, getContext());

            loadProducts();

        }
        return view;
    }


    @Override
    public void onAttach(Context context) {
        super.onAttach(context);

    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }

    void loadProducts() {
        productoViewModel.listLocalProducts(SharedPreferencesManager.getStringValue("local_id")).observe(getActivity(), new Observer<List<ProductoResponse>>() {
            @Override
            public void onChanged(List<ProductoResponse> productoResponses) {
                list = productoResponses;
                adapter.notifyDataSetChanged();
            }
        });
    }
}
