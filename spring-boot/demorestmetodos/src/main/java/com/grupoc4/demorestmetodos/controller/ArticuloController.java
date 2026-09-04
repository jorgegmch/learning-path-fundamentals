package com.grupoc4.demorestmetodos.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupoc4.demorestmetodos.entities.Articulo;
import com.grupoc4.demorestmetodos.services.ArticuloService;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/articulos")
public class ArticuloController {

    private final ArticuloService articuloService;

    ArticuloController(ArticuloService articuloService) {
        this.articuloService = articuloService;
    }

    @GetMapping
    public List<Articulo> findAllArticulos() {
        return articuloService.findAllArticulos();
    }

    @GetMapping("/{id}")
    public Articulo findByArticulo(@PathVariable Long id) {
        return articuloService.findByIdArticulo(id);
    }
    
    @PostMapping
    public Articulo addArticulo(@RequestBody Articulo articulo) {
        return  articuloService.addArticulo(articulo.getId(), articulo.getNombre(), articulo.getValor());
    }
    
    @PutMapping("/{id}")
    public Articulo modifyArticulo(@PathVariable Long id, @RequestBody Articulo articulo) {
        return articuloService.modifyArticulo(articulo.getId(), articulo.getNombre(), articulo.getValor());
    }

    @DeleteMapping("/{id}")
    public Boolean deletArticulo(@PathVariable Long id) {
        return articuloService.deleteArticuloById(id);
    }

}
