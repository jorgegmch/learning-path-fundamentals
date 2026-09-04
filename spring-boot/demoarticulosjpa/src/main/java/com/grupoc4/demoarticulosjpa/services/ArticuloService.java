package com.grupoc4.demoarticulosjpa.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.grupoc4.demoarticulosjpa.entities.Articulo;
import com.grupoc4.demoarticulosjpa.repositories.ArticuloRepository;

@Service
public class ArticuloService {
    private final ArticuloRepository articuloRepository;

    ArticuloService(ArticuloRepository articuloRepository) {
        this.articuloRepository = articuloRepository;
    }
    
    public Articulo addArticulo(String nombre, Double valor) {

        if (nombre == null || nombre.trim().isEmpty()) {
            throw new IllegalArgumentException("El nombre del articulo es obligatorio");
        }
    
        if (valor == null || valor <= 0) {
            throw new IllegalArgumentException("El precio del articulo debe ser mayor a cero");
        }
    
        return articuloRepository.save(new Articulo(null, nombre, valor));
    }

    public List<Articulo> findAllArticulos() {
        return articuloRepository.findAll();
    }

    public Articulo findByIdArticulo(Long id) {
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("El codigo del articulo debe ser mayor a cero");
        }

        return articuloRepository.findById(id).orElse(null);
    }

    public Boolean deleteArticuloById(Long id) {
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("El codigo del articulo debe ser mayor a cero");
        }

        articuloRepository.deleteById(id);
        return !articuloRepository.existsById(id);
    }

    public Articulo modifyArticulo(Long id, String nombre, Double valor) {
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("El codigo del articulo debe ser mayor a cero");
        }

        if (nombre == null || nombre.trim().isEmpty()) {
            throw new IllegalArgumentException("El nombre del articulo es obligatorio");
        }

        if (valor == null || valor <= 0) {
            throw new IllegalArgumentException("El precio del articulo debe ser mayor a cero");
        }

        Articulo articulo = articuloRepository
            .findById(id)
            .orElseThrow(() -> new IllegalArgumentException("No existe el artículo con el código: " + id));

        articulo.setNombre(nombre.toUpperCase());
        articulo.setValor(valor);

        return articuloRepository.save(articulo);
        }

}
