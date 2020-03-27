package com.salesianostriana.dam;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class ProductoResponse {
    @SerializedName("id")
    @Expose
    private long id;
    @SerializedName("nombre")
    @Expose
    private String nombre;
    @SerializedName("descripcion")
    @Expose
    private String descripcion;
    @SerializedName("precio")
    @Expose
    private double precio;
    @SerializedName("activo")
    @Expose
    private boolean activo;
    @SerializedName("glucosa")
    @Expose
    private boolean glucosa;
    @SerializedName("lactosa")
    @Expose
    private boolean lactosa;
    @SerializedName("establecimiento")
    @Expose
    private EstablecimientoResponse2 establecimiento;
    @SerializedName("imagen")
    @Expose
    private ImagenResponse imagen;

    public ProductoResponse(long id, String nombre, String descripcion, double precio, boolean activo, boolean glucosa, boolean lactosa, EstablecimientoResponse2 establecimiento, ImagenResponse imagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.activo = activo;
        this.glucosa = glucosa;
        this.lactosa = lactosa;
        this.establecimiento = establecimiento;
        this.imagen = imagen;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public boolean isActivo() {
        return activo;
    }

    public void setActivo(boolean activo) {
        this.activo = activo;
    }

    public boolean isGlucosa() {
        return glucosa;
    }

    public void setGlucosa(boolean glucosa) {
        this.glucosa = glucosa;
    }

    public boolean isLactosa() {
        return lactosa;
    }

    public void setLactosa(boolean lactosa) {
        this.lactosa = lactosa;
    }

    public EstablecimientoResponse2 getEstablecimiento() {
        return establecimiento;
    }

    public void setEstablecimiento(EstablecimientoResponse2 establecimiento) {
        this.establecimiento = establecimiento;
    }

    public ImagenResponse getImagen() {
        return imagen;
    }

    public void setImagen(ImagenResponse imagen) {
        this.imagen = imagen;
    }
}
