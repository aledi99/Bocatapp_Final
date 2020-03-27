package com.salesianostriana.dam;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

class EstablecimientoResponse2 {
    @SerializedName("id")
    @Expose
    private long id;
    @SerializedName("nombre")
    @Expose
    private String nombre;
    @SerializedName("descripcion")
    @Expose
    private String descripcion;
    @SerializedName("abierto")
    @Expose
    private boolean abierto;
    @SerializedName("valoracion")
    @Expose
    private float valoracion;
    @SerializedName("horaApertura")
    @Expose
    private String horaApertura;
    @SerializedName("horaCierre")
    @Expose
    private String horaCierre;
}
