package com.salesianostriana.dam;


import java.util.List;

import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.Multipart;
import retrofit2.http.POST;
import retrofit2.http.Part;
import retrofit2.http.Path;

public interface AppService {

    @FormUrlEncoded
    @POST("/oauth/token")
    Call<RespuestaToken> login(
        @Field("client_id") String clientId,
        @Field("username") String email,
        @Field("password") String pswd,
        @Field("grant_type") String password,
        @Header("Authorization") String authorization

    );

    @Multipart
    @POST("/client/register")
    Call<Cliente> register(@Part MultipartBody.Part file,
                                 @Part("email") RequestBody email,
                                 @Part("username") RequestBody username,
                                 @Part("password") RequestBody password,
                                 @Part("nombre") RequestBody nombre,
                                 @Part("apellidos") RequestBody apellidos,
                                 @Part("edad") RequestBody edad);

    @GET("/api/local/{id}/productos")
    Call<List<ProductoResponse>> getLocalProducts(@Path("id") String id);

    @POST("/api/local/{id}/pedido/")
    Call<PedidoResponse> doPedido(@Path("id") String id);


    @GET("/api/local/")
    Call<List<EstablecimientoResponse>> listaLocalesCercanos();

    @GET("/downloadFile/{fileName}")
    Call<ResponseBody> downImage(@Path("fileName") String fileName);

    @GET("/api/local/{id}")
    Call<EstablecimientoResponse> getOneLocalId(@Path("id") String id);

    @FormUrlEncoded
    @POST("/client/register")
    Call<UserResponse> registerClient();

    @FormUrlEncoded
    @POST("/admin/register")
    Call<UserResponse> registerAdmin();

    @FormUrlEncoded
    @POST("/gerente/register")
    Call<UserResponse> registerGerente();





}
