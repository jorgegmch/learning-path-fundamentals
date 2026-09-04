package com.campus.c4.holamundoweb.models;

import org.springframework.stereotype.Component;

import lombok.Data;
/*import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;*/

    @Component
    @Data
    /*@Setter
    @Getter
    @ToString
    @RequiredArgsConstructor*/
    public class Producto {
        private String nombre;
        private String descripcion;
        private Integer precio;
    }