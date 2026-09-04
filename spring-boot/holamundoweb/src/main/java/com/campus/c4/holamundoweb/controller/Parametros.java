package com.campus.c4.holamundoweb.controller;

/*import org.springframework.web.bind.annotation.RestController;*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.campus.c4.holamundoweb.models.Producto;

@Controller
public class Parametros {
    @GetMapping("/api/parametros")
    public String getParametros(@RequestParam String nombre) {
        if  (nombre != null && !nombre.isEmpty()) {
            return "Bienvenido/a, " + nombre + ", al grandioso mundo de Spring Boot";
        } else
        return "Parametros vacíos";
    }

    @GetMapping("/api/sumanumeros")
    public String getSumaNumeros(@RequestParam String n1, @RequestParam String n2) {
        return "El resultado de la suma es: " + (Integer.parseInt(n1) + Integer.parseInt(n2));
    }

    @GetMapping("/api/producto")
    @Autowired
    public Producto getProducto(@RequestParam String nombre, @RequestParam String precio, @RequestParam String descripcion) {
        Producto producto = new Producto();
        producto.setNombre(nombre);
        producto.setPrecio(Integer.parseInt(precio));
        producto.setDescripcion(descripcion);
        return producto;
    }
    
    
}