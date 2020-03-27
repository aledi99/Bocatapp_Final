package com.salesianostriana.dam;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;


public class PedidoResponse {
    @SerializedName("id")
    @Expose
    private long id;
    @SerializedName("horaPedido")
    @Expose
    private String horaPedido;
    @SerializedName("fechaPedido")
    @Expose
    private String fechaPedido;
    @SerializedName("total")
    @Expose
    private double total;
    @SerializedName("preparado")
    @Expose
    private boolean preparado;
    @SerializedName("entregado")
    @Expose
    private boolean entregado;
    @SerializedName("lineasPedido")
    @Expose
    private List<ProductoResponse> lineasPedido;

    public PedidoResponse(long id, String horaPedido, String fechaPedido, double total, boolean preparado, boolean entregado, List<ProductoResponse> lineasPedido) {
        this.id = id;
        this.horaPedido = horaPedido;
        this.fechaPedido = fechaPedido;
        this.total = total;
        this.preparado = preparado;
        this.entregado = entregado;
        this.lineasPedido = lineasPedido;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getHoraPedido() {
        return horaPedido;
    }

    public void setHoraPedido(String horaPedido) {
        this.horaPedido = horaPedido;
    }

    public String getFechaPedido() {
        return fechaPedido;
    }

    public void setFechaPedido(String fechaPedido) {
        this.fechaPedido = fechaPedido;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public boolean isPreparado() {
        return preparado;
    }

    public void setPreparado(boolean preparado) {
        this.preparado = preparado;
    }

    public boolean isEntregado() {
        return entregado;
    }

    public void setEntregado(boolean entregado) {
        this.entregado = entregado;
    }

    public List<ProductoResponse> getLineasPedido() {
        return lineasPedido;
    }

    public void setLineasPedido(List<ProductoResponse> lineasPedido) {
        this.lineasPedido = lineasPedido;
    }

}
