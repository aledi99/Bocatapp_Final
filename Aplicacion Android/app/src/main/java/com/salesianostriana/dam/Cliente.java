package com.salesianostriana.dam;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import org.joda.time.LocalDate;
import org.joda.time.LocalDateTime;

import java.util.Date;
import java.util.List;
import java.util.Set;

public class Cliente {

    @SerializedName("id")
    @Expose
    private Integer id;
    @SerializedName("nombre")
    @Expose
    private String nombre;
    @SerializedName("username")
    @Expose
    private String username;
    @SerializedName("apellidos")
    @Expose
    private String apellidos;
    @SerializedName("edad")
    @Expose
    private Integer edad;
    @SerializedName("email")
    @Expose
    private String email;
    @SerializedName("favoritos")
    @Expose
    private Object favoritos;
    @SerializedName("localizacion")
    @Expose
    private Ubicacion localizacion;
    @SerializedName("avatar")
    @Expose
    private Avatar avatar;
    @SerializedName("pedidos")
    @Expose
    private Object pedidos;
    @SerializedName("roles")
    @Expose
    private List<String> roles = null;
    @SerializedName("fechaCreacion")
    @Expose
    private LocalDate fechaCreacion;
    @SerializedName("lastPasswordChangedAt")
    @Expose
    private String lastPasswordChangedAt;
    @SerializedName("idCliente")
    @Expose
    private Integer idCliente;
    @SerializedName("validado")
    @Expose
    private Boolean validado;
    @SerializedName("enabled")
    @Expose
    private Boolean enabled;
    @SerializedName("authorities")
    @Expose
    private List<Authority> authorities = null;
    @SerializedName("accountNonExpired")
    @Expose
    private Boolean accountNonExpired;
    @SerializedName("accountNonLocked")
    @Expose
    private Boolean accountNonLocked;
    @SerializedName("credentialsNonExpired")
    @Expose
    private Boolean credentialsNonExpired;


    public Cliente(Integer id, String nombre, String username, String apellidos, Integer edad, String email, Object favoritos, Ubicacion localizacion, Avatar avatar, Object pedidos, List<String> roles, LocalDate fechaCreacion, String lastPasswordChangedAt, Integer idCliente, Boolean validado, Boolean enabled, List<Authority> authorities, Boolean accountNonExpired, Boolean accountNonLocked, Boolean credentialsNonExpired) {
        super();
        this.id = id;
        this.nombre = nombre;
        this.username = username;
        this.apellidos = apellidos;
        this.edad = edad;
        this.email = email;
        this.favoritos = favoritos;
        this.localizacion = localizacion;
        this.avatar = avatar;
        this.pedidos = pedidos;
        this.roles = roles;
        this.fechaCreacion = fechaCreacion;
        this.lastPasswordChangedAt = lastPasswordChangedAt;
        this.idCliente = idCliente;
        this.validado = validado;
        this.enabled = enabled;
        this.authorities = authorities;
        this.accountNonExpired = accountNonExpired;
        this.accountNonLocked = accountNonLocked;
        this.credentialsNonExpired = credentialsNonExpired;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public Integer getEdad() {
        return edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Object getFavoritos() {
        return favoritos;
    }

    public void setFavoritos(Object favoritos) {
        this.favoritos = favoritos;
    }

    public Ubicacion getLocalizacion() {
        return localizacion;
    }

    public void setLocalizacion(Ubicacion localizacion) {
        this.localizacion = localizacion;
    }

    public Avatar getAvatar() {
        return avatar;
    }

    public void setAvatar(Avatar avatar) {
        this.avatar = avatar;
    }

    public Object getPedidos() {
        return pedidos;
    }

    public void setPedidos(Object pedidos) {
        this.pedidos = pedidos;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public LocalDate getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(LocalDate fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public String getLastPasswordChangedAt() {
        return lastPasswordChangedAt;
    }

    public void setLastPasswordChangedAt(String lastPasswordChangedAt) {
        this.lastPasswordChangedAt = lastPasswordChangedAt;
    }

    public Integer getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(Integer idCliente) {
        this.idCliente = idCliente;
    }

    public Boolean getValidado() {
        return validado;
    }

    public void setValidado(Boolean validado) {
        this.validado = validado;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public List<Authority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(List<Authority> authorities) {
        this.authorities = authorities;
    }

    public Boolean getAccountNonExpired() {
        return accountNonExpired;
    }

    public void setAccountNonExpired(Boolean accountNonExpired) {
        this.accountNonExpired = accountNonExpired;
    }

    public Boolean getAccountNonLocked() {
        return accountNonLocked;
    }

    public void setAccountNonLocked(Boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }

    public Boolean getCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    public void setCredentialsNonExpired(Boolean credentialsNonExpired) {
        this.credentialsNonExpired = credentialsNonExpired;
    }
}
